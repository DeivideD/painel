import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarNohomeComponent } from './menubar-nohome.component';

describe('MenubarNohomeComponent', () => {
  let component: MenubarNohomeComponent;
  let fixture: ComponentFixture<MenubarNohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarNohomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarNohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
