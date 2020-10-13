import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [

    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 1',
      date: "2020-10-13",
      hours: 15
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 2',
      date: "2020-10-13",
      hours: 25
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 3',
      date: "2020-10-04",
      hours: 15
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 4',
      date: "2020-10-04",
      hours: 25
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 5',
      date: "2020-10-04",
      hours: 15
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 5',
      date: "2020-10-04",
      hours: 25
    },

  ]

}
