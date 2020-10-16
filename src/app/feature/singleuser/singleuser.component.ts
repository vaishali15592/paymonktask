import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  singleUser: {};
  imageURL = environment.imageURL;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.getSingleUser();
  }

  getSingleUser = () => {
    this.authservice.get('api/users/2').subscribe(response => {
      
      this.singleUser = response;
      console.log("in single user",this.singleUser);
    })
  }

}
