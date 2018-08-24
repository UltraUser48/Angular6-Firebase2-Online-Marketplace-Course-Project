import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : string;

  constructor(
    private toastr : ToastrService,
    private router : Router
  ) { }

  signUp(email: string, password : string) {
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        this.toastr.success('You have successfully registered! Now enter your usename and password to login!', 'Success');
        this.router.navigate(['/auth/signin']);
      })
      .catch((err) => {
        this.toastr.error(err.message, 'Warning');
      });
  }

  signIn(email : string, password : string) {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        firebase.auth()
          .currentUser
          .getIdToken()
          .then((token : string) => {
            this.token = token;
          })

          this.router.navigate(['/watches/start']);
          this.toastr.success('Logged In', 'Success');
          console.log(firebase.auth().currentUser.email);
      })
      .catch((err) => {
        this.toastr.error(err.message, 'Warning');
      });
  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.router.navigate(['/auth/signin']);
        this.token = null;
      });
  }

  getToken() {
    firebase.auth()
    .currentUser
    .getIdToken()
    .then((token : string) => {
      this.token = token;
    })

    return this.token;
  }

  isAuthenticated() : boolean {
    return this.token != null;
  }
  
}
