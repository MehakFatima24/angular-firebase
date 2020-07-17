import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
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
    NgxUiLoaderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [OauthService, AdapterService, AuthGuardService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
