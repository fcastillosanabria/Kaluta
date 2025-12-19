import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaToursPaquetesComponent } from './qaluta-tours-paquetes.component';

describe('QalutaToursPaquetesComponent', () => {
  let component: QalutaToursPaquetesComponent;
  let fixture: ComponentFixture<QalutaToursPaquetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaToursPaquetesComponent]
    });
    fixture = TestBed.createComponent(QalutaToursPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
