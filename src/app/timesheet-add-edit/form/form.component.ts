import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TimeSheet } from '../../service/timsheet.model'
import * as moment from 'moment';
import { ApiService } from '../../service/api.service'
import { Projects } from '../../service/project.model'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() selectedDate;
  @Input() projectDate;
  @Input() projectsByDate;
  @Input() userProjects;

  @ViewChild('projectInput', { static: false }) projectInput: ElementRef;
  // @ViewChild('hoursInput', { static: false }) hoursInput: ElementRef;

  @Output() addProjectHours = new EventEmitter<TimeSheet>()

  totalHours: number = 0;

  projects = [];

  constructor(
    private authUser: AuthService,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    for (let i = 0; i < this.projectsByDate.length; i++) {
      for (let j = 0; j < this.userProjects.length; j++) {
        if (this.projectsByDate[i].projects_id == this.userProjects[j].id) {
          const projectName = new Projects(this.userProjects[j].name, this.projectsByDate[i], this.userProjects[j].id)
          this.projects.push(projectName)
        }
      }
    }
    this.sumOfHours()

  }


  ngDoCheck() {
    this.totalHours = 0
    this.sumOfHours()
  }

  saveDayHours(event, projectName, hours) {
    // for each row/project, pass the hours through the post.model class
    console.log(event)

    console.log(projectName)

    let project_id;
    for (let i = 0; i < this.userProjects.length; i++) {
      if (projectName == this.userProjects[i].name) {
        project_id = this.userProjects[i].id;
        break;
      }
    }

    let newTimeSheet = new TimeSheet(this.api.user_ID, this.projectDate, project_id, hours)
    // implement the httpclient requests using api.service.ts - using a put request
    this.api.saveProjectHours(newTimeSheet)
      .subscribe(data => console.log(data))

  }


  submitDayHours() {
    // NICE TO HAVE
  }

  sumOfHours() {
    for (let i = 0; i < this.projectsByDate.length; i++) {
      this.totalHours += this.projectsByDate[i].hours
    }
  }

  addRow() {
    let blankProject = new Projects('', {}, 0)
    this.projects.push(blankProject)
  }

}
