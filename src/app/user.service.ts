import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from 'LoginUser';
import { RegisterUser } from 'RegisterUser';
import { Observable } from 'rxjs';
import { User } from 'User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private BASE_URL = 'http://localhost:8089/userApp1';
  private url = this.BASE_URL + '/users';

  constructor(private httpService: HttpClient) {}

  loginUser(loginUser: LoginUser): Observable<User> {
    return this.httpService.post<User>(this.url + '/login', loginUser);
  }

  registerUser(registerUser: RegisterUser): Observable<User> {
    return this.httpService.post<User>(this.url, registerUser);
  }
}
