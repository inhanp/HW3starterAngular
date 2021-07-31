import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
  service: UserService;
  list: User[] = [];
  // TODO: this component must show a list of registered users.

  constructor() { }
  ngOnInit() {
    this.service.getAll().subscribe((users: User[]) => {
      this.list = users;
    });
   }
}
