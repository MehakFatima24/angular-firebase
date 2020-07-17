import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'editor',
    component: MainComponent,
    canActivate: [AuthGuardService]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
