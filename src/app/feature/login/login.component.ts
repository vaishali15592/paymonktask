import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) { }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit = () => {
      const data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      if(this.loginForm.valid){
        this.authService.post('api/login', data).subscribe(response => {
          console.log("in login subs", response);
          this.toastr.success("login successfully");
          localStorage.setItem("token", response.token);
          this.authService.isAuthenticated();
          this.router.navigate(['/create']);
        })
      }else{
        this.toastr.error("Please enter defined data");
      }
      
      
    }

  }