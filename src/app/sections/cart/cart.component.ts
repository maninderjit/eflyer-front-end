import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/app.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:any = {cartItemList:[], ipAddress:null};
  deliveryAddress:any = {address1:'Address 1', address2:'Address 2', city:'Ludhiana', state:'Punjab', country:'India', zipCode:'141101'};

  constructor(private router: Router,private route:ActivatedRoute, private cartService:CartService) {
  }
  
  ngOnInit() :void {
    let itemId:number = this.route.snapshot.params["itemId"];
    console.log('itemId',itemId);
    let user = UserService.getUser();
    if(user.id > 0){
       let userId = user.id;
        if(itemId > 0){
          this.cartService.addItemIntoCartById(userId,itemId).subscribe((cart:any)=>{
            this.cart = cart;
            this.router.navigateByUrl("/cart");
          });
        }else{
          this.cartService.getCartById(userId).subscribe((cart:any)=>{
            this.cart = cart;
          });
        }
    }else{
      this.cartService.getIPAddress().subscribe((object:any)=>{
        console.log('20 line', object.ip, typeof(object.ip));
        let ipAddress = object.ip;
        if(itemId > 0){
          this.cartService.addItemIntoCartByIp(ipAddress,itemId).subscribe((cart:any)=>{
            this.cart = cart;
            this.router.navigateByUrl("/cart");
          });
        }else{
          this.cartService.getCartByIp(ipAddress).subscribe((cart:any)=>{
            this.cart = cart;
          });
        }
      });
    }
    if(user != null){
      this.cart.deliveryAddress = user.address != null ? user.address : {};
    } else {
      this.cart.deliveryAddress = {};
    }
  }

  onUnitsChange(event:any, index:number) : void{
    let cartItem = this.cart.cartItemList[index];
    cartItem.units = event.target.value;
    cartItem.totalPrice = cartItem.units * cartItem.price;
    cartItem.payablePrice = cartItem.totalPrice - cartItem.discount;
  }

  onDiscountChange(event:any, index:number) : void{
    let cartItem = this.cart.cartItemList[index];
    cartItem.discount = event.target.value;
    cartItem.payablePrice = cartItem.totalPrice - cartItem.discount;
  }

  getTotalPayablePrice():any{
    this.cart.totalPayablePrice = 0
    this.cart.cartItemList.forEach((cartItem:any) => {
      this.cart.totalPayablePrice += cartItem.payablePrice;
    });
    return this.cart.totalPayablePrice;
  }
  
  orderNow(): void{
    if(this.cart.cartItemList.length == 0){
      alert("No Item in cart, So Sorry.");
      return;
    }
    let user = UserService.getUser();
    if(!user || !user.authorized){
      alert("No user logged in.");
      let url = this.router.url;
      this.router.navigateByUrl("/login?url="+url);
      return;
    }
    if(!this.cart.deliveryAddress || !this.cart.deliveryAddress.address1){
      this.router.navigateByUrl("/user");
      return;
    }
    if(this.cart.cartItemList.length > 0){
      this.cartService.orderNow(this.cart).subscribe((cart:any)=>{
        if(cart.paid){
          alert("Successfully placed order.");
          this.router.navigateByUrl("/home");
        }
      });   
    }   
  }
}
