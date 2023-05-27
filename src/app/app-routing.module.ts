import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ServicePageComponent } from './Pages/service-page/service-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { BookingPageComponent } from './Pages/booking-page/booking-page.component';
import { TechniciansPageComponent } from './Pages/technicians-page/technicians-page.component';
import { TestimonialsPageComponent } from './Pages/testimonials-page/testimonials-page.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'about',
    component:AboutPageComponent
  },
  {
    path: 'services',
    component:ServicePageComponent
  },
  {
    path: 'contacts',
    component: ContactPageComponent
    
  },
  {
    path: 'bookings',
    component:BookingPageComponent
  },
  {
    path: 'technicians',
    component:TechniciansPageComponent
  },
  {
    path: 'testimonials',
    component:TestimonialsPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
