import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaToursHomeComponent } from './qaluta-tours-home.component';

describe('QalutaToursHomeComponent', () => {
  let component: QalutaToursHomeComponent;
  let fixture: ComponentFixture<QalutaToursHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaToursHomeComponent]
    });
    fixture = TestBed.createComponent(QalutaToursHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
