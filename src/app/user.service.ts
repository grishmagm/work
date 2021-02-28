import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROOT_URL = "http://localhost:5000/api/user"

  constructor(private http: HttpClient) { 

  
  }
  register(user : any){
    return this.http.post<any>(`${this.ROOT_URL}/register`,user);
      }
      showvendore(user : any){
        return this.http.get<any>(`${this.ROOT_URL}/get`,user);
          }
          getItem(): Observable<User[]> {
            return this.http.get<User[]>(`${this.ROOT_URL}/get`);
          }
}
