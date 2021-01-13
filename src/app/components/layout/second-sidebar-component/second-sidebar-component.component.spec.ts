import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSidebarComponentComponent } from './second-sidebar-component.component';

describe('SecondSidebarComponentComponent', () => {
  let component: SecondSidebarComponentComponent;
  let fixture: ComponentFixture<SecondSidebarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSidebarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSidebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
