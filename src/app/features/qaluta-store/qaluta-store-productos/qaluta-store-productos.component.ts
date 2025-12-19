import { Component } from '@angular/core';

@Component({
  selector: 'app-qaluta-store-productos',
  templateUrl: './qaluta-store-productos.component.html',
  styleUrls: ['./qaluta-store-productos.component.css']
})
export class QalutaStoreProductosComponent {

  products = [
    {
      name: "Polo Shumay",
      category: 'Polo para mujeres',
      colors: 2,
      price: 39.90,
      image: 'assets/img/poloShumay.png',
      badge: 'Lo Más Vendido'
    },
    {
      name: "Polo Qaylla",
      category: 'Polo para niños',
      colors: 2,
      price: 39.90,
      image: 'assets/img/poloNiñosTupe.png',
      badge: 'Lo Más Vendido'
    },
    {
      name: "Polo I love tupe",
      category: 'Polo para hombres',
      colors: 3,
      price: 39.90,
      image: 'assets/img/poloAmoTupe.png',
      badge: 'Lo Más Vendido'
    },
    {
      name: "Polo I love tupe",
      category: 'Polo para hombres',
      colors: 3,
      price: 39.90,
      image: 'assets/img/poloAmoTupe.png',
      badge: 'Lo Más Vendido'
    },
    {
      name: "Polo I love tupe",
      category: 'Polo para hombres',
      colors: 3,
      price: 39.90,
      image: 'assets/img/poloAmoTupe.png',
      badge: 'Lo Más Vendido'
    }
  ];
}
