import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment.localhost'
import { from, Observable } from 'rxjs';
import { TimeSheet } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  post: Observable<TimeSheet>;
  firebasetoken: string;

  constructor(
    private http: HttpClient,
  ) { }

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


  getProjectsByDate(uid, date): Observable<any> {
    return this.http.get<any>(environment.apiURL + '/api/dailytimesheet/' + uid + '/' + date)
  }

  saveProjectHours(uid, project_id, time) {
    console.log(time)

    this.http.put<any>(environment.apiURL + `/dailytimesheet/userid=${uid}/projectid=${project_id}`, {
      time
    }).subscribe(responseData => {
      console.log(responseData)
    }, error => console.log(error))
  }

  // submitProjectHours(post) {
  //   this.http.post(environment.apiURL + '/api/post', {
  //    post:post
  //   }).subscribe(responseData => {
  //     console.log(responseData)
  //   }, error => console.log(error))
  // }



}