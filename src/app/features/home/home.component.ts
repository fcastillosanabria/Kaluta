import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  currentIndex = 0;
  slides = [0, 1, 2]; // Número de slides

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  ngAfterViewInit() {
    // Solo ejecutamos GSAP si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Registramos el plugin
      gsap.registerPlugin(ScrollTrigger);

      // Animaciones
      this.createParallaxEffect();
      this.createImageAnimation();
      this.funtionAnimationLeft('.funciones-container-left');
      this.funtionAnimationLeft('.funciones-container-right');
      this.funtionAnimationLeft('.funciones-container-left-2');
      this.createScrollTrigger('.soluciones-section');

      // Forzamos a ScrollTrigger a recalcular las posiciones de los triggers
      ScrollTrigger.refresh();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Limpiar cualquier ScrollTrigger al destruir el componente
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }

  createParallaxEffect() {
    gsap.to('.bg-cover', {
      y: '-40%',
      ease: 'none',
      scrollTrigger: {
        trigger: '#parallaxSection',
        start: 'top 70%',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
        toggleActions: 'play none none none',
      },
    });
  }

  createImageAnimation() {
    gsap.from('#imgCabecera', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  }

  funtionAnimationLeft(sectionClass: string) {
    gsap.from(`${sectionClass} .div-slide`, {
      x: -150,
      opacity: 0,
      duration: 0.2,
      ease: 'power4.in',
      scrollTrigger: {
        trigger: `${sectionClass}`,
        start: 'top 95%',
        end: 'bottom 30%',
        toggleActions: 'play reverse play reverse',
        once: false,
        markers: false,
      },
    });
  }

  createScrollTrigger(arg0: string) {
    // Implementa tu lógica aquí, asegurándote de que solo corra en navegador
  }
}
