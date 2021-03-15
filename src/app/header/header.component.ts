import { Component, OnInit } from '@angular/core';
import { constant } from '../constants/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Fetching constant...
  const: any = constant;

  constructor() { }

  ngOnInit(): void {
  }

}
