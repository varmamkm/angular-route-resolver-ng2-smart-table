import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  usersurl = `https://jsonplaceholder.typicode.com/users`;

  constructor(
    private http: HttpClient) 
  { }

  getUsers (): Observable<any[]> {
    return this.http.get<any[]>(this.usersurl);
  }
}