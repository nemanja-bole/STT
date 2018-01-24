import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  invalidSignUp: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) {

  }

  signUp(credentials){
    this.authService.signUp(credentials)
    .subscribe(result => {
      if(result){
        this.router.navigate(['/registration-success']);
      }
      else{
        this.invalidSignUp = true;
      }
    })
  }

}
