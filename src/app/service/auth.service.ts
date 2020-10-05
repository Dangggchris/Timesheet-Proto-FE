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
    this.getToken()
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
            console.log(this.userToken)
            resolve(idToken)
          })
        }
      })
    })
  }


}
