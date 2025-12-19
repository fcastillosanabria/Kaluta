import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaDictionarySliderComponent } from './qaluta-dictionary-slider.component';

describe('QalutaDictionarySliderComponent', () => {
  let component: QalutaDictionarySliderComponent;
  let fixture: ComponentFixture<QalutaDictionarySliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaDictionarySliderComponent]
    });
    fixture = TestBed.createComponent(QalutaDictionarySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
