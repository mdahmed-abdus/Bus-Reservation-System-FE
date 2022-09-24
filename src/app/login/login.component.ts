import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'LoginUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: LoginUser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { email, password } = this.user;

    if (email && password) {
      this.userService.loginUser(this.user);
      // redirect to dashboard
    } else {
      alert('Please enter all details');
    }
  }

  cancelButton(): void {
    window.location.href = '/';
  }
}
