import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment.localhost'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firebasetoken: string;

  constructor(
    private http: HttpClient,

  ) { }

  credentialsToLaravel(user, token) {
    // let firebasetoken = this.auth.getToken()
    // this.auth.user$
    // do a post request to localhost:8000/login/{user data parameter?
    console.log(user.uid)
    console.log(token)
    this.http.post(environment.apiURL + '/api/login', {
      userInfo: user,
      authToken: token
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT' + token
      })
    })
      .subscribe(responseData => {
        console.log(responseData)
      },
        error => console.log(error));

  }

}