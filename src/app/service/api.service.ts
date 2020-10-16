import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../environments/environment.localhost'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TimeSheet } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firebasetoken: string;

  constructor(
    private http: HttpClient,
  ) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  credentialsToLaravel(token) {

    this.http.post(environment.apiURL + '/api/login', {
      Firebasetoken: token
    }
      , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': token
        })
      })
      .subscribe(responseData => {
        console.log(responseData)
      },
        error => console.log(error));
  }


  getProjectsByDate(uid, project_id, date): Observable<any> {
    return this.http.get<any>(environment.apiURL + `/api/dailytimesheet/userid=${uid}/projectid=${project_id}/${date}`)
  }

  saveProjectHours(timeSheet: TimeSheet): Observable<void> {
    console.log(timeSheet)

    return this.http.put<void>(
      environment.apiURL + `/api/dailytimesheet/userid=${timeSheet.user_id}/projectid=${timeSheet.project_id}`,
      timeSheet,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError))
  }

  // submitProjectHours(post) {
  //   this.http.post(environment.apiURL + '/api/post', {
  //    post:post
  //   }).subscribe(responseData => {
  //     console.log(responseData)
  //   }, error => console.log(error))
  // }



}