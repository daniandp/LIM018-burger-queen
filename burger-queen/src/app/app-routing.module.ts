import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewWaiterOrderComponent } from './components/view-waiter-order/view-waiter-order.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
{ path: 'welcome', component: WelcomeComponent },
{ path: 'menuWaiter', component: ViewWaiterOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
