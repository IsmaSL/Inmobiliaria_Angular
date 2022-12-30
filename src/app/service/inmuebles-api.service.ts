import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InmueblesAPIService {

  endpoint: string = 'http://localhost:8080/P3_Inm_prov_M16011220/inmobilaria/';

  constructor(private http: HttpClient) { }

  
  getAllHouses(): Observable<any> {
    return this.http.get(this.endpoint + 'todos');
  }

  getByPrice(val: number): Observable<any> {
    return this.http.get(this.endpoint + 'precio?val=' + val)
  }

  getByState(val: string): Observable<any> {
    return this.http.get(this.endpoint + 'estado?val=' + val)
  }
}
