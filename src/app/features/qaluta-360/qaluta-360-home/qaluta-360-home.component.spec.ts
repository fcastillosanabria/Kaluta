import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qaluta360HomeComponent } from './qaluta-360-home.component';

describe('Qaluta360HomeComponent', () => {
  let component: Qaluta360HomeComponent;
  let fixture: ComponentFixture<Qaluta360HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Qaluta360HomeComponent]
    });
    fixture = TestBed.createComponent(Qaluta360HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
