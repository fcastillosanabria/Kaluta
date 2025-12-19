import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaToursSliderComponent } from './qaluta-tours-slider.component';

describe('QalutaToursSliderComponent', () => {
  let component: QalutaToursSliderComponent;
  let fixture: ComponentFixture<QalutaToursSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaToursSliderComponent]
    });
    fixture = TestBed.createComponent(QalutaToursSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
