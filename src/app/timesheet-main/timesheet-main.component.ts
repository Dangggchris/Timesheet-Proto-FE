import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-timesheet-main',
  templateUrl: './timesheet-main.component.html',
  styleUrls: ['./timesheet-main.component.scss']
})
export class TimesheetMainComponent implements OnInit {

  readonly Root_Url = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getHistory() {

  }

}
