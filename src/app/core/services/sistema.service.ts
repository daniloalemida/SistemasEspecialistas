import { Sistema } from './../models/sistema.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  baseURL ="http://localhost:3001/sistemas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })    
  }

  create(sistema: Sistema): Observable<Sistema> {
    return this.http.post<Sistema>(this.baseURL, sistema)
  }

  read(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(this.baseURL)
  }

  readById(id: string): Observable<Sistema>{
    const url = `${this.baseURL}/${id}`
    return this.http.get<Sistema>(url)
  }

  update(sistema: Sistema): Observable<Sistema>{
    const url = `${this.baseURL}/${sistema.id}`
    return this.http.put<Sistema>(url, sistema)
  }

  delete(id: string): Observable<Sistema>{
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Sistema>(url)
  }


}
