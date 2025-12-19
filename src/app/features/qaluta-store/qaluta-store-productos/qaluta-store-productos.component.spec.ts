import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaStoreProductosComponent } from './qaluta-store-productos.component';

describe('QalutaStoreProductosComponent', () => {
  let component: QalutaStoreProductosComponent;
  let fixture: ComponentFixture<QalutaStoreProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaStoreProductosComponent]
    });
    fixture = TestBed.createComponent(QalutaStoreProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
