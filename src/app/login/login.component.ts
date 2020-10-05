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

    this.auth.googleSignIn()
    const firebasetoken = ""
    console.log(firebasetoken)

    setTimeout(() => this.api.credentialsToLaravel(firebasetoken), 5000)
  }

}


