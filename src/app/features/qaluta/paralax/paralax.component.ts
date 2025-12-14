import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-paralax',
  templateUrl: './paralax.component.html',
  styleUrls: ['./paralax.component.css'],
})
export class ParalaxComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.brand-parallax',
          start: 'top top',
          end: '+=400%',
          scrub: 1,
          pin: true,
          markers: true,
        },
      })

      /* LOGO APARECE */
      .from('.logo-wrapper', {
        opacity: 0,
      })

      /* LOGO CRECE */
      .to('.logo-symbol', {
        scale: 3,
        ease: 'power2.inOut',
      })

      /* TEXTO DESAPARECE */
      .to(
        '.logo-text',
        {
          opacity: 0,
          y: -20,
        },
        '<'
      )

      /* LOGO SE MUEVE A LA DERECHA */
      .to('.logo-wrapper', {
        xPercent: 20,
        ease: 'power2.inOut',
      })

      /* BLOQUE 1 */
      .to('.block-1', {
        opacity: 1,
        y: -20,
      })

      /* BLOQUE 2 */
      .to('.block-1', { opacity: 0 })
      .to('.block-2', {
        opacity: 1,
        y: -20,
      })

      /* BLOQUE 3 */
      .to('.block-2', { opacity: 0 })
      .to('.block-3', {
        opacity: 1,
        y: -20,
      });
  }
}
