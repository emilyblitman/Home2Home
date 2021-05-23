import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.router';
import { APP_BASE_HREF } from '@angular/common';

import { Home2HomeApiService } from './home2homeapi.service';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { BookingComponent } from './booking/booking.component';
import { TravelerComponent } from './traveler/traveler.component';
import { PropertiesTableComponent } from './property/properties-table/properties-table.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    BookingComponent,
    TravelerComponent,
    PropertiesTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}, Home2HomeApiService ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
