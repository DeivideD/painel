import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): any {
    return this.http.get(`${environment.apiURL}/usuario/buscar/`);
  }

  ///api/usuario/delete/:username
  deleteUser(user:string){
    return this.http.delete<void>(`${environment.apiURL}/usuario/delete/:${user}`);
  }
}
