import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.entity';

@Component({
  selector: 'app-load-users-without-resolver',
  templateUrl: './load-users-without-resolver.component.html',
  styleUrls: ['./load-users-without-resolver.component.css']
})
export class LoadUsersWithoutResolverComponent implements OnInit {
  _users:User[];

  settings = {
    actions: false,
    columns: {
      id: { title: 'ID' },
      name: { title: 'Full Name' },
      username: { title: 'User Name' },
      email: { title: 'Email' }
    }
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    console.log("this._users:",this._users);
    console.log("load data asynchronously");
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this._users = users,
        err => console.log(err),
        () => 
        console.log("(loaded now)this._users:",this._users))};
}