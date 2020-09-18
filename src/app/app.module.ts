import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Angular Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimesheetAddEditComponent } from './timesheet-add-edit/timesheet-add-edit.component';
import { TimesheetDayComponent } from './Timesheet-Add-Edit/timesheet-day/timesheet-day.component';
import { ProjectHoursListComponent } from './Timesheet-Add-Edit/timesheet-day/project-hours-list/project-hours-list.component';
import { TimesheetHistoryComponent } from './timesheet-history/timesheet-history.component';
import { TimesheetHistoryProjectComponent } from './timesheet-history/timesheet-history-project/timesheet-history-project.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TimesheetAddEditComponent,
    TimesheetDayComponent,
    ProjectHoursListComponent,
    TimesheetHistoryComponent,
    TimesheetHistoryProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
