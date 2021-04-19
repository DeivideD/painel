import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': environment.apiKey
      })
    }


    getAllUsers(): any {
      return this.http.get(`${environment.apiURL}/usuario/buscar/`, this.httpOptions);
    }
  
}
