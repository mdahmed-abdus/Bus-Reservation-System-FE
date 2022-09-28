import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: User = new User();

  constructor(private router: Router) {}

  ngOnInit(): void {
    try {
      this.user = JSON.parse(sessionStorage['user']);
      this.isLoggedIn = true;
    } catch {
      // TODO: IMP make false in prod
      this.isLoggedIn = true;
    }
  }

  onLogout(): void {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
