import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-waiter',
  templateUrl: './header-waiter.component.html',
  styleUrls: ['./header-waiter.component.css'] 
})
export class HeaderWaiterComponent implements OnInit {
  @ViewChild('btnTakeOrder') takeOrder!: ElementRef
  @ViewChild('btnListOrder') listOrder!: ElementRef

 
  constructor(private router: Router, private renderer2: Renderer2) { }
  
  // retorna la ruta a welcome
  returnToWelcome() {
    this.router.navigate(['/welcome']);
  }

  goToTakeOrder() {
    const btnTakeOrder = this.takeOrder.nativeElement
    const btnListOrder = this.listOrder.nativeElement
    this.renderer2.addClass(btnTakeOrder, 'btnSelected');
    this.renderer2.removeClass(btnListOrder, 'btnSelected');
    this.router.navigate(['/nameClient']);

  }

  goToStatusList() {
    const btnTakeOrder = this.takeOrder.nativeElement
    const btnListOrder = this.listOrder.nativeElement
    this.renderer2.addClass(btnListOrder, 'btnSelected');
    this.renderer2.removeClass(btnTakeOrder, 'btnSelected');
    this.router.navigate(['/containerOrders']); 
  }

  ngOnInit(): void { }

}
