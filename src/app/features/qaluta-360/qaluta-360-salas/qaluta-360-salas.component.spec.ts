import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qaluta360SalasComponent } from './qaluta-360-salas.component';

describe('Qaluta360SalasComponent', () => {
  let component: Qaluta360SalasComponent;
  let fixture: ComponentFixture<Qaluta360SalasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Qaluta360SalasComponent]
    });
    fixture = TestBed.createComponent(Qaluta360SalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
