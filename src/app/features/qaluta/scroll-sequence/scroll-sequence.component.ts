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
  private mm!: gsap.MatchMedia;

  ngAfterViewInit(): void {
    this.mm = gsap.matchMedia();

    /* =========================
       DESKTOP ANIMATION
    ========================= */
    this.mm.add('(min-width: 768px)', (context) => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.brand-parallax.desktop-only',
      start: 'top top',
      end: '+=400%',
      scrub: 1,
      pin: true,
    },
  });

  const root = gsap.utils.toArray('.desktop-only')[0] as HTMLElement;

  gsap.set(root, {});

  tl.from(root.querySelector('.logo-wrapper'), { opacity: 0 })

    .to(root.querySelector('.logo-symbol'), {
      scale: 3,
      ease: 'power2.inOut',
    })

    .to(root.querySelector('.logo-text'), {
      opacity: 0,
      x: -60,
    }, '<')

    .to(root.querySelector('.logo-wrapper'), {
      xPercent: 30,
    })

    .to(root.querySelector('.block-1'), { opacity: 1, y: -20 })
    .to(root.querySelector('.block-1'), { opacity: 0 })
    .to(root.querySelector('.block-2'), { opacity: 1, y: -20 })
    .to(root.querySelector('.block-2'), { opacity: 0 })
    .to(root.querySelector('.block-3'), { opacity: 1, y: -20 })
    .to(root.querySelector('.block-3'), { opacity: 0 })
    .to(root.querySelector('.block-4'), { opacity: 1, y: -20 });

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
});

    /* =========================
       MOBILE ANIMATION
    ========================= */
    this.mm.add('(max-width: 767px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.brand-parallax.mobile-only',
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
        },
      });

      tl.from('.mobile-only .logo-wrapper', { opacity: 0 })

        .to('.mobile-only .logo-symbol', {
          scale: 2.2,
          ease: 'power2.inOut',
        })

        .to(
          '.mobile-only .logo-text',
          {
            opacity: 0,
            x: -30,
          },
          '<',
        )

        .to('.mobile-only .logo-wrapper', {
          xPercent: 10,
        })

        .to('.mobile-only .block-1', { opacity: 1, y: -10 })
        .to('.mobile-only .block-1', { opacity: 0 })
        .to('.mobile-only .block-2', { opacity: 1, y: -10 })
        .to('.mobile-only .block-2', { opacity: 0 })
        .to('.mobile-only .block-3', { opacity: 1, y: -10 })
        .to('.mobile-only .block-3', { opacity: 0 })
        .to('.mobile-only .block-4', { opacity: 1, y: -10 });

      return () => tl.kill();
    });
  }
}
