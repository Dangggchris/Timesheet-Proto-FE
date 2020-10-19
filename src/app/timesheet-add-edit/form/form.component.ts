import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TimeSheet } from '../../service/post.model'
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
  @ViewChild('hoursInput', { static: false }) hoursInput: ElementRef;

  @Output() addProjectHours = new EventEmitter<TimeSheet>()

  totalHours: number = 0;

  projects: [];

  constructor(
    private authUser: AuthService,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    // do a get request into the modal based on the uid & date
    // need a get request for all projects tied to user, user_projects pivot table, or this will be an input from timesheet-add-edit component
    console.log(this.projectsByDate)
    for (let i = 0; i < this.projectsByDate.length; i++) {
      for (let j = 0; j < this.userProjects.length; j++) {
        if (this.projectsByDate[i].projects_id === this.userProjects[j].id) {
          const newProject = new Projects(this.userProjects[j].name, this.projectsByDate)
          console.log(newProject)
          // this.projects.push(newProject)
        }
      }
    }

    console.log(this.userProjects)

    this.sumOfHours()
  }

  saveDayHours() {
    // for each row/project, pass the hours through the post.model class

    const selectedProjectId = 0
    const newProjectName = this.projectInput.nativeElement.value
    const newProjectHours = this.hoursInput.nativeElement.value
    // NEED Correct PROJECT ID how to correlate the project id & list of projects.....

    // const newTimeSheet = new TimeSheet("1", this.projectDate, newProjectName, newProjectHours)

    // implement the httpclient requests using api.service.ts - using a put request
    this.api.saveProjectHours(new TimeSheet("1", this.projectDate, newProjectName, newProjectHours)).subscribe(data => console.log(data))

  }


  submitDayHours() {
    // for each row/project, pass the hours through the post.model class
    const newProjectName = this.projectInput.nativeElement.value
    const newProjectHours = this.hoursInput.nativeElement.value

    const newTimeSheet = new TimeSheet(this.authUser.uid, this.selectedDate, newProjectName, newProjectHours)
    console.log(newTimeSheet)
    // implement the httpclient requests using api.service.ts
  }

  sumOfHours() {
    for (let i = 0; i < this.projectsByDate.length; i++) {
      this.totalHours += this.projectsByDate[i].hours
    }
  }

}
