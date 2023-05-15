import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVerticalContentComponent } from './navbar-vertical-content.component';

describe('NavbarVerticalContentComponent', () => {
  let component: NavbarVerticalContentComponent;
  let fixture: ComponentFixture<NavbarVerticalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarVerticalContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarVerticalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
