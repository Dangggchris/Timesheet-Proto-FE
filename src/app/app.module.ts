import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Environment
import { environment } from 'src/environments/environment';


// Angular Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimesheetAddEditComponent } from './timesheet-add-edit/timesheet-add-edit.component';
import { TimesheetDayComponent } from './Timesheet-Add-Edit/timesheet-day/timesheet-day.component';
import { ProjectHoursListComponent } from './Timesheet-Add-Edit/timesheet-day/project-hours-list/project-hours-list.component';
import { TimesheetHistoryComponent } from './timesheet-history/timesheet-history.component';
import { TimesheetHistoryProjectComponent } from './timesheet-history/timesheet-history-project/timesheet-history-project.component';
import { TimesheetMainComponent } from './timesheet-main/timesheet-main.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';


// Angular Material Module
import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TimesheetAddEditComponent,
    TimesheetDayComponent,
    ProjectHoursListComponent,
    TimesheetHistoryComponent,
    TimesheetHistoryProjectComponent,
    TimesheetMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
