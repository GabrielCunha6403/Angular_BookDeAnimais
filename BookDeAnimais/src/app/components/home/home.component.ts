import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  toggleLogin!: { toggle: boolean };

  setToggle(event: any) {
    this.toggleLogin = event;
    console.log('oi');
  }
  ngOnInit(): void {}
}
