import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:8089/Event";

  AfficheEvent():Observable<any> {
    return this.http.get<any>(this.url);
  }

  AjouterEvent(poste:any):Observable<any> {
    return this.http.post(this.url, poste);
  }
  AfficherEventparid(id:any):Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  SupprimerClient(id:number):Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  EditEvent(edittData : any,id:number):Observable<any>{
    return this.http.put(`${this.url}/${id}`,edittData)
  }
}
