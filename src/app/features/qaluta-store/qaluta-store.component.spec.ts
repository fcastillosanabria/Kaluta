import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaStoreComponent } from './qaluta-store.component';

describe('QalutaStoreComponent', () => {
  let component: QalutaStoreComponent;
  let fixture: ComponentFixture<QalutaStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaStoreComponent]
    });
    fixture = TestBed.createComponent(QalutaStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
