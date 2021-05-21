import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
