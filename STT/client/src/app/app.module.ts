import { AppErrorHandler } from './common/errors/error-handler';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 
    'angular2-jwt/angular2-jwt';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { ActivationComponent } from './activation/activation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { FooterComponent } from './footer/footer.component';
import { LoggedGuard } from './services/logged-guard.service';
import { EmailValidators } from './common/validators/email.validators';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    RegistrationSuccessComponent,
    ActivationComponent,
    NavbarComponent,
    CompetitionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard], }, 
      { path: 'login', component: LoginComponent, canActivate: [LoggedGuard], },
      { path: 'sign-up', component: SignUpComponent, canActivate: [LoggedGuard], },
      { path: 'registration-success', component: RegistrationSuccessComponent, canActivate: [LoggedGuard],},
      { path: 'activation/:token', component: ActivationComponent},
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    LoggedGuard,
    AUTH_PROVIDERS,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    EmailValidators,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }