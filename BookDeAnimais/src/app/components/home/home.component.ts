import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  toggleLogin!: { toggle: true };

  @Input() setToggle(event: any) {
    this.toggleLogin = event;
  }
  ngOnInit(): void {
    console.log();
  }
}
