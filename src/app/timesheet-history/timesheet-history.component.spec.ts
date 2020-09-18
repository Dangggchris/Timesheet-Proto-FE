import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetHistoryComponent } from './timesheet-history.component';

describe('TimesheetHistoryComponent', () => {
  let component: TimesheetHistoryComponent;
  let fixture: ComponentFixture<TimesheetHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
