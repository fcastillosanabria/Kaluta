import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaToursComponent } from './qaluta-tours.component';

describe('QalutaToursComponent', () => {
  let component: QalutaToursComponent;
  let fixture: ComponentFixture<QalutaToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaToursComponent]
    });
    fixture = TestBed.createComponent(QalutaToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
