import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {CartComponent} from "./cart/cart.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import {NewUserComponent} from "./newUser/newUser.component";
import {HomeComponent} from "./home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    NewUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
