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
  private ctx!: gsap.Context;
  private mm!: gsap.MatchMedia;

  ngAfterViewInit(): void {
    this.mm = gsap.matchMedia();

    this.mm.add('(min-width: 768px)', () => {
      this.ctx = gsap.context(() => {
        /* =========================
         STACK ANIMATION
      ========================= */

        gsap.set('.img-stack', {
          transformStyle: 'preserve-3d',
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.stack-container',
              start: 'top 80%',
              end: 'bottom 70%',
              toggleActions: 'play reverse play reverse',
              markers: false,
            },
          })
          .from('.img-stack', {
            xPercent: -30,
            opacity: 0, // 🔥 CORRECTO
            z: (i) => [80, 40, 0][i],
            duration: 1.2,
            stagger: 0.15,
            ease: 'expo.out',
          });

        /* =========================
         MOUSE 3D
      ========================= */

        const container = document.querySelector(
          '.stack-container',
        ) as HTMLElement;

        if (!container) return;

        const onMouseMove = (e: MouseEvent) => {
          const { width, height, left, top } =
            container.getBoundingClientRect();

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

        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseLeave);

        return () => {
          container.removeEventListener('mousemove', onMouseMove);
          container.removeEventListener('mouseleave', onMouseLeave);
          this.ctx.revert();
        };
      });

      /* =========================
       CTA DESKTOP
    ========================= */

      this.ctx = gsap.context(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.cta-store',
              start: 'top 80%',
              toggleActions: 'play reverse play reverse',
            },
          })
          .from('.cta-store', {
            y: 60,
            opacity: 0,
            duration: 1,
          })
          .from(
            '.cta-title',
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              ease: 'back.out(1.7)',
            },
            '-=0.5',
          )
          .from(
            '.cta-btn',
            {
              scale: 0.9,
              opacity: 0,
              duration: 0.8,
              ease: 'elastic.out(1, 0.6)',
            },
            '-=0.4',
          );
      });
    });

    /* 🔥 CLAVE FINAL */
    setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 100);
  }

  ngOnDestroy(): void {
    this.mm?.revert();
    this.ctx?.revert();
  }
}
