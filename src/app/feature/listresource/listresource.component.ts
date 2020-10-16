import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-listresource',
  templateUrl: './listresource.component.html',
  styleUrls: ['./listresource.component.css']
})
export class ListresourceComponent implements OnInit {
  singleUser: [];
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.getSingleUser();
  }

  getSingleUser = () => {
    this.authservice.get('api/unknown').subscribe(response => {
      
      this.singleUser = response.data;
      console.log("in list resource",this.singleUser);
    })
  }

}
