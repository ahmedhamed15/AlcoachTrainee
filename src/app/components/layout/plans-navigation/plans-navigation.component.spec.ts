import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansNavigationComponent } from './plans-navigation.component';

describe('PlansNavigationComponent', () => {
  let component: PlansNavigationComponent;
  let fixture: ComponentFixture<PlansNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
