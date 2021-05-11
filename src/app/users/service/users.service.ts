import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user.model';
import {  catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  attTable = new EventEmitter<boolean>();
  hasError = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getPApeis(): any {
    return this.http.get(`${environment.apiURL}/usuario/papeis/`);
  }

  getAllUsers(): any {
    return this.http.get(`${environment.apiURL}/usuario/buscar/`);
  }

  ///api/usuario/delete/:username
  deleteUser(user: string): any {
    return this.http.delete<void>(`${environment.apiURL}/usuario/delete/${user}`);
  }

  ///api/usuario/delete/:username
  saveeUser(user: User) {
    return this.http.post<User>(`${environment.apiURL}/usuario/cadastro/`, user);
  }

  ///api/usuario/delete/:username
  editUser(user: User): any {
    return this.http.put(`${environment.apiURL}/usuario/atualizar_dados/`, user);
  }
}
