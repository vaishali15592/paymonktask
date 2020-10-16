import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  createArray: [];

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService
             ) { }

    ngOnInit() {
        this.createForm = this.formBuilder.group({
            name: ['', Validators.required],
            job: ['', [Validators.required]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.createForm.controls; }

    onSubmit = () => {
      const data = {
        name: this.createForm.value.name,
        job: this.createForm.value.job
      }
      this.authService.post('api/users', data).subscribe(response => {
        console.log("in create subs", response);
        this.createArray = response;
        localStorage.setItem('createUser', JSON.stringify(this.createArray));
        this.toastr.success("Created successfully");
      })
      
    }

  }