import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './featured/featured.component';
import { AboutComponent } from './about/about.component';
import { StatsComponent } from './stats/stats.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagePopupComponent } from './image-popup/image-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    HeaderComponent,
    FeaturedComponent,
    AboutComponent,
    StatsComponent,
    ServicesComponent,
    ClientsComponent,
    FooterComponent,
    ImagePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
