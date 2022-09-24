import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from 'RegisterUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  user: RegisterUser = new RegisterUser();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { fname, lname, mail, pwd, confirmPwd, phoneNo } = this.user;

    if (fname && lname && mail && pwd && confirmPwd && phoneNo) {
      if (pwd !== confirmPwd) {
        alert('Password does not match');
      } else {
        alert('Submitting');
        this.userService.registerUser(this.user).subscribe((data) => {
          this.router.navigate(['/users/login']);
        });
      }
    } else {
      alert('Please enter all values');
    }
  }

  onCancel(): void {
    window.location.href = '/';
  }
}
