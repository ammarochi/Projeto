import { Aluno } from './../models/Aluno';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  mainUrlAPI = `${environment.mainUrlAPI}aluno/list`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.mainUrlAPI}`);
  }

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.mainUrlAPI}/${id}`);
  }

  post(aluno: Aluno) {
    return this.http.post(`{this.mainUrlAPI}`, aluno);
  }

  put(id: number, aluno: Aluno) {
    return this.http.put(`{this.mainUrlAPI}/${id}`, aluno);
  }

  


  //delete(id: number): Observable<Aluno> {
    //return this.http.delete(`${this.mainUrlAPI}/${id}`);
  //}

}
