import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard'

import { LoginComponent } from './login/login.component';
// import { TimesheetMainComponent } from './timesheet-main/timesheet-main.component';
import { TimesheetAddEditComponent } from './timesheet-add-edit/timesheet-add-edit.component';
import { TimesheetHistoryComponent } from './timesheet-history/timesheet-history.component';
import { TimesheetHistoryProjectComponent } from './timesheet-history/timesheet-history-project/timesheet-history-project.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: LoginComponent
  },
  // {
  //   path: 'main',
  //   component: TimesheetMainComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'addEdit',
    component: TimesheetAddEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: TimesheetHistoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
