import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetAddEditComponent } from './timesheet-add-edit.component';

describe('TimesheetAddEditComponent', () => {
  let component: TimesheetAddEditComponent;
  let fixture: ComponentFixture<TimesheetAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
