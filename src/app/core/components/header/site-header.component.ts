import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  
  constructor(private authService: AuthService, private router: Router) {
  }
  
  //let contactElement = document.getElementById('contact');

  ngOnInit() {
  }

  logout = () => {
    localStorage.clear();
    this.authService.isAuthenticated();
    this.router.navigate(['/']);
  }
}
