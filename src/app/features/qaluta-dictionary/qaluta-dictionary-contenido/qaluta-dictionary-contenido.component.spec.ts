import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaDictionaryContenidoComponent } from './qaluta-dictionary-contenido.component';

describe('QalutaDictionaryContenidoComponent', () => {
  let component: QalutaDictionaryContenidoComponent;
  let fixture: ComponentFixture<QalutaDictionaryContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaDictionaryContenidoComponent]
    });
    fixture = TestBed.createComponent(QalutaDictionaryContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
