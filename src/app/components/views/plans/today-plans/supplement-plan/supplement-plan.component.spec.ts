import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementPlanComponent } from './supplement-plan.component';

describe('SupplementPlanComponent', () => {
  let component: SupplementPlanComponent;
  let fixture: ComponentFixture<SupplementPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
