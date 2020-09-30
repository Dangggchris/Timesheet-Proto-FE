import { Injectable } from '@angular/core';
import { AuthService } from './auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firebasetoken: string;

  constructor(
    private http: HttpClient
  ) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'JWT' + this.auth.getToken()
  //   })
  // }

  credentialsToLaravel(user, token) {
    // let firebasetoken = this.auth.getToken()
    // this.auth.user$
    // do a post request to localhost:8000/login/{user data parameter?}

    this.http.post('http://localhost:8000/login', user, token)
      .subscribe(responseData => {
        console.log(responseData)
      },
        error => console.log(error));

  }


}
