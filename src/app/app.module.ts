import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { SecondaryMenuComponent } from './shared/secondary-menu/secondary-menu.component';
import { SeccionQalutaStoreComponent } from './features/qaluta/seccion-qaluta-store/seccion-qaluta-store.component';
import { AboutComponent } from './features/qaluta/about/about.component';
import { FooterComponent } from './features/qaluta/footer/footer.component';
import { HomeComponent } from './features/qaluta/home/home.component';
import { ChatbotComponent } from './features/qaluta/chatbot/chatbot.component';
import { ScrollSequenceComponent } from './features/qaluta/scroll-sequence/scroll-sequence.component';
import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { Qaluta360HomeComponent } from './features/qaluta-360/qaluta-360-home/qaluta-360-home.component';
import { Qaluta360SliderComponent } from './features/qaluta-360/qaluta-360-slider/qaluta-360-slider.component';
import { Qaluta360SalasComponent } from './features/qaluta-360/qaluta-360-salas/qaluta-360-salas.component';
import { QalutaStoreHomeComponent } from './features/qaluta-store/qaluta-store-home/qaluta-store-home.component';
import { QalutaStoreProductosComponent } from './features/qaluta-store/qaluta-store-productos/qaluta-store-productos.component';
import { QalutaStoreSliderComponent } from './features/qaluta-store/qaluta-store-slider/qaluta-store-slider.component';
import { QalutaToursHomeComponent } from './features/qaluta-tours/qaluta-tours-home/qaluta-tours-home.component';
import { QalutaToursParalaxComponent } from './features/qaluta-tours/qaluta-tours-paralax/qaluta-tours-paralax.component';
import { QalutaToursPaquetesComponent } from './features/qaluta-tours/qaluta-tours-paquetes/qaluta-tours-paquetes.component';
import { QalutaToursSliderComponent } from './features/qaluta-tours/qaluta-tours-slider/qaluta-tours-slider.component';
import { QalutaDictionaryHomeComponent } from './features/qaluta-dictionary/qaluta-dictionary-home/qaluta-dictionary-home.component';
import { QalutaDictionarySliderComponent } from './features/qaluta-dictionary/qaluta-dictionary-slider/qaluta-dictionary-slider.component';
import { QalutaDictionaryContenidoComponent } from './features/qaluta-dictionary/qaluta-dictionary-contenido/qaluta-dictionary-contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    QalutaToursHomeComponent,
    HeaderComponent,
    SecondaryMenuComponent,
    SeccionQalutaStoreComponent,
    ChatbotComponent,
    QalutaDictionaryHomeComponent,
    Qaluta360HomeComponent,
    QalutaStoreHomeComponent,
    ScrollSequenceComponent,
    SocialMediaComponent,
    Qaluta360HomeComponent,
    Qaluta360SliderComponent,
    Qaluta360SalasComponent,
    QalutaStoreHomeComponent,
    QalutaStoreProductosComponent,
    QalutaStoreSliderComponent,
    QalutaToursHomeComponent,
    QalutaToursParalaxComponent,
    QalutaToursPaquetesComponent,
    QalutaToursSliderComponent,
    QalutaDictionaryHomeComponent,
    QalutaDictionarySliderComponent,
    QalutaDictionaryContenidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
