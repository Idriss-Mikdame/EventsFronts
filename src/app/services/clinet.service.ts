import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinetService {

  private url="http://localhost:8089/client"
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
  SupprimerClient(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  Editclient(edittData : any):Observable<any>{
    return this.http.put("http://localhost:8089/client"+ edittData.id,edittData)
  }
}
