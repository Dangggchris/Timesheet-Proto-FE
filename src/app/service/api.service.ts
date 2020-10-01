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

  credentialsToLaravel(token) {

    this.http.post(environment.apiURL + '/api/login', {
      Firebasetoken: token
    }
      , {
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