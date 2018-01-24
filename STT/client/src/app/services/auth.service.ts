import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired, AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map'
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private authHttp: AuthHttp,
    private http: Http,
    private router: Router) { 

  }

  login(credentials){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/auth/', JSON.stringify(credentials), { headers: headers })
    .map(response => {
      let result = response.json();
      if(result && result.token) {
        localStorage.setItem('token', result.token);
        return true;
      }
      
      return false;

    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(){
    console.log("test");
    return tokenNotExpired();

  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token){
      return null;
    }

    return new JwtHelper().decodeToken(token);
  }

  signUp(credentials) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('api/accounts/sign-up/', JSON.stringify(credentials), { headers: headers })
    .map(response => {
      let result = response.json();
      if(result){
        return true;
      }
      else {
        return false;
      }
    });
  }

}
