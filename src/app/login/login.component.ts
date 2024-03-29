import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'LoginUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: LoginUser = new LoginUser();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { mail, pwd } = this.user;

    if (mail && pwd) {
      alert('Submitting');
      this.userService.loginUser(this.user).subscribe((data) => {
        if (!data) {
          alert('Invalid email or password');
          return;
        }
        sessionStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/users/dashboard']);
      });
    } else {
      alert('Please enter all details');
    }
  }

  onCancel(): void {
    window.location.href = '/';
  }
}
