import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qaluta360Component } from './qaluta-360.component';

describe('Qaluta360Component', () => {
  let component: Qaluta360Component;
  let fixture: ComponentFixture<Qaluta360Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Qaluta360Component]
    });
    fixture = TestBed.createComponent(Qaluta360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
