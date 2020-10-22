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


  constructor(private modalService: NgbModal,
    public authUser: AuthService,
    private api: ApiService) { }

  ngOnInit(): void {
    // this.api.getUserProjects(this.api.user_ID).subscribe(response => {
    //   this.userProjects = response
    //   console.log(response)
    // })
  }

}
