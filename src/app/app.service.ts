import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const userBaseUrl = 'http://localhost:8080/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  saveOrUpdate(user:any):any{
    return this.http.post(`${userBaseUrl}`,user);
  }
  
  login(user:any):any{
    return this.http.post(`${userBaseUrl}/auth`,user);
  
  }

  static logout():any{
    localStorage.removeItem('XXXXUSERYYYY');
  }
  static setUser(user:any):void{
    let iText = JSON.stringify(user);
    localStorage.setItem('XXXXUSERYYYY', iText);
  }

  static getUser():any{
    let  iText:any = localStorage.getItem('XXXXUSERYYYY');
    return JSON.parse(iText);
  }
}