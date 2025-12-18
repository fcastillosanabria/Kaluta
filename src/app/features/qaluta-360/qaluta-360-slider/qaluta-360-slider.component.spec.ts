import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qaluta360SliderComponent } from './qaluta-360-slider.component';

describe('Qaluta360SliderComponent', () => {
  let component: Qaluta360SliderComponent;
  let fixture: ComponentFixture<Qaluta360SliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Qaluta360SliderComponent]
    });
    fixture = TestBed.createComponent(Qaluta360SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
