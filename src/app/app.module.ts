import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './for-her/slider/slider.component';
import { HeaderComponent } from './for-her/header/header.component';
import { FooterComponent } from './for-her/footer/footer.component';
import { OfferComponent } from './for-her/offer/offer.component';
import { AuditoryComponent } from './for-her/auditory/auditory.component';
import { OfficeComponent } from './for-her/office/office.component';
import { UseCasesComponent } from './for-her/use-cases/use-cases.component';
import { ContactsComponent } from './for-her/contacts/contacts.component';
import { ExampleComponent } from './for-her/example/example.component';
import { ResultsComponent } from './for-her/results/results.component';
import { ReviewsComponent } from './for-her/reviews/reviews.component';
import { PricesComponent } from './for-her/prices/prices.component';
import { ProductsComponent } from './for-her/products/products.component';
import { QuestionsComponent } from './for-her/questions/questions.component';
import { AdvantagesComponent } from './for-her/advantages/advantages.component';
import { TechnicsComponent } from './for-her/technics/technics.component';
import { AppRoutingModule } from './app-routing.module';
import { ForHerComponent } from './for-her/for-her.component';
import { ForHimComponent } from './for-him/for-him.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    OfferComponent,
    AuditoryComponent,
    OfficeComponent,
    UseCasesComponent,
    ContactsComponent,
    ExampleComponent,
    ResultsComponent,
    ReviewsComponent,
    PricesComponent,
    ProductsComponent,
    QuestionsComponent,
    AdvantagesComponent,
    TechnicsComponent,
    ForHerComponent,
    ForHimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
