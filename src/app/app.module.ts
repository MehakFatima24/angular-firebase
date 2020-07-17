import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';


import { MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatButtonModule,
         MatCardModule,
         MatProgressSpinnerModule} from '@angular/material';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { KatexModule } from 'ng-katex';

import { OauthService } from './services/oauth/oauth.service';
import { AdapterService } from './services/adapter/adapter.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { JwtService } from './services/jwt/jwt.service';
import { UserService } from './services/user/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KatexModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxUiLoaderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    OauthService,
    AdapterService,
    AuthGuardService,
    JwtService,
    UserService,
    NgxUiLoaderService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
