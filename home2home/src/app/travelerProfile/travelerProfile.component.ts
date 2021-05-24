import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home2HomeApiService } from '../home2homeapi.service';
//import ITravelerModelAngular from '../share/ITravelerModelAngular';
//import IPropertyModelAngular from '../share/IPropertyModelAngular';
//import Item from '../share/Item';
@Component({
  selector: 'app-travelerProfile',
  templateUrl: './travelerProfile.component.html',
  styleUrls: ['./travelerProfile.component.css']
})
export class TravelerProfileComponent implements OnInit {
  userId: string;
  firstName: string; //get user by id
  lastName: string;
  propertyId: number;
  propertyName: string; //get property by propertyid
  propertyDescription: string;
  locationPreferences: string[]; //get preferences by id
  bookingId: number;
  bookingLocation: string;
  tripDates: string;
  //datePreferences:
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private user$: Home2HomeApiService
  ) {
    this.userId = route.snapshot.params['id'];
    user$.getUserInfo(this.userId)
    .subscribe(
      result => {
        this.firstName = result.fName;
        this.lastName = result.lName;
        this.propertyId = result.properties;
        //this.propertyName = user$.getProperties(this.propertyId.toString).result.pro;
        user$.getProperties(this.propertyId.toString())
        .subscribe (
          result => {
            this.propertyName = result.propertyName;
            this.propertyDescription = result.description;
          },
          () => {},
          () => {}
        );
        //this.propertyDescription = user$.getProperties(this.propertyId).description;
        this.locationPreferences = result.locationPreferences;
        this.bookingId = result.bookings;
        user$.getBookingInfo(this.bookingId.toString())
        .subscribe (
          result => {
            this.bookingLocation = "Italy";
            this.tripDates = result.tripDates;
          },
          () => {},
          () => {}
        );

      },
      () => {},
      () => {}
    );
    /*

    user$.getProperties(this.propertyId.toString())
    .subscribe (
      result => {
        this.propertyName = result.propertyName;
        this.propertyDescription = result.description;
      },
      () => {},
      () => {}
    );*/


}
  ngOnInit():void {}

  }

