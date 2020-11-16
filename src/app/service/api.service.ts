import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../environments/environment.localhost'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TimeSheet } from './timsheet.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firebasetoken: string;
  user_ID;

  constructor(
    private http: HttpClient,
  ) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  credentialsToLaravel(token) {
    this.http.put(environment.apiURL + '/api/login', {
      Firebasetoken: token
    }
      , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': token
        })
      })
      .subscribe(responseData => {
        this.user_ID = responseData
        // Identify your User Id
        console.log('User Id: ' + this.user_ID)
      },
        error => console.log(error));
  }

  // UPDATED API
  // GET LIST OF PROJECTS BY USER ID
  getUserProjects(uid): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/api/projects/${uid}`)
  }

  getProjectTimesheets(uid): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/api/dailytimesheet/userid=${uid}`)
  }

  // GET PROJECTS BY USER ID, PROJECT ID, DATE
  getProjectsByDate(uid, date): Observable<any> {
    return this.http.get<any>(environment.apiURL + `/api/dailytimesheet/userid=${uid}/${date}`)
  }

  // PUT/UPDATE
  saveProjectHours(timeSheet: TimeSheet): Observable<void> {

    return this.http.put<void>(
      environment.apiURL + `/api/dailytimesheet/userid=${timeSheet.user_id}/projectid=${timeSheet.project_id}`,
      timeSheet,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError))
  }

  // POST
  submitProjectHours(timeSheet: TimeSheet): Observable<void> {

    return this.http.post<void>(
      environment.apiURL + `/api/dailytimesheet/userid=${timeSheet.user_id}/projectid=${timeSheet.project_id}`,
      timeSheet,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError))
  }
}

