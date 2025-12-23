import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  // Imagenes del carrusel de la galería
  galleryImages  = [
    'assets/img/familiaJaqaruComiendo.png',
    'assets/img/jugandoFutbol.png',
    'assets/img/familiaJaqaruComiendo.png',
    'assets/img/familiaJaqaruComiendo.png',
    'assets/img/familiaJaqaruComiendo.png',
    'assets/img/familiaJaqaruComiendo.png',
    'assets/img/familiaJaqaruComiendo.png',
    'assets/img/familiaJaqaruComiendo.png',
    'assets/img/ceoHablando.jpg',
  ];
}
