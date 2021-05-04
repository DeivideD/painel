import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user.model';


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

   ///api/usuario/delete/:username
   saveeUser(user: User){
    console.log( user );
    return this.http.post(`${environment.apiURL}/usuario/cadastro/`, user); 
  }
}
