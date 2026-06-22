import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavStateService } from 'src/app/services/nav-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isScrolled = false;
  isMerged = false;
  isHidden = false;
  isHovered = false;
  logoSrc = 'assets/img/qalutaBlanco.png';

  constructor(
    private router: Router,
    private navState: NavStateService,
  ) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => this.updateLogo());
  }

  ngOnInit() {
    this.navState.isMerged$.subscribe((v) => (this.isMerged = v));
    this.navState.isHidden$.subscribe((v) => (this.isHidden = v));
  }

  ngAfterViewInit() {
    // Espera a que el hero y todo esté renderizado
    setTimeout(() => this.navState.calculateThresholds(), 100);
  }

  // Recalcula si cambia el tamaño de ventana
  @HostListener('window:resize', [])
  onResize() {
    this.navState.calculateThresholds();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScrolled = offset > 50;
    this.navState.update(offset);

    this.updateLogo();
  }

  onMouseEnter() {
    this.isHovered = true;
  }
  onMouseLeave() {
    this.isHovered = false;
  }

  get isVisible(): boolean {
    return !this.isHidden || this.isHovered;
  }

  private updateLogo() {
    const url = this.router.url;

    const logos: { [key: string]: string } = {
      'qaluta-tours': 'assets/img/logoQalutaToursBlanco.webp',
      'qaluta-dictionary': 'assets/img/logoUrpiDictionaryBlanco.webp',
      'qaluta-store': 'assets/img/logoQalutaStoreBlanco.webp',
      'qaluta-360': 'assets/img/logoQaluta360Blanco.webp',
    };

    const match = Object.keys(logos).find((key) => url.includes(key));

    // Si estamos en una subruta, usar su logo fijo
    if (match) {
      this.logoSrc = logos[match];
      return;
    }

    // Si estamos en home, cambiar según scroll
    this.logoSrc = this.isScrolled
      ? 'assets/img/qalutaNegro.png'
      : 'assets/img/qalutaBlanco.png';
  }
}
