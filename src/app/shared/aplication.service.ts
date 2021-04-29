import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AplicationService {
	correntPage = new EventEmitter<any>();

  constructor(private http: HttpClient, private router: Router) { }

  // Headers
  /**
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': environment.apiKey
    })
  }*/

  //------------Metodos de Login
  makeLogin(username: string, password: string) {
    return this.http.post<any>(`${environment.apiURL}/usuario/login`, { username: username, senha: password });
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('x-access-token')
    return token;
  }


  getTokenExpirationDate(token: string): Date | null {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }


  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);

    if (date === undefined) {
      return false;
    }
    return !(date !== null ? date.valueOf() > new Date().valueOf() : false);
  }



  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  logout() {
    setTimeout(() => {
      window.localStorage.removeItem('x-access-token');
      this.router.navigate(['login']);
    }, 100);
  }

}
