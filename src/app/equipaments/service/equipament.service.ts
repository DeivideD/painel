import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OnInit } from '@angular/core';
import { Equipaments } from '../shared/equipament.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class EquipamentService implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': environment.apiKey
    })
  }

  copylistarTodosProdutos(): Observable<Equipaments> {
    return this.http.get<Equipaments>(`${environment.apiURL}/equipamentos/buscar/semtoken`, this.httpOptions);
  }

  getAllEquipaments(): any {
    return this.http.get(`${environment.apiURL}/equipamentos/buscar/semtoken`, this.httpOptions)
  }


  getAllEquipamentsPage (pageSize: number, currentPage: number ): any {
    const queryParams = `?pageSize=${pageSize}&page=${currentPage}`;
    return this.http.get(`${environment.apiURL}/equipamentos/buscar/paginado${queryParams}`, this.httpOptions)
  }
}



