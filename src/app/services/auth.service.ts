import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(userData:   
    any) {
       return this.http.post('localhost:3000/api/users/register', userData)
     }
}
