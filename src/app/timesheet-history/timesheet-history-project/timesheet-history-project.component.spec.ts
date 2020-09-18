import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetHistoryProjectComponent } from './timesheet-history-project.component';

describe('TimesheetHistoryProjectComponent', () => {
  let component: TimesheetHistoryProjectComponent;
  let fixture: ComponentFixture<TimesheetHistoryProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetHistoryProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetHistoryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
