import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-load-users-without-resolver',
  templateUrl: './load-users-without-resolver.component.html',
  styleUrls: ['./load-users-without-resolver.component.css']
})
export class LoadUsersWithoutResolverComponent implements OnInit {
  _users:any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    console.log(this._users);
    console.log("load data asynchronously");
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this._users = users);
  }

}