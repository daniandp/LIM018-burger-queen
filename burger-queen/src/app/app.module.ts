import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderWaiterComponent } from './components/header-waiter/header-waiter.component';
import { NameClientComponent } from './components/name-client/name-client.component';
import { ViewWaiterOrderComponent } from './components/view-waiter-order/view-waiter-order.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { ItemBillComponent } from './components/item-bill/item-bill.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderWaiterComponent,
    NameClientComponent,
    ViewWaiterOrderComponent,
    ItemMenuComponent,
    ItemBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
