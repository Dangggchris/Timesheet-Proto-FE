import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public api: ApiService,
  ) { }

  ngOnInit(): void {
  }

  signIn() {

    // 1. sign in using google
    this.auth.googleSignIn()
    // 2. set the user token
    // const firebasetoken = this.auth.userToken
    // 3. send user toke to laravel
    // this.api.credentialsToLaravel(firebasetoken)
    this.laravelCredntials()
  }


  async laravelCredntials() {

    const firebasetoken = await this.auth.getToken()

    this.api.credentialsToLaravel(firebasetoken)

  }

}


