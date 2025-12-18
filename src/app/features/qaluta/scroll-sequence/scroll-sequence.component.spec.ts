import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSequenceComponent } from './scroll-sequence.component';

describe('ScrollSequenceComponent', () => {
  let component: ScrollSequenceComponent;
  let fixture: ComponentFixture<ScrollSequenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollSequenceComponent]
    });
    fixture = TestBed.createComponent(ScrollSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
