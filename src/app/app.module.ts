import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './features/home/home.component';
import { DestinosComponent } from './features/destinos/destinos.component';
import { OfertasComponent } from './features/ofertas/ofertas.component';
import { ContactosComponent } from './features/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinosComponent,
    OfertasComponent,
    ContactosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
