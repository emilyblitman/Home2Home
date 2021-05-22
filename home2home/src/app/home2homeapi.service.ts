
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Home2HomeApiService {

  constructor(private http: Http) { }

  getPropertiesIndex() {
    return this.http.get( 'http://localhost:8080/json/properties.json')
   //return this.http.get( '/app/properties/')
    .map(response => response.json());
  }

  getProperties(index: string) {
    return this.http.get( 'http://localhost:8080/json/properties/' + index + '.json')
    //return this.http.get( '/app/properties/' + index)
    .map(response => response.json());
  }
}

