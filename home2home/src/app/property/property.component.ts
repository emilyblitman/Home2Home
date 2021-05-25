import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home2HomeApiService } from '../home2homeapi.service';
import IPropertyModelAngular from '../share/IPropertyModelAngular';

@Component({
  moduleId: module.id,
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

export class PropertyComponent implements OnInit {
  @Input() propertyNumber: number[];
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

