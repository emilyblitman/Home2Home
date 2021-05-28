import { Routes, RouterModule } from '@angular/router';
//import { WelcomeComponent } from './welcome/welcome.component';
import { TravelerProfileComponent } from './travelerProfile/travelerProfile.component';
import { PropertyComponent } from './property/property.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  //{ path: '', component: BookingComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'travelerProfile/:id', component: TravelerProfileComponent },
  //{ path: 'travelerProfile', component: TravelerProfileComponent },
  { path: 'property/:id', component: PropertyComponent},
  { path: 'booking/:booking_id,', component: BookingComponent },
];

export const routing = RouterModule.forRoot(routes);
