import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private jwt: JwtService, private router: Router) { }

  canActivate() {
    if (this.jwt.getCredentials() !== null) {
      return true;
    } else {
    this.router.navigate(['login']);
    return false;
    }
  }
}
