import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
// import { HttpClient } from '@angular/common/http'
// import { environment } from '../../environments/environment.localhost'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService,
    // public api: ApiService,
    // private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  // logInLaravel() {

  //   this.http.post(environment.apiURL, this.api.httpOptions)
  //     .subscribe(responseData => {
  //       console.log(responseData)
  //     },
  //       error => console.log(error));

  // }


}
