import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TimeSheet } from '../../service/post.model'
import * as moment from 'moment';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() selectedDate;
  @Input() projectDate;
  @Input() projectsByDate;

  @ViewChild('projectInput', { static: false }) projectInput: ElementRef;
  @ViewChild('hoursInput', { static: false }) hoursInput: ElementRef;

  @Output() addProjectHours = new EventEmitter<TimeSheet>()

  constructor(
    private authUser: AuthService,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    // do a get request into the modal based on the uid & date
    // need a get request for all projects tied to user, user_projects pivot table, or this will be an input from timesheet-add-edit component

  }

  // pass date from timesheet-add-edit down to form component

  // emit form data back to the timesheet-add-edit component

  saveDayHours() {
    // for each row/project, pass the hours through the post.model class

    // const newProjectName = this.projectInput.nativeElement.value
    const newProjectHours = this.hoursInput.nativeElement.value

    const newTimeSheet = new TimeSheet("1", this.projectDate, 1, newProjectHours)

    // implement the httpclient requests using api.service.ts - using a put request
    this.api.saveProjectHours(newTimeSheet).subscribe(data => console.log(data))

  }


  submitDayHours() {
    // for each row/project, pass the hours through the post.model class
    const newProjectName = this.projectInput.nativeElement.value
    const newProjectHours = this.hoursInput.nativeElement.value

    const newTimeSheet = new TimeSheet(this.authUser.uid, this.selectedDate, newProjectName, newProjectHours)
    console.log(newTimeSheet)
    // implement the httpclient requests using api.service.ts
  }

}
