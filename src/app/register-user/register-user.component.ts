import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'RegisterUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  user: RegisterUser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      contactNumber,
    } = this.user;

    if (
      firstName &&
      lastName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      contactNumber
    ) {
      if (password !== confirmPassword) {
        alert('Password does not match');
      } else {
        this.userService.registerUser(this.user);
        // redirect to login
      }
    } else {
      alert('Please enter all values');
    }
  }

  onCancel(): void {
    window.location.href = '/';
  }
}
