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
import { ParalaxComponent } from './features/qaluta/paralax/paralax.component';

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
    ParalaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
