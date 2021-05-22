import { Routes, RouterModule } from '@angular/router';
//import { WelcomeComponent } from './welcome/welcome.component';
//import { PropertiesComponent } from './property/property.component';
import { PropertyComponent } from './property/property.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  //  { path: '', component: WelcomeComponent },
  //  { path: 'property', component: PropertiesComponent },
    { path: 'property/:id', component: PropertyComponent},
    { path: 'booking/:id,', component: BookingComponent},
];

export const routing = RouterModule.forRoot(routes);
