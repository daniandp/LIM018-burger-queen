import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NameClientComponent } from './components/name-client/name-client.component';
import { ViewWaiterOrderComponent } from './components/view-waiter-order/view-waiter-order.component';
import { ContainerTicketsComponent } from './components/container-tickets/container-tickets.component';
import { ChefComponent } from './chef/chef.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
{ path: 'welcome', component: WelcomeComponent },
{ path: 'nameClient', component: NameClientComponent },
{ path: 'menuWaiter', component: ViewWaiterOrderComponent },
{ path: 'containerOrders', component: ContainerTicketsComponent },
{ path: 'viewChef', component: ChefComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
