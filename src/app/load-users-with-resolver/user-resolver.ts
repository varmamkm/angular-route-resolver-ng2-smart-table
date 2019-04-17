import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../user.entity';

@Injectable()
export class UserResolver implements Resolve<User[]> {
  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers();
  }

}