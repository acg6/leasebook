import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private readonly URL_API = 'http://127.0.0.1:3000/leasebook-api/users';

  constructor( private http: HttpClient ) {}

  public register(user: User) {
    return this.http.post(`${this.URL_API}/register`, user);
  }

  public login(user: User) {
    return this.http.post(`${this.URL_API}/login`, user);
  }
}
