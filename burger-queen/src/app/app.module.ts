import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderWaiterComponent } from './components/header-waiter/header-waiter.component';
import { NameClientComponent } from './components/name-client/name-client.component';
import { ViewWaiterOrderComponent } from './components/view-waiter-order/view-waiter-order.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { ItemBillComponent } from './components/item-bill/item-bill.component';
import { ContainerTicketsComponent } from './components/container-tickets/container-tickets.component';
import { TicketOrderComponent } from './components/ticket-order/ticket-order.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderWaiterComponent,
    NameClientComponent,
    ViewWaiterOrderComponent,
    ItemMenuComponent,
    ItemBillComponent,
    ContainerTicketsComponent,
    TicketOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
