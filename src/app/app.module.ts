import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TilesComponent } from './components/homepage/tiles/tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactFormComponent,
    HomepageComponent,
    TilesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
