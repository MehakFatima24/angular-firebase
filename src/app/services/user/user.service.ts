import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserId() {
    return this.getUser().uid;
  }

  getUser() {
    const user = window.localStorage.getItem('user');
    if (user !== null) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  addUser(user) {
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    window.localStorage.setItem('user', JSON.stringify(data));
  }

  removeUser() {
    if (this.getUser() !== null) {
      window.localStorage.removeItem('user');
    }
  }
}
