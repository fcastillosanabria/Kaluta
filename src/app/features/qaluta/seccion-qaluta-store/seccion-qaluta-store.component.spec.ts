import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionQalutaStoreComponent } from './seccion-qaluta-store.component';

describe('SeccionQalutaStoreComponent', () => {
  let component: SeccionQalutaStoreComponent;
  let fixture: ComponentFixture<SeccionQalutaStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionQalutaStoreComponent]
    });
    fixture = TestBed.createComponent(SeccionQalutaStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
