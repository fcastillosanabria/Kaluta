import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxComponent } from './paralax.component';

describe('ParalaxComponent', () => {
  let component: ParalaxComponent;
  let fixture: ComponentFixture<ParalaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParalaxComponent]
    });
    fixture = TestBed.createComponent(ParalaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
