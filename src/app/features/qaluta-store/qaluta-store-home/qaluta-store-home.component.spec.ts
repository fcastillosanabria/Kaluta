import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaStoreHomeComponent } from './qaluta-store-home.component';

describe('QalutaStoreHomeComponent', () => {
  let component: QalutaStoreHomeComponent;
  let fixture: ComponentFixture<QalutaStoreHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaStoreHomeComponent]
    });
    fixture = TestBed.createComponent(QalutaStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
