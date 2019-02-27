import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
