import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-singleresource',
  templateUrl: './singleresource.component.html',
  styleUrls: ['./singleresource.component.css']
})
export class SingleresourceComponent implements OnInit {
  singleUser: {};
  imageURL = environment.imageURL;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.getSingleUser();
  }

  getSingleUser = () => {
    this.authservice.get('api/unknown/2').subscribe(response => {
      
      this.singleUser = response;
      console.log("in single resource",this.singleUser);
    })
  }

}