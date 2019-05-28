import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiscoverComponent } from './menu-discover.component';

describe('MenuDiscoverComponent', () => {
  let component: MenuDiscoverComponent;
  let fixture: ComponentFixture<MenuDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDiscoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
