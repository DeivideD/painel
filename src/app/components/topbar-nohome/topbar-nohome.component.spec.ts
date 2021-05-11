import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarNohomeComponent } from './topbar-nohome.component';

describe('TopbarNohomeComponent', () => {
  let component: TopbarNohomeComponent;
  let fixture: ComponentFixture<TopbarNohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarNohomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarNohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
