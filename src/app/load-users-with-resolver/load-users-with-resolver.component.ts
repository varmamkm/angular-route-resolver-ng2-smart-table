import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-users-with-resolver',
  templateUrl: './load-users-with-resolver.component.html',
  styleUrls: ['./load-users-with-resolver.component.css']
})
export class LoadUsersWithResolverComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
    console.log("load data before component is loaded");
  }

}