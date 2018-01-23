import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 
    'angular2-jwt/angular2-jwt';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] }, 
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }