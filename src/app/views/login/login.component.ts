import { Component } from '@angular/core';
import { OauthService } from '../../services/oauth/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: OauthService) {}

  signIn() {
    this.authService.googleSignin();
  }


}
