import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class Home2homeapiService {

  constructor(private http: Http) { }

  getHomeListing() {
    return this.http.get('http://localhost:8080/json/homes.json')
      .map((response: any) => response.json());
  }

  getProfile(index: number) {
    return this.http.get('http://localhost:8080/json/homes/' + index + '.json')
    .map(response => response.json());
  }

}



