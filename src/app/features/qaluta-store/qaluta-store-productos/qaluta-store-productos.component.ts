import { Component } from '@angular/core';

@Component({
  selector: 'app-qaluta-store-productos',
  templateUrl: './qaluta-store-productos.component.html',
  styleUrls: ['./qaluta-store-productos.component.css'],
})
export class QalutaStoreProductosComponent {
  products = [
    {
      name: 'Polo Shumay',
      category: 'Polo para mujeres',
      colors: 2,
      price: 39.9,
      image: 'assets/img/poloShumay.webp',
      badge: 'Lo Más Vendido',
    },
    {
      name: 'Polo Qaylla',
      category: 'Polo para niños',
      colors: 2,
      price: 39.9,
      image: 'assets/img/poloNiñosTupe.webp',
      badge: 'Lo Más Vendido',
    },
    {
      name: 'Polo I love tupe',
      category: 'Polo para hombres',
      colors: 3,
      price: 39.9,
      image: 'assets/img/amoTupe.webp',
      badge: 'Lo Más Vendido',
    },
    {
      name: 'Polo I love tupe',
      category: 'Polo para hombres',
      colors: 3,
      price: 39.9,
      image: 'assets/img/amoTupe.webp',
      badge: 'Lo Más Vendido',
    },
    {
      name: 'Polo I love tupe',
      category: 'Polo para hombres',
      colors: 3,
      price: 39.9,
      image: 'assets/img/amoTupe.webp',
      badge: 'Lo Más Vendido',
    },
  ];

  comprarPorWhatsapp(nombreProducto: string) {
    const telefono = '51934179705'; // 👉 Reemplaza con tu número peruano
    const mensaje = `Hola vengo de Qaluta Store y quiero comprar: ${nombreProducto}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }
}
