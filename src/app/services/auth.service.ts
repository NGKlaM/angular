import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://hoadv-nodejs.vercel.app/auth';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    // Gửi yêu cầu đăng ký đến API
    return this.http.post(`${this.apiUrl}/signin`, user);
  }

  login(credentials: any): Observable<any> {
    // Gửi yêu cầu đăng nhập đến API
    return this.http.post(`${this.apiUrl}/signup`, credentials);
  }
}
