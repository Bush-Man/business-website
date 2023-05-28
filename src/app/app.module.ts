import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './Pages/home/home.component';
//import { HomeBottomComponent } from './components/home-bottom/home-bottom.component';
import { HomeTopComponent } from './components/home-top/home-top.component';
//import { HomeTopPostComponent } from './components/home-top-post/home-top-post.component';
//import { SinglePostComponent } from './Pages/single-post/single-post.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { CardsComponent } from './components/cards/cards.component';
import { AboutComponent } from './components/about/about.component';
import { StatsComponent } from './components/stats/stats.component';
import { ServicesComponent } from './components/services/services.component';
import { BookingCardComponent } from './components/booking-card/booking-card.component';
import { TechniciansComponent } from './components/technicians/technicians.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { AboutPageHeroComponent } from './components/about-page-hero/about-page-hero.component';
import { ServicesPageHeroComponent } from './components/services-page-hero/services-page-hero.component';
import { ServicePageComponent } from './Pages/service-page/service-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { ContactsPageHeroComponent } from './components/contacts-page-hero/contacts-page-hero.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { BookingPageComponent } from './Pages/booking-page/booking-page.component';
import { BookingPageHeroComponent } from './components/booking-page-hero/booking-page-hero.component';
import { TechniciansPageHeroComponent } from './components/technicians-page-hero/technicians-page-hero.component';
import { TechniciansPageComponent } from './Pages/technicians-page/technicians-page.component';
import { TestimonialsPageHeroComponent } from './components/testimonials-page-hero/testimonials-page-hero.component';
import { TestimonialsPageComponent } from './Pages/testimonials-page/testimonials-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   // PostComponent,
    HomeComponent,
   // HomeBottomComponent,
     
    HomeTopComponent,
        // HomeTopPostComponent,
        // SinglePostComponent,
         AdminComponent,
         CardsComponent,
         AboutComponent,
         StatsComponent,
         ServicesComponent,
         BookingCardComponent,
         TechniciansComponent,
         TestimonialsComponent,
         FooterComponent,
         AboutPageComponent,
         AboutPageHeroComponent,
         ServicesPageHeroComponent,
         ServicePageComponent,
         ContactPageComponent,
         ContactsPageHeroComponent,
         ContactCardComponent,
         BookingPageComponent,
         BookingPageHeroComponent,
         TechniciansPageHeroComponent,
         TechniciansPageComponent,
         TestimonialsPageHeroComponent,
         TestimonialsPageComponent,
         
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
  ],
  providers: [HashLocationStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
