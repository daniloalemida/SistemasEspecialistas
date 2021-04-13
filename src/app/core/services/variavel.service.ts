import { Variavel } from './../models/variavel.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariavelService {

  baseURL ="http://localhost:3001/variaveis"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })    
  }

  create(variavel: Variavel): Observable<Variavel> {
    return this.http.post<Variavel>(this.baseURL, variavel)
  }

  readByIdSistema(id: number): Observable<Variavel[]> {
    const url = `${this.baseURL}?idSistema=${id}`
    return this.http.get<Variavel[]>(url)
  }

  readById(id: number): Observable<Variavel> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Variavel>(url)
  }

  read(id: string): Observable<Variavel[]>{
    return this.http.get<Variavel[]>(this.baseURL)
  }

  update(variavel: Variavel): Observable<Variavel>{
    const url = `${this.baseURL}/${variavel.id}`
    return this.http.put<Variavel>(url, variavel)
  }

  delete(id: string): Observable<Variavel>{
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Variavel>(url)
  }
}
