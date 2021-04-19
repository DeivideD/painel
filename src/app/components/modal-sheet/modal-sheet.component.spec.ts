import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSheetComponent } from './modal-sheet.component';

describe('ModalSheetComponent', () => {
  let component: ModalSheetComponent;
  let fixture: ComponentFixture<ModalSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
