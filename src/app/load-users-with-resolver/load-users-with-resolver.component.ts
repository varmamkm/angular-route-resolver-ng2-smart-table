import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.entity';

@Component({
  selector: 'app-load-users-with-resolver',
  templateUrl: './load-users-with-resolver.component.html',
  styleUrls: ['./load-users-with-resolver.component.css']
})
export class LoadUsersWithResolverComponent implements OnInit {

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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this._users = this.route.snapshot.data.users;
    console.log("this._users:",this._users);
    console.log("load data before component is loaded");
  }

}