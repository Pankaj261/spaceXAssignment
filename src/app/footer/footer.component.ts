import { Component, OnInit } from '@angular/core';
import { constant } from '../constants/constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Fetching constant...
  const: any = constant;

  constructor() { }

  ngOnInit(): void {
  }

}
