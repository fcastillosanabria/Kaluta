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
      days: 1
    },
    {
      type: 'VIAJE',
      title: 'Vivir Qaluta',
      subtitle: 'Partiendo desde Lima',
      description: 'Viaje + comida + hospedaje',
      image: 'assets/img/parqueTupe.webp',
      price: 420,
      tag: 'Recomendado',
      days: 2
    },
    {
      type: 'PAQUETE',
      title: 'Jaqaru Vivo',
      subtitle: 'Turismo cultural',
      description: 'Experiencia educativa',
      image: 'assets/img/iglesiaTupe.webp',
      price: 520,
      tag: 'Oferta Especial',
      days: 3
    }
  ];

  filteredPackages = [...this.packages];

  selectedTypes: string[] = [];
  selectedDays: number[] = [];

  applyFilters() {
    this.filteredPackages = this.packages.filter(pkg => {

      const matchType =
        this.selectedTypes.length === 0 ||
        this.selectedTypes.includes(pkg.type);

      const matchDays =
        this.selectedDays.length === 0 ||
        this.selectedDays.includes(pkg.days);

      return matchType && matchDays;
    });
  }

  toggleType(type: string) {
    this.toggleSelection(this.selectedTypes, type);
    this.applyFilters();
  }

  toggleDays(days: number) {
    this.toggleSelection(this.selectedDays, days);
    this.applyFilters();
  }

  private toggleSelection(array: any[], value: any) {
    const index = array.indexOf(value);
    index === -1 ? array.push(value) : array.splice(index, 1);
  }
}
