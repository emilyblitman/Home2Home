import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.router'
import { APP_BASE_HREF } from '@angular/common';

//import { Home2homeapiService } from 'app/home2homeapi.service';

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { BookingComponent } from './booking/booking.component';
import { TravelerComponent } from './traveler/traveler.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    BookingComponent,
    TravelerComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  //providers: [ {provide: APP_BASE_HREF, useValue: '/'}, Home2homeapiService ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }