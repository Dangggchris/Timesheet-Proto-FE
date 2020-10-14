import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';;
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs'
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../service/auth.service'
import { ApiService } from '../service/api.service'
import { TimeSheet } from '../service/post.model'



export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@Component({
  selector: 'app-timesheet-add-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timesheet-add-edit.component.html',
  styleUrls: ['./timesheet-add-edit.component.scss']
})
export class TimesheetAddEditComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  selectedDate: string;

  // uid: string;

  projectsByDate: TimeSheet;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions = [
    // add project lines
  ]

  refresh: Subject<any> = new Subject();

  // replace Events with some projects object


  projects = [

    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 1',
      date: startOfDay(new Date()),
      hours: 15
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 2',
      date: startOfDay(new Date()),
      hours: 25
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 3',
      date: subDays(endOfMonth(new Date()), 3),
      hours: 15
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 4',
      date: subDays(endOfMonth(new Date()), 2),
      hours: 25
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 5',
      date: subDays(endOfMonth(new Date()), 4),
      hours: 15
    },
    {
      uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
      title: 'Project 5',
      date: subDays(endOfMonth(new Date()), 5),
      hours: 25
    },

  ];

  activeDayIsOpen: boolean = false;

  // will need to import NgbModal
  constructor(
    private modalService: NgbModal,
    public authUser: AuthService,
    private api: ApiService
  ) { }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }) {
    // trigger the modal HERE to timesheet-day component

    // date to be in 2020-09-30 format
    this.selectedDate = moment(date).format('dddd, MMM DD, YYYY')
    // need a controller to retrieve projects based on this date selected...
    const projectDate = moment(date).format("YYYY-MM-DD")
    console.log(this.authUser.uid)
    this.api.getProjectsByDate(this.authUser.uid, projectDate)
      .subscribe((response) => {
        console.log(response.data)
        // pass response.data down to form component
        this.projectsByDate = response.data
        this.openModal()
      })
    // need to async/await testData
  }

  // eventTimesChanged({
  //   event,
  //   newStart,
  //   newEnd,
  // }: CalendarEventTimesChangedEvent): void {
  //   this.events = this.events.map((iEvent) => {
  //     if (iEvent === event) {
  //       return {
  //         ...event,
  //         start: newStart,
  //         end: newEnd,
  //       };
  //     }
  //     return iEvent;
  //   });
  //   this.handleEvent('Dropped or resized', event);
  // }


  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modalService.open(this.modalContent, { size: 'sm' });
  }

  // addEvent(): void {
  //   this.events = [
  //     ...this.events,
  //     {
  //       title: 'New event',
  //       start: startOfDay(new Date()),
  //       end: endOfDay(new Date()),
  //       color: colors.red,
  //       draggable: true,
  //       resizable: {
  //         beforeStart: true,
  //         afterEnd: true,
  //       },
  //     },
  //   ];
  // }

  // addProjectHours(): void {
  //   this.projects = [
  //     ...this.projects,

  //     {
  //       uid: "Un8N7w7Hn0e2hkp47f2HXR45myv2",
  //       title: 'Project 1',
  //       date: "2020-10-13",
  //       hours: 25
  //     },

  //   ]
  // }


  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  openModal() {
    // get request all projects based on the date input
    this.modalService.open(this.modalContent)

  }

  ngOnInit(): void {
    // httpClient get requests auth.user.uid...
    // this.authUser.user$.forEach(item => {
    //   if (item.uid !== '') {
    //     console.log(item.uid)
    //     this.uid = item.uid
    //   }
    // })
    // afs/firestore/credentials/currentuser/uid
  }

  saveDayHours(projectHours) {
    // for each row/project, pass the hours through the post.model class
    // implement the httpclient requests using api.service.ts
  }


  submitDayHours(projectHours) {
    // for each row/project, pass the hours through the post.model class
    // implement the httpclient requests using api.service.ts
  }

}
