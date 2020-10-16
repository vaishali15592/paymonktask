import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup;
  patchData;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute
             ) { }

    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            name: ['', Validators.required],
            job: ['', [Validators.required]],
        });
      this.patchData = JSON.parse(localStorage.getItem('createUser'));
      this.updateForm.patchValue({
        name: this.patchData.name,
        job: this.patchData.job,
      })
    }

    // convenience getter for easy access to form fields
    get f() { return this.updateForm.controls; }

    onSubmit = () => {
      const data = {
        name: this.updateForm.value.name,
        job: this.updateForm.value.job
      }
      const id = this.route.snapshot.params.id;
      console.log(id);
      this.authService.put(`api/users/{id}`, data).subscribe(response => {
        console.log("in update subs", response);
        this.toastr.success("Updated successfully");
        this.updateForm.reset();
      })
      
    }

  }