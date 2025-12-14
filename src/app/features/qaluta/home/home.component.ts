import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// Logos de las empresas colaboradoras
  partners = [
    {
      name: 'Empresa 1',
      logo: 'assets/img/dbu.jpg',
    },
    {
      name: 'Empresa 2',
      logo: 'assets/img/logoUNDC.jpg',
    },
    {
      name: 'Empresa 3',
      logo: 'assets/img/logoUNDC.jpg',
    },
    {
      name: 'Empresa 4',
      logo: 'assets/img/logoUNDC.jpg',
    },
    {
      name: 'Empresa 5',
      logo: 'assets/img/logoUNDC.jpg',
    },
  ];

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
