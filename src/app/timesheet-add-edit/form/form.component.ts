import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TimeSheet } from '../../service/post.model'
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() selectedDate;
  @Input() projectsByDate;

  @ViewChild('projectInput', { static: false }) projectInput: ElementRef;
  @ViewChild('hoursInput', { static: false }) hoursInput: ElementRef;

  @Output() addProjectHours = new EventEmitter<TimeSheet>()

  constructor(
    private authUser: AuthService
  ) { }

  ngOnInit(): void {

    // do a get request into the modal based on the uid & date


  }

  // pass date from timesheet-add-edit down to form component



  // emit form data back to the timesheet-add-edit component

  projects = [

    // {
    //   uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
    //   title: 'DataSlate',
    //   date: "2020-10-13",
    //   hours: 15
    // },
    // {
    //   uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
    //   title: 'Velvet Hammer Branding - The Vault',
    //   date: "2020-10-13",
    //   hours: 25
    // },
    // {
    //   uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
    //   title: 'Time Sheet Prototype',
    //   date: "2020-10-15",
    //   hours: 15
    // },
    // {
    //   uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
    //   title: 'Project Aiko',
    //   date: "2020-10-15",
    //   hours: 25
    // }
  ]


  saveDayHours() {
    // for each row/project, pass the hours through the post.model class

    const newProjectName = this.projectInput.nativeElement.value
    const newProjectHours = this.hoursInput.nativeElement.value

    const newTimeSheet = new TimeSheet(this.authUser.uid, "2020-10-13", newProjectName, newProjectHours)
    console.log(newTimeSheet)

    // implement the httpclient requests using api.service.ts - using a put request
  }


  submitDayHours() {
    // for each row/project, pass the hours through the post.model class
    const newProjectName = this.projectInput.nativeElement.value
    const newProjectHours = this.hoursInput.nativeElement.value

    const newTimeSheet = new TimeSheet(this.authUser.uid, "2020-10-13", newProjectName, newProjectHours)
    console.log(newTimeSheet)
    // implement the httpclient requests using api.service.ts
  }




}
