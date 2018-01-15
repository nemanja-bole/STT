import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { 

  }

  login(credentials){
    var header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http.post('/api/auth/', JSON.stringify(credentials), { headers: header })
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

  }

  isLoggedIn(){

  }

}
