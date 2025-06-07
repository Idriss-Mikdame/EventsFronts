import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:1010/api/v1/auth';
  private tokenKey = 'auth_token';
  private userKey = 'auth_user';
  public userUpdated$ = new Subject<void>();
  constructor(private http: HttpClient) {}

  login(credentials: { email: string, motdepasse: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/Authentication`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          this.setAuthData(response.token, {
            id: response.id,
            nom: response.nom,
            email: response.email,
            role: response.role
          });

          this.userUpdated$.next();
        }
      })
    );
  }

  register(userData: { nom: string, email: string, motdepasse: string, role: string }): Observable<any> {
    const body = {
      nom: userData.nom,
      email: userData.email,
      motdepasse: userData.motdepasse,
      role: userData.role
    };
    return this.http.post(`${this.apiUrl}/register`, body);
  }

  private setAuthData(token: string, user: any): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): any {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  removeAuthData(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);

    this.userUpdated$.next();

  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
  }
}
