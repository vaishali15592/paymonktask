import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  arrData = [];
  constructor(private formbuilder: FormBuilder,
     private router: Router,
     private authService: AuthService,
     private toastr: ToastrService) { }

  ngOnInit() {
    const oldData = JSON.parse(localStorage.getItem('user'));
    if (oldData && Array.isArray(oldData))
    {
      for(let i of oldData){
        const x={email: i.email, password: i.password}
        this.arrData.push(x)
      }
    }


    this.registerForm = this.formbuilder.group({
      email: ["", [Validators.required]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    })
  }

  get f() { return this.registerForm.controls}

  onSubmit = () => {
    const data = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,

    }
    console.log("form data", data);
    if(this.registerForm.valid){
      this.authService.post("api/register", data).subscribe(response => {
        console.log("in reg subs", response);
        this.toastr.success("Registered successfully");
        this.router.navigate(['/login']);
      })
    
    }else{
      this.toastr.error("Please enter defined data");
    }
}

}
