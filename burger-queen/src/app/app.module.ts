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
import { RouterModule } from '@angular/router';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ItemMenuLunchAndDinnerComponent } from './components/item-menu/item-menu-lunch-and-dinner/item-menu-lunch-and-dinner.component';
import { ChefComponent } from './components/chef/chef.component';

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
    ItemMenuLunchAndDinnerComponent,
    ChefComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
