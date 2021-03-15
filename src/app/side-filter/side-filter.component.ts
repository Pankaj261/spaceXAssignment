import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { constant } from '../constants/constant';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css'],
})
export class SideFilterComponent implements OnInit {

  // Declaring the variables...
  years: number[] = [];
  makeTrue: boolean = true;
  makeFale: boolean = false;
  @Output() sendParam = new EventEmitter<any>();
  param: any;

  // Fetching constant...
  const: any = constant;

  constructor(private __router: Router, private __route: ActivatedRoute) { }

  ngOnInit(): void {
    // Calling CreateYears...
    this.createYears();

    // Fething Parameters from Activated Routes...
    this.__route.queryParams.subscribe(params => {
      let key;
      // Fetching Keys...
      for (let keys in params) key = keys;
      this.param = params[this.const.launch_year] || params[this.const.launch_success] || params[this.const.land_success];
      // Emiiting the Route Value...
      this.sendParam.emit({ data: this.param, keys: key });
    });
  }

  // Creating the years...
  createYears(): void {
    for (let a = 2005; a <= 2020; a++) {
      this.years.push(a);
    }
  }

  // Setting the Payload...
  setPayload(key, data): void {
    const param = { [key]: data };

    // Navigating the Routes...
    this.__router.navigate([this.const.spaceX], { queryParams: param });
  }

}
