import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './services/jwt/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'FEAssignment';

  constructor(private router: Router, private jwt: JwtService) {}

  ngOnInit() {
    if (this.jwt.getCredentials() !== undefined) {
      this.router.navigate(['editor']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
