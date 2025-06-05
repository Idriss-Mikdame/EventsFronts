import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private urlclient="http://localhost:1010/api/v1/clients"
  private urlevnt = "http://localhost:1010/api/v1/events";
  private url="POST http://localhost:1010/api/v1/reservations";
  constructor(private http: HttpClient) { }
  AfficheClient():Observable<any> {
    return this.http.get<any>(this.urlclient);
  }
  AfficheEvent():Observable<any> {
    return this.http.get<any>(this.urlevnt);
  }
  AfficherReservation(): Observable<any> {
    return this.http.get(this.url);
  }

  AjouterReservation(poste:any):Observable<any> {
    return this.http.post(this.url, poste);
  }

  AfficheReservationParid(id:any):Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }


}
