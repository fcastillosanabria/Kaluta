import { Component } from '@angular/core';

@Component({
  selector: 'app-qaluta-tours-paquetes',
  templateUrl: './qaluta-tours-paquetes.component.html',
  styleUrls: ['./qaluta-tours-paquetes.component.css'],
})
export class QalutaToursPaquetesComponent {
  packages = [

    {
      type: 'VIAJE',
      title: 'Sabores de Qaluta',
      subtitle: 'Partiendo desde Lima',
      description: 'Viaje + comida típica',
      image: 'assets/img/tupinachaca.webp',
      price: 260,
      tag: 'Experiencia cultural',
    },
    {
      type: 'VIAJE',
      title: 'Vivir Qaluta',
      subtitle: 'Partiendo desde Lima',
      description: 'Viaje + comida + hospedaje',
      image: 'assets/img/parqueTupe.webp',
      price: 420,
      tag: 'Recomendado',
    },
    {
      type: 'PAQUETE',
      title: 'Jaqaru Vivo',
      subtitle: 'Turismo cultural',
      description: 'Experiencia educativa',
      image: 'assets/img/iglesiaTupe.webp',
      price: 520,
      tag: 'Oferta Especial',
      rating: 4.8,
      days: '3 días / 2 noches',
    },
  ];
}
