import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.userService.getUsers();
  }

}