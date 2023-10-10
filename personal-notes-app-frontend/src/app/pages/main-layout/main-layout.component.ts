import { Component, OnInit } from '@angular/core';
import { NavComponent } from 'src/app/auth/nav/nav.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  responseData: any;
  constructor(
  ) { }

  ngOnInit() {
  }
}
