import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
images: string[] = [
    'assets/img/ceoHablando.webp',
    'assets/img/proyectoQaluta.webp'
  ];

  currentImageIndex = 0;
  isPaused = false;
  fadeIn = true;
  intervalId: any;

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.fadeIn = false;

        setTimeout(() => {
          this.currentImageIndex =
            (this.currentImageIndex + 1) % this.images.length;
          this.fadeIn = true;
        }, 300);
      }
    }, 3500);
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
