import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  names: string[];

  constructor() {
    this.names = ['Bolek', 'Lolek', 'Tola'];
  }

  ngOnInit() {
  }

  userClicked(userName: string) {
      console.log(`From Parent ${userName}`);
  }

}
