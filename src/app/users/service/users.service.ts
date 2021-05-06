import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  attTable = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  getPApeis(): any {
    return this.http.get(`${environment.apiURL}/usuario/papeis/`);
  }

  getAllUsers(): any {
    return this.http.get(`${environment.apiURL}/usuario/buscar/`);
  }

  ///api/usuario/delete/:username
  deleteUser(user: string) {
    return this.http.delete<void>(`${environment.apiURL}/usuario/delete/${user}`);
  }

  ///api/usuario/delete/:username
  saveeUser(user: User) {
    return this.http.post(`${environment.apiURL}/usuario/cadastro/`, user);
  }

  ///api/usuario/delete/:username
  editUser(user: User) {
    return this.http.put(`${environment.apiURL}/usuario/atualizar_dados/`, user);
  }
}
