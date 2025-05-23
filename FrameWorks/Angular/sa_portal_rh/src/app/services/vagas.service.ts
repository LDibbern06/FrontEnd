import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  //atributo 
  private apiUrl = "http://localhost:3016/vagas"; // caminho da API

  constructor(private http: HttpClient ) { }

  //metodo de Conexão com API
  
  //get - read
  getVagas(): Observable<Vaga[]> { // responsavel por traduzir as informaçoes da API aos Models
    return this.http.get<Vaga[]>(this.apiUrl); // endereco da conexao da informação 
  }

  //post - create
  cadastrarVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  //put - updtate
  atualizarVaga(id: any, vaga: Vaga): Observable<Vaga[]>{
    const urlAtualizado = `${this.apiUrl}/${id}`; // url atualizada
    return this.http.put<Vaga[]>(urlAtualizado, vaga); // atualiza a url
  }

  //delete - delete
  removerVaga(id:any): Observable<Vaga[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar);
  }
}
