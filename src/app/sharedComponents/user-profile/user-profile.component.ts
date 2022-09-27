import { Component, OnInit } from '@angular/core';
import { User } from 'User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: User = new User();

  constructor() {
    try {
      this.user = JSON.parse(sessionStorage['user']);
    } catch {
      // this.router.navigate(['/']);
      return;
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    alert('Submitting');
    // TODO: submit to backend
  }
}
