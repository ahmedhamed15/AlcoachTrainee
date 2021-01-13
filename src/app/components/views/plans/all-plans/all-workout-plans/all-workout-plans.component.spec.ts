import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkoutPlansComponent } from './all-workout-plans.component';

describe('AllWorkoutPlansComponent', () => {
  let component: AllWorkoutPlansComponent;
  let fixture: ComponentFixture<AllWorkoutPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWorkoutPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorkoutPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
