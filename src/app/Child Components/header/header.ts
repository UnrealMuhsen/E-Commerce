import { Component,OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './../../../Service/Auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  currentUser: any;

  constructor(private authService: AuthService, private router: Router) {
    this.loadUser();
  }

  ngOnInit() {
    this.loadUser(); 
  }

  loadUser() {
    this.currentUser = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.currentUser = null; 
    this.router.navigate(['/Welcome']);
  }
}