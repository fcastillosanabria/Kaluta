import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
// Logos de las empresas colaboradoras
  partners = [
    {
      name: 'Empresa 1',
      logo: 'assets/img/dbu.webp',
    },
    {
      name: 'Empresa 2',
      logo: 'assets/img/logoUNDC.webp',
    },
    {
      name: 'Empresa 3',
      logo: 'assets/img/logoMinCultura.webp',
    },
    {
      name: 'Empresa 4',
      logo: 'assets/img/muniTupe.webp',
    },
  ];
}
