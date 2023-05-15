import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVerticalTogglerComponent } from './navbar-vertical-toggler.component';

describe('NavbarVerticalTogglerComponent', () => {
  let component: NavbarVerticalTogglerComponent;
  let fixture: ComponentFixture<NavbarVerticalTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarVerticalTogglerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarVerticalTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
