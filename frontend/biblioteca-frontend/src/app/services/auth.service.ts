import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  nombre: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/api/auth';

  constructor(private http: HttpClient) {}

  login(data: LoginPayload): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, data);
  }

  register(data: RegisterPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  getPerfil(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/me`, { headers });
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }
}
