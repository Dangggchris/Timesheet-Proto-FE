import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-timesheet-main',
  templateUrl: './timesheet-main.component.html',
  styleUrls: ['./timesheet-main.component.scss']
})
export class TimesheetMainComponent implements OnInit {

  readonly Root_Url = ''

  constructor(
    // private http: HttpClient,
    public auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.auth.user$)
  }

  getHistory() {

  }

}
