import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavStateService {
  private mergeThreshold = 0;
  private hideThreshold = 0;

  private _isMerged = new BehaviorSubject<boolean>(false);
  private _isHidden = new BehaviorSubject<boolean>(false);

  isMerged$ = this._isMerged.asObservable();
  isHidden$ = this._isHidden.asObservable();

  // Llamar esto una vez que el DOM esté listo
  calculateThresholds() {
    const hero = document.querySelector('.hero-fullscreen') as HTMLElement;
    const header = document.querySelector('#mainNav') as HTMLElement;

    if (hero && header) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const headerHeight = header.offsetHeight;

      // El header "choca" con el secondary menu cuando su bottom llega al bottom del hero
      this.mergeThreshold = heroBottom - headerHeight;
      this.hideThreshold = this.mergeThreshold + 60; // un poco después de fusionarse
    }
  }

  update(scrollY: number) {
    this._isMerged.next(scrollY >= this.mergeThreshold);
    this._isHidden.next(scrollY >= this.hideThreshold);
  }
}
