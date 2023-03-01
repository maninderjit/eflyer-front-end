import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { ItemComponent } from './sections/item/item.component';
import { CartComponent } from './sections/cart/cart.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : '', redirectTo:'/home', pathMatch:'full'},
  {path : 'home', component: DashboardComponent},
  {path : 'item/:itemId', component: ItemComponent},
  {path : 'cart', component: CartComponent},
  {path : 'cart/:itemId', component: CartComponent},
  {path : 'address', component: AddressComponent},
  {path : 'login', component: LoginComponent},
  {path : 'user', component:UserComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
