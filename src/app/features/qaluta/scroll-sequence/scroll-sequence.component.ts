import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-sequence',
  templateUrl: './scroll-sequence.component.html',
  styleUrls: ['./scroll-sequence.component.css'],
})
export class ScrollSequenceComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initAnimation();
      ScrollTrigger.refresh();
    });
  }

  private initAnimation() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.brand-parallax',
          start: 'top top',
          end: window.innerWidth < 768 ? '+=300%' : '+=400%',
          scrub: 1,
          pin: true,
        },
      })

      .from('.logo-wrapper', { opacity: 0 })

      .to('.logo-symbol', {
        scale: 3,
        ease: 'power2.inOut',
      })

      .to(
        '.logo-text',
        {
          opacity: 0,
          x: -60,
        },
        '<',
      )

      .to('.logo-wrapper', {
        xPercent: 30,
      })

      .to('.block-1', { opacity: 1, y: -20 })
      .to('.block-1', { opacity: 0 })
      .to('.block-2', { opacity: 1, y: -20 })
      .to('.block-2', { opacity: 0 })
      .to('.block-3', { opacity: 1, y: -20 })
      .to('.block-3', { opacity: 0 })
      .to('.block-4', { opacity: 1, y: -20 });
  }
}
