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

  projectDate: string;

  userProjects: [];

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

  activeDayIsOpen: boolean = false;

  // will need to import NgbModal
  constructor(
    private modalService: NgbModal,
    public authUser: AuthService,
    private api: ApiService
  ) { }

  dayClicked({ date }: { date: Date }) {
    this.selectedDate = moment(date).format('dddd, MMM DD, YYYY')
    this.projectDate = moment(date).format("YYYY-MM-DD")

    // Take in projects Array?
    this.api.getProjectsByDate(this.authUser.uid, this.projectDate)
      // REPLACE WITH(this.authUser.uid, this.projectDate)
      .subscribe((response) => {
        this.projectsByDate = response.data

        // OPEN MODAL
        this.modalService.open(this.modalContent)
      })
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modalService.open(this.modalContent, { size: 'sm' });
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit(): void {
    //  get user-projects table
    this.api.getUserProjects("1").subscribe(response => {
      this.userProjects = response
      // console.log(this.userProjects)
    })


  }
}
