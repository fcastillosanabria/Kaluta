import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QalutaToursComponent } from './features/qaluta-tours/qaluta-tours.component';
import { HeaderComponent } from './shared/header/header.component';
import { SecondaryMenuComponent } from './shared/secondary-menu/secondary-menu.component';
import { SeccionQalutaStoreComponent } from './features/qaluta/seccion-qaluta-store/seccion-qaluta-store.component';
import { AboutComponent } from './features/qaluta/about/about.component';
import { FooterComponent } from './features/qaluta/footer/footer.component';
import { HomeComponent } from './features/qaluta/home/home.component';
import { ChatbotComponent } from './features/qaluta/chatbot/chatbot.component';
import { QalutaDictionaryComponent } from './features/qaluta-dictionary/qaluta-dictionary.component';
import { Qaluta360Component } from './features/qaluta-360/qaluta-360.component';
import { QalutaStoreComponent } from './features/qaluta-store/qaluta-store.component';
import { ScrollSequenceComponent } from './features/qaluta/scroll-sequence/scroll-sequence.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    QalutaToursComponent,
    HeaderComponent,
    SecondaryMenuComponent,
    SeccionQalutaStoreComponent,
    ChatbotComponent,
    QalutaDictionaryComponent,
    Qaluta360Component,
    QalutaStoreComponent,
    ScrollSequenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
