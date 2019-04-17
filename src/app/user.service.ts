import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from './user.entity';

@Injectable()
export class UserService {
  usersurl = `https://jsonplaceholder.typicode.com/users`;

  constructor(
    private http: HttpClient) 
  { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersurl);
  }
}