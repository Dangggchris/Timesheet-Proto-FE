import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http'
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Environment
import { environment } from 'src/environments/environment.localhost';

// Angular Material Module
import { MaterialModule } from './material/material.module';

// Angular Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimesheetMainComponent } from './timesheet-main/timesheet-main.component';
import { TimesheetAddEditComponent } from './timesheet-add-edit/timesheet-add-edit.component';
import { TimesheetHistoryComponent } from './timesheet-history/timesheet-history.component';
import { TimesheetHistoryProjectComponent } from './timesheet-history/timesheet-history-project/timesheet-history-project.component';

// Angular Calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormComponent } from './timesheet-add-edit/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TimesheetAddEditComponent,
    TimesheetHistoryComponent,
    TimesheetHistoryProjectComponent,
    TimesheetMainComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
