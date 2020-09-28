import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http'

// Environment
import { environment } from 'src/environments/environment.localhost';


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
import { TimesheetMainComponent } from './timesheet-main/timesheet-main.component'
import { LoginFormComponent } from './login-form/login-form.component';

// Angular Material Module
import { MaterialModule } from './material/material.module';

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
    TimesheetMainComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
