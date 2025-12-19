import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaDictionaryHomeComponent } from './qaluta-dictionary-home.component';

describe('QalutaDictionaryHomeComponent', () => {
  let component: QalutaDictionaryHomeComponent;
  let fixture: ComponentFixture<QalutaDictionaryHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaDictionaryHomeComponent]
    });
    fixture = TestBed.createComponent(QalutaDictionaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
