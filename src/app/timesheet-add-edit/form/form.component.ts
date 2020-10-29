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

    // do a get request into the modal based on the uid & date
    // need a get request for all projects tied to user, user_projects pivot table, or this will be an input from timesheet-add-edit component
    // pull in the projects_users array
    // Pull in the projects by date array, loop through array and compare the projects_id with the projects_user.id,
    // if the projects_id === id, create a new joined object and push to the projects array, this array will be displayed on the FE...
    for (let i = 0; i < this.projectsByDate.length; i++) {
      for (let j = 0; j < this.userProjects.length; j++) {
        if (this.projectsByDate[i].projects_id == this.userProjects[j].id) {
          const projectName = new Projects(this.userProjects[j].name, this.projectsByDate[i])
          this.projects.push(projectName)
        }
      }
    }
    this.sumOfHours()
  }


  ngDoCheck() {
    this.totalHours = 0
    this.sumOfHours()
    // console.log(this.projects)
  }

  saveDayHours(event, id, hours) {
    // for each row/project, pass the hours through the post.model class

    const project_id = id
    console.log("PROJECT ID: ", project_id)
    // const newProjectHours = this.hoursInput.nativeElement.value
    console.log(hours)
    const newTimeSheet = new TimeSheet("1", this.projectDate, project_id, hours)
    // implement the httpclient requests using api.service.ts - using a put request
    this.api.saveProjectHours(newTimeSheet)
      .subscribe(data => console.log(data))

  }


  submitDayHours() {
    // const newProjectName = this.projectInput.nativeElement.value
    // const newProjectHours = this.hoursInput.nativeElement.value

    // const newTimeSheet = new TimeSheet("1", this.selectedDate, newProjectName, newProjectHours)
    // console.log(newTimeSheet)
  }

  sumOfHours() {
    for (let i = 0; i < this.projectsByDate.length; i++) {
      this.totalHours += this.projectsByDate[i].hours
    }
  }

  addRow() {
    const blankProject = new Projects('', {})
    this.projects.push(blankProject)
  }

}
