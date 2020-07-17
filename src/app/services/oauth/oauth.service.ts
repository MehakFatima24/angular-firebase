import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { JwtService } from '../jwt/jwt.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private jwt: JwtService,
        private user: UserService
    ) { }

    async googleSignin() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      this.jwt.saveCredentials(credential.credential);
      this.user.addUser(credential.user);
      this.router.navigate(['/editor']);
    }


    async signOut() {
      await this.afAuth.signOut();
      this.user.removeUser();
      this.jwt.destroyCredentials();
      this.router.navigate(['/']);
    }
}
