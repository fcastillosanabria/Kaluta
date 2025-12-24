import { Component } from '@angular/core';

@Component({
  selector: 'app-qaluta-360-salas',
  templateUrl: './qaluta-360-salas.component.html',
  styleUrls: ['./qaluta-360-salas.component.css']
})
export class Qaluta360SalasComponent {
salas = [
    {
      title: 'Plaza Principal de Tupe',
      description: 'El corazón que une a la comunidad jaqaru; un espacio libre, acogedor y con una vista impresionante.',
      image: 'assets/img/parqueTupe.webp',
      route: 'https://gorgeous-flan-26777e.netlify.app/',
      badge: 'SALA 1',
      color: 'bg-warning'
    },
    {
      title: 'Tupinachaka "el Viejo Tupino"',
      description: 'Una vista poco explorada; el guardián que nos protege, "el Viejo Tupino".',
      image: 'assets/img/tupinachaca.webp',
      route: 'https://gorgeous-flan-26777e.netlify.app/',
      badge: 'SALA 2',
      color: 'bg-info'
    }
  ];
}
