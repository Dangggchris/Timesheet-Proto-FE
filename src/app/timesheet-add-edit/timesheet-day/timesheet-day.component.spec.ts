import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDayComponent } from './timesheet-day.component';

describe('TimesheetDayComponent', () => {
  let component: TimesheetDayComponent;
  let fixture: ComponentFixture<TimesheetDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
