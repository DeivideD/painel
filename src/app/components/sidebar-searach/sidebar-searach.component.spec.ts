import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSearachComponent } from './sidebar-searach.component';

describe('SidebarSearachComponent', () => {
  let component: SidebarSearachComponent;
  let fixture: ComponentFixture<SidebarSearachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSearachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSearachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
