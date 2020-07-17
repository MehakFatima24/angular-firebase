import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from '../../../environments/environment';
import { UserService } from '../user/user.service';

firebase.initializeApp(environment.firebaseConfig);
@Injectable({
  providedIn: 'root'
})
export class AdapterService {

  constructor(private userservice: UserService) {}

  saveNote(note) {
    const userId = this.userservice.getUserId();
    firebase.database().ref('/notes/' + userId).set({note})
    .catch((error) => {console.log(error); });
  }

  getNote(callback) {
    const userId = this.userservice.getUserId();
    firebase.database().ref('/notes/' + userId)
    .once('value')
    .then((snapshot) => {
      const note = (snapshot.val()) ? snapshot.val().note : '';
      callback(note);
    })
    .catch((error) => {console.log(error); });
  }

}
