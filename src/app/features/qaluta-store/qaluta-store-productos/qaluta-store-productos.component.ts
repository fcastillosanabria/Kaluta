import { Component } from '@angular/core';

@Component({
  selector: 'app-qaluta-store-productos',
  templateUrl: './qaluta-store-productos.component.html',
  styleUrls: ['./qaluta-store-productos.component.css'],
})
export class QalutaStoreProductosComponent {
  // Filtros seleccionados
  selectedGenders: string[] = [];
  selectedSizes: string[] = [];

  products = [
    {
      name: 'Polo Shumay',
      category: ['hombre', 'mujer', 'unisex'],
      tallas: ['M'],
      price: 19.9,
      image: 'assets/img/poloShumay.webp',
      badge: 'Lo Más Vendido',
    },

    {
      name: 'Polo I love tupe',
      category: ['hombre', 'mujer', 'unisex'],
      tallas: ['L'],
      price: 19.9,
      image: 'assets/img/amoTupe.webp',
    },

    {
      name: 'Polo Qaylla',
      category: ['niño', 'unisex niños'],
      tallas: ['M', 'L', 'XL'],
      price: 19.9,
      image: 'assets/img/poloNiñosTupe.webp',
      stock: 'agotado',
    },
  ];

  // Aquí estarán los productos que realmente se muestran
  filteredProducts = this.products;


  // ==========================================
  // FILTRO DE TALLAS
  // ==========================================

  toggleSize(size: string): void {

    if (this.selectedSizes.includes(size)) {

      // Si ya estaba seleccionado, lo quitamos
      this.selectedSizes = this.selectedSizes.filter(
        item => item !== size
      );

    } else {

      // Si no estaba seleccionado, lo agregamos
      this.selectedSizes.push(size);

    }

    // Actualizar productos inmediatamente
    this.applyFilters();
  }


  // ==========================================
  // FILTRO DE GÉNERO
  // ==========================================

  toggleGender(gender: string): void {

    const value = gender.toLowerCase();

    if (this.selectedGenders.includes(value)) {

      this.selectedGenders = this.selectedGenders.filter(
        item => item !== value
      );

    } else {

      this.selectedGenders.push(value);

    }

    // Actualizar productos inmediatamente
    this.applyFilters();
  }


  // ==========================================
  // APLICAR TODOS LOS FILTROS
  // ==========================================

  applyFilters(): void {

    this.filteredProducts = this.products.filter(product => {

      // --------------------------------------
      // FILTRO DE GÉNERO
      // --------------------------------------

      const genderMatch =
        this.selectedGenders.length === 0 ||
        this.selectedGenders.some(gender =>
          product.category.includes(gender)
        );


      // --------------------------------------
      // FILTRO DE TALLA
      // --------------------------------------

      const sizeMatch =
        this.selectedSizes.length === 0 ||
        this.selectedSizes.some(size =>
          product.tallas.includes(size)
        );


      // --------------------------------------
      // AMBOS FILTROS
      // --------------------------------------

      return genderMatch && sizeMatch;
    });
  }


  // ==========================================
  // WHATSAPP
  // ==========================================

  comprarPorWhatsapp(nombreProducto: string): void {

    const telefono = '51934179705';

    const mensaje =
      `Hola vengo de Qaluta Store y quiero comprar: ${nombreProducto}`;

    const url =
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }

  // ------------------------------------------
  // LIMPIAR FILTROS
  // ------------------------------------------

  clearFilters(): void {
    this.selectedGenders = [];
    this.selectedSizes = [];
    this.applyFilters();
  }
}
