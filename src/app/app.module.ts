import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { AuditoryComponent } from './auditory/auditory.component';
import { OfficeComponent } from './office/office.component';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExampleComponent } from './example/example.component';
import { ResultsComponent } from './results/results.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PricesComponent } from './prices/prices.component';
import { ProductsComponent } from './products/products.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { TechnicsComponent } from './technics/technics.component';

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
    TechnicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
