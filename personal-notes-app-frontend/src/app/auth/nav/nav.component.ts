import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isVisible: boolean = false;
  token = localStorage.getItem("token")
  constructor() { }

  ngOnInit() {
    console.log(this.token);
    if (this.token) {
      console.log('user authenticated');
      this.isVisible = false;
    }
    else {
      // there is no text overflow hide the fade out truncator
      console.log('please login');
      this.isVisible = true;
    }
  }

  hideNavBar() {
    this.token = localStorage.getItem("token");
    console.log(this.token);
    if (this.token) {
      console.log('user authenticated');
      this.isVisible = false;
    }
    else {
      // there is no text overflow hide the fade out truncator
      console.log('please login');
      this.isVisible = true;
    }
  }
}
