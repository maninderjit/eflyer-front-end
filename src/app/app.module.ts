import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BannerComponent } from './sections/banner/banner.component';
import { FashionComponent } from './sections/fashion/fashion.component';
import { EquipmentComponent } from './sections/equipment/equipment.component';
import { JewelleryComponent } from './sections/jewellery/jewellery.component';
import { FooterComponent } from './sections/footer/footer.component';
import { CopyrightComponent } from './sections/copyright/copyright.component';
import { LoaderComponent } from './sections/loader/loader.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { CartComponent } from './sections/cart/cart.component';
import { ItemComponent } from './sections/item/item.component';
import { SectionsComponent } from './sections/sections.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FashionComponent,
    EquipmentComponent,
    JewelleryComponent,
    FooterComponent,
    CopyrightComponent,
    LoaderComponent,
    DashboardComponent,
    CartComponent,
    ItemComponent,
    SectionsComponent,
    HomeComponent,
    LoginComponent,
    AddressComponent,
    UserComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
