import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user : [];
  imageURL = environment.imageURL;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser = () => {
    this.authService.get('api/users?page=2').subscribe(response => {
      console.log("in get list", response.data);
      this.user = response.data;
      console.log(this.user);
    })
  }

}
