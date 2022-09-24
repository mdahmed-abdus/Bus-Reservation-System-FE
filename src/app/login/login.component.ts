import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'LoginUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: LoginUser = new LoginUser();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { email, password } = this.user;

    if (email && password) {
      alert('Submitting');
      this.userService.loginUser(this.user);
      // redirect to dashboard
    } else {
      alert('Please enter all details');
    }
  }

  onCancel(): void {
    window.location.href = '/';
  }
}
