import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsNavigationComponent } from './meals-navigation.component';

describe('MealsNavigationComponent', () => {
  let component: MealsNavigationComponent;
  let fixture: ComponentFixture<MealsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
