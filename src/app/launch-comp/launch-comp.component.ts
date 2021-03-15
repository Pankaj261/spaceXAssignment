import { Component, OnInit, Input } from '@angular/core';
import { constant } from '../constants/constant';

@Component({
  selector: 'app-launch-comp',
  templateUrl: './launch-comp.component.html',
  styleUrls: ['./launch-comp.component.css'],
})
export class LaunchCompComponent implements OnInit {

  // Getting SpaceX Details...
  @Input() details: any;

  // Fetching constant...
  const: any = constant;

  constructor() { }

  ngOnInit(): void { }

}
