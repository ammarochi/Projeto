import { Livro } from './../models/Livro';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  mainUrlAPI = `${environment.mainUrlAPI}livro/list`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.mainUrlAPI}`);
  }

  getById(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.mainUrlAPI}/${id}`);
  }

  post(livro: Livro) {
    return this.http.post(`{this.mainUrlAPI}`, livro);
  }

  put(id: number, livro: Livro) {
    return this.http.put(`{this.mainUrlAPI}/${id}`, livro);
  }




  //delete(id: number): Observable<Livro> {
    //return this.http.delete(`${this.mainUrlAPI}/${id}`);
  //}

}
