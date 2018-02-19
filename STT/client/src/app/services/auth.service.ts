import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired, AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
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
    })
    .catch((error: Response) => {
      return Observable.throw(false);
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(){
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

  activation(token) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get('api/accounts/activation/', { headers: headers, params: { token: token } })
      .map(response => {
        return true;
      });
  }

}
