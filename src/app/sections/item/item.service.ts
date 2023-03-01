import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  
  getItem(itemId:number):any{
    return this.http.get(`${baseUrl}/get/${itemId}`);
  }
  
}
