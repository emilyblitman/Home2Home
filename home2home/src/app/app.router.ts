import { Routes, RouterModule } from '@angular/router';
//import { WelcomeComponent } from './welcome/welcome.component';
//import { PropertiesComponent } from './property/property.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  //  { path: '', component: WelcomeComponent },
  //  { path: 'property', component: PropertiesComponent },
    { path: 'property/:id', component: PropertyComponent}
];

export const routing = RouterModule.forRoot(routes);
