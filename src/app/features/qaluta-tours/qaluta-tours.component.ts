import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-qaluta-tours',
  templateUrl: './qaluta-tours.component.html',
  styleUrls: ['./qaluta-tours.component.css']
})
export class QalutaToursComponent {
isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 50; // ajustar umbral si se desea
  }

}
