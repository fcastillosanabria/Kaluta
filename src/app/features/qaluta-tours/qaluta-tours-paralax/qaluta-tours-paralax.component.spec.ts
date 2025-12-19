import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaToursParalaxComponent } from './qaluta-tours-paralax.component';

describe('QalutaToursParalaxComponent', () => {
  let component: QalutaToursParalaxComponent;
  let fixture: ComponentFixture<QalutaToursParalaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaToursParalaxComponent]
    });
    fixture = TestBed.createComponent(QalutaToursParalaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
