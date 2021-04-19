import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidebarInfoComponent } from './right-sidebar-info.component';

describe('RightSidebarInfoComponent', () => {
  let component: RightSidebarInfoComponent;
  let fixture: ComponentFixture<RightSidebarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSidebarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidebarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
