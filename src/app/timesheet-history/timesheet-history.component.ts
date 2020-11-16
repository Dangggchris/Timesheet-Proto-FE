import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  projectDict: {};
  projectid: number;
  projectInfo: any[];

  constructor(
    // private modalService: NgbModal,
    public authUser: AuthService,
    private api: ApiService) { }

  ngOnInit(): void {
    this.getUserProjects()
  }

  async getUserProjects() {
    await this.api.getUserProjects(this.api.user_ID).subscribe(response => {
      this.userProjects = response;
      let myDict = {};
      for (let project in this.userProjects) {
        myDict[this.userProjects[project]["id"]] = this.userProjects[project];
      }
      this.projectDict = myDict;
      console.log("DICTIONARY", this.projectDict);

      this.getProjectTimesheets();
    })
  };

  async getProjectTimesheets() {
    await this.api.getProjectTimesheets(this.api.user_ID).subscribe(response => {
      this.userTimesheets = response;
      let projectHours = {};

      for (let timesheet in this.userTimesheets["data"]) {
        let curr_project = this.userTimesheets["data"][timesheet]

        if (curr_project["projects_id"] != "undefined") {
          if (curr_project["projects_id"] in projectHours) {
            projectHours[curr_project["projects_id"]] = { "hours": curr_project["hours"] + projectHours[curr_project["projects_id"]]["hours"], "name": this.projectDict[curr_project["projects_id"]]["name"] };
          }
          else {
            projectHours[curr_project["projects_id"]] = { "hours": curr_project["hours"], "name": this.projectDict[curr_project["projects_id"]]["name"] }
          }
        }
      }
      let proj_info = []
      for (let info in projectHours) {
        proj_info.push(projectHours[info])
      }
      this.projectInfo = proj_info;
      console.log("THESE ARE THE TIMESHEET HOURS: ", projectHours);
    })
  };

}
