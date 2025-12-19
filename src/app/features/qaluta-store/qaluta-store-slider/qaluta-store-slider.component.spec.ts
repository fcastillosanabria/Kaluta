import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaStoreSliderComponent } from './qaluta-store-slider.component';

describe('QalutaStoreSliderComponent', () => {
  let component: QalutaStoreSliderComponent;
  let fixture: ComponentFixture<QalutaStoreSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaStoreSliderComponent]
    });
    fixture = TestBed.createComponent(QalutaStoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
