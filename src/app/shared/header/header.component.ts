import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isScrolled = false;
  logoSrc = 'assets/img/logoQaluta.png';

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        this.updateLogo(event.urlAfterRedirects);
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScrolled = offset > 50;
  }

  private updateLogo(url: string) {
    const logos: { [key: string]: string } = {
      'qaluta-tours': 'assets/img/logoQalutaToursBlanco.png',
      'qaluta-dictionary': 'assets/img/logoUrpiDictionaryBlanco.png',
      'qaluta-store': 'assets/img/logoQalutaStoreBlanco.png',
      'qaluta-360': 'assets/img/logoQaluta360Blanco.png'
    };

    const match = Object.keys(logos).find(key => url.includes(key));
    this.logoSrc = match ? logos[match] : 'assets/img/logoQaluta.png';
  }
}
