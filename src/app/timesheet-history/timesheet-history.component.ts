import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../service/auth.service'
import { ApiService } from '../service/api.service'
// import { TimesheetHistoryProjectComponent } from './timesheet-history-project/timesheet-history-project.component'

@Component({
  selector: 'app-timesheet-history',
  templateUrl: './timesheet-history.component.html',
  styleUrls: ['./timesheet-history.component.scss']
})
export class TimesheetHistoryComponent implements OnInit {

  userProjects: [];
  userTimesheets: [];
  projectid:number;

  constructor(private modalService: NgbModal,
    public authUser: AuthService,
    private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUserProjects(this.api.user_ID).subscribe(response => {
       //console.log("THIS IS THE USER ID", this.api.user_ID)
       this.userProjects = response
       //console.log("THIS IS THE RESPONSE: ", response)
    })

    this.api.getProjectTimesheets(this.api.user_ID).subscribe(response => {
      this.userTimesheets = response;
      let projectHours = {};
      console.log("IS IT AN ARRAY? ", Array.isArray(this.userTimesheets))
      let test = [1, 2, 3, 4]
      // this.userTimesheets.forEach(function(timesheet){
      //   console.log("EACH TIEMSHEET", timesheet);
      // })
      for(let timesheet in this.userTimesheets["data"]){
        console.log(this.userTimesheets["data"][timesheet]["projects_id"])
        if(this.userTimesheets["data"][timesheet]["projects_id"] in projectHours){
          projectHours[this.userTimesheets["data"][timesheet]["projects_id"]] += this.userTimesheets["data"][timesheet]["hours"];
        }
        else{
          projectHours[this.userTimesheets["data"][timesheet]["projects_id"]] = this.userTimesheets["data"][timesheet]["hours"];
        }
      }
      console.log("THESE ARE THE TIMESHEET HOURS: ", projectHours);
      console.log(this.userTimesheets)
    })
  }

}
