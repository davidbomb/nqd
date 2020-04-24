import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /** get All users 
   * @route 
   * @param   
   */
  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/users');
  }

}
