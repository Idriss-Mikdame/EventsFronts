import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinetService {

  private url="http://localhost:1010/api/v1/clients"
  constructor(private http: HttpClient) { }

    AfficheClient():Observable<any> {
      return this.http.get<any>(this.url);
    }

    AjouterClient(poste:any) : Observable<any> {
      return this.http.post(this.url, poste);
    }

    afficherClientparid(id:any) : Observable<any> {
    return this.http.get(`${this.url}/${id}`);
    }
  SupprimerClient(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  Editclient(edittData : any,id:number):Observable<any>{
    return this.http.put(`${this.url}/${id}`,edittData)
  }
}
