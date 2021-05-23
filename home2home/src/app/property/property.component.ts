/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.property = this.
  }

}
*/
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home2HomeApiService } from '../home2homeapi.service';
import ITravelerModelAngular from '../share/ITravelerModelAngular';
import IPropertyModelAngular from '../share/IPropertyModelAngular';
//import Item from '../share/Item';

@Component({
  moduleId: module.id,
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
/*
export class PropertyComponent implements OnInit {
   propertyId: string;
   propertyName: string;
   description: string;
   bedrooms: number;
   bathrooms: number;
   sqFeet: number;
   address: string;
   averageRating: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private property$: Home2HomeApiService
  ) {
    this.propertyId = route.snapshot.params['id'];
    property$.getProperties(this.propertyId)
    .subscribe(
      result => {
        this.propertyName = result.propertyName;
        this.description = result.description;
        this.bedrooms = result.bedrooms;
        this.bathrooms = result.bathrooms;
        this.sqFeet = result.sqFeet;
        this.address = result.address;
        this.averageRating = result.averageRating;
      },
      () => {},
      () => {}
    );
  }

  ngOnInit():void {}

}
*/
export class PropertyComponent implements OnInit {
  @Input() propertyNumber: number[] = [123, 222];
  properties: IPropertyModelAngular[];

  constructor(property$: Home2HomeApiService) {
    property$.getPropertiesIndex()
    .subscribe(
      result => this.properties = result,
      () => {},
      () => console.log('REST call:' + this.properties)
    );
  }

  ngOnInit() {
  }

}
