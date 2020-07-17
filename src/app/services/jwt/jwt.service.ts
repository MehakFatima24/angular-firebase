import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }


  getCredentials() {
    const credentials = window.localStorage.getItem('credentials');
    if (credentials !== null) {
      return JSON.parse(credentials);
    } else {
      return null;
    }
  }


  saveCredentials(credentials) {
    const creds = {
      idToken: credentials.idToken,
      accessToken: credentials.accessToken
    };
    window.localStorage.setItem('credentials', JSON.stringify(creds));
  }


  destroyCredentials() {
    if (this.getCredentials() !== null) {
      window.localStorage.removeItem('credentials');
    }
  }
}
