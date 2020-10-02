import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { User } from './user.model'

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })

export class AuthService {
  user$: Observable<User>;
  public userToken: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private api: ApiService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  private updateUserData(user) {
    // Sets user data to firestore on login, can implement custom data if necessary
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);


    // const jwt = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2NzUwM2UwYWVjNTJkZGZiODk2NTIxYjkxN2ZiOGUyMGMxZjMzMDAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQ2VkcmljIE9yZWpvbGEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2hhZ0lJbV9ZN3M3UWhwejRlRHhOQjJuNEJjWEdTd1pCd092N0lRZ3ciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmhiLXRpbWVzaGVldC1wcm90byIsImF1ZCI6InZoYi10aW1lc2hlZXQtcHJvdG8iLCJhdXRoX3RpbWUiOjE2MDE0OTU3NDgsInVzZXJfaWQiOiJVbjhON3c3SG4wZTJoa3A0N2YySFhSNDVteXYyIiwic3ViIjoiVW44Tjd3N0huMGUyaGtwNDdmMkhYUjQ1bXl2MiIsImlhdCI6MTYwMTQ5NTc0OCwiZXhwIjoxNjAxNDk5MzQ4LCJlbWFpbCI6ImNlZHJpY29yZWpvbGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTMwNjU0NjE5MzYwODk5ODY5MTYiXSwiZW1haWwiOlsiY2Vkcmljb3Jlam9sYUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.jQy3BGZeioy7XBPF2Dus8COvZfINvijUJ2QMee62E6UZDDLqtC4hvWgg8dL0Co41K5MnBR04vdi_uBqBa45MldP5v61A33PTH519ojceqk2y1eIFMMATuooB06AKcJSFyeG-bjX0tPW2SyZuX-MPPUkfykdLkwn-H3gOV2OlAwtUVSnwQhQG1sTLONs0-S9l3HiFBVL2CwBI6Re0Y-KQkRJWh2JQHGVnrAoq7J0eoD9ow5AXlT6-ZfItUVteI2lyRQUdjSo_FWGvPxNXBX2cflZ40oBptimArqyEVSbmHXJU80H9AWk4stPBj9MPo5nIPfxCodJ8OWgrbk_fhUJ08g"


    // Send to Laravel Back End
    this.getToken()


    console.log(this.userToken)
    // async await? should we async nested in async?
    this.api.credentialsToLaravel(this.userToken)



    return this.updateUserData(credential.user)
  }

  // Will require Angular Routing....
  async signOut() {
    await this.afAuth.signOut()
    this.router.navigate(['/'])
  }

  // Get Token Method() - tie in with API service
  getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged(user => {
        if (user) {
          user.getIdToken().then(idToken => {
            this.userToken = idToken;
            console.log(idToken)
            resolve(idToken)
          })
        }
      })
    })
  }


}
