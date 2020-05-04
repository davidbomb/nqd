import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) { }

  /**
   * @url /login
   * @param user
   * @returns JWT of the connected user 
   */
  login(user): Observable<any> {
    return this.http.post("http://localhost:5000/login", user, {headers: this.httpHeaders});
  }

  setHttpHeaders(): void {
    let token = this.getToken();
    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });
  }
  ensureAuthenticated(token): Observable<any> {
    this.setHttpHeaders();
    console.log(this.httpHeaders)
    return this.http.get("http://localhost:5000/users/status", {headers: this.httpHeaders});
  }
  


  /**
   * TO DO
   * @param user 
   */
  register(user): Observable<any> {
    return this.http.post("http://localhost:5000/register", user, {headers: this.httpHeaders});
  }

  storeToken(jwt): void {
    localStorage.setItem('token', jwt);
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  clearSession(): void {
    localStorage.clear();
  }
}
