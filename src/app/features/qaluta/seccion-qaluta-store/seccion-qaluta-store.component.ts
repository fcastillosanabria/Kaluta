import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-seccion-qaluta-store',
  templateUrl: './seccion-qaluta-store.component.html',
  styleUrls: ['./seccion-qaluta-store.component.css'],
})
export class SeccionQalutaStoreComponent implements AfterViewInit, OnDestroy {
  private container!: HTMLElement;
  private btn!: HTMLElement;
  private ctx!: gsap.Context;

  ngAfterViewInit(): void {

    this.container = document.querySelector('.stack-container')!;
    this.btn = document.querySelector('.cta-btn')!;

    this.ctx = gsap.context(() => {

      /* ===============================
         STACK 3D + DESPLAZAMIENTO
      =============================== */
      gsap.set('.img-stack', {
        transformStyle: 'preserve-3d',
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '.stack-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false
        }
      })
      .from('.img-stack', {
        xPercent: -50,
        opacity: 0,
        z: (i) => [80, 40, 0][i],
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out'
      });

      /* ===============================
         CTA (BIDIRECCIONAL)
      =============================== */
      gsap.timeline({
        scrollTrigger: {
          trigger: '.cta-store',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false
        }
      })
      .from('.cta-store', {
        y: 100,
        opacity: 0,
        duration: 1
      })
      .from('.cta-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, '-=0.5')
      .from('.cta-btn', {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.6)'
      }, '-=0.4');

    });

    /* ===============================
       MOUSE 3D
    =============================== */
    const onMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } =
        this.container.getBoundingClientRect();

      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;

      gsap.to('.img-stack', {
        rotateY: x,
        rotateX: -y,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to('.img-stack', {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    this.container.addEventListener('mousemove', onMouseMove);
    this.container.addEventListener('mouseleave', onMouseLeave);

    /* ===============================
       BUTTON HOVER
    =============================== */
    this.btn.addEventListener('mouseenter', () => {
      gsap.to(this.btn, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    this.btn.addEventListener('mouseleave', () => {
      gsap.to(this.btn, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
}
