import { Component, OnInit } from '@angular/core';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@Component({
  selector: 'app-timesheet-add-edit',
  templateUrl: './timesheet-add-edit.component.html',
  styleUrls: ['./timesheet-add-edit.component.scss']
})
export class TimesheetAddEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
