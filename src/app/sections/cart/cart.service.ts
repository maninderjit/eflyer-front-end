import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  
  getIPAddress(){
    return this.http.get("http://api.ipify.org/?format=json");
  }

  getCartByIp(ipAddress:string):any{
    return this.http.get(`${baseUrl}/get-by-ip/${ipAddress}`);
  }

  getCartById(userId:number):any{
    return this.http.get(`${baseUrl}/get-by-id/${userId}`);
  }

  addItemIntoCartByIp(ipAddress:string, itemId:number):any{
    let data = {"itemId":itemId};    
    return this.http.post(`${baseUrl}/save-by-ip/${ipAddress}`, data);
  }

  addItemIntoCartById(userId:number, itemId:number):any{
    let data = {"itemId":itemId};    
    return this.http.post(`${baseUrl}/save-by-id/${userId}`, data);
  }

  orderNow(cart:any):any{
    return this.http.post(`${baseUrl}/order`, cart);
  }
}
