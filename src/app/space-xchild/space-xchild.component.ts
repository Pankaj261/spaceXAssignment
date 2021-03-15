import { Component, OnInit, OnDestroy } from '@angular/core';
import { LaunchServiceService } from '../services/launch-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-space-xchild',
  templateUrl: './space-xchild.component.html',
  styleUrls: ['./space-xchild.component.css']
})
export class SpaceXChildComponent implements OnInit, OnDestroy {

  // Declaring the variables...
  dataSubscription: Subscription;
  lauchDetails: any = [];
  param: any;
  showLoader: boolean;

  constructor(private __details: LaunchServiceService) { }

  ngOnInit(): void {
    // Fetching Data from GetSpace Service
    this.dataSubscription = this.getData();
  }

  // Caliing getData for fetching details...
  getData(param?): Subscription {
    this.showLoader = true;
    return this.dataSubscription = this.__details.getSpaceXData(param).subscribe(data => {
      this.lauchDetails = data;
      this.showLoader = false;
    });
  }

  // Getting activatad route value...
  getPayload(event) {
    this.getData(event);
  }

  // Unsubscribing the subscription when route changed...
  ngOnDestroy() {
    if (!!this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

}
