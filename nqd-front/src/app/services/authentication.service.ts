import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

  private httpHeaders: HttpHeaders;

  private admin: boolean;

  constructor(private http: HttpClient,
    private router: Router) { }

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
  ensureAuthenticated(): Observable<any> {
    this.setHttpHeaders();
    console.log(this.httpHeaders)
    return this.http.get("http://localhost:5000/users/status", {headers: this.httpHeaders});
  }

  isAdmin(): Observable<boolean> {
    this.setHttpHeaders();
    return this.http.get<boolean>("http://localhost:5000/users/isAdmin", {headers: this.httpHeaders})
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

  // canActivate(): Observable<boolean> {
  //   return this.isAdmin().subscribe(
  //     res => {
  //       return new Observable<true>;
  //       // res.isAdmin === "True";
  //     },
  //     err => {
  //       console.log(err)
  //       return false;
  //     }
  //   )
  // }

  

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
