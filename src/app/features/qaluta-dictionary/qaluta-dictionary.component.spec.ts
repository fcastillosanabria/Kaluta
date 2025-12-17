import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalutaDictionaryComponent } from './qaluta-dictionary.component';

describe('QalutaDictionaryComponent', () => {
  let component: QalutaDictionaryComponent;
  let fixture: ComponentFixture<QalutaDictionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QalutaDictionaryComponent]
    });
    fixture = TestBed.createComponent(QalutaDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
