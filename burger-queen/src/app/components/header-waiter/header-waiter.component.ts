import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-waiter',
  templateUrl: './header-waiter.component.html',
  styleUrls: ['./header-waiter.component.css'] 
})
export class HeaderWaiterComponent implements OnInit {
  @ViewChild('btnTakeOrder') takeOrder!: ElementRef;
  @ViewChild('btnListOrder') listOrder!: ElementRef;
  @ViewChild('containerHeader') contHeader!: ElementRef;
 
  constructor(private router: Router, private renderer2: Renderer2) { }
  viewChefInactive: boolean = true;


  ngOnInit(): void { 
    if (location.pathname === '/viewChef') {
      this.viewChefInactive = false;
    }
    
  }
  
  // retorna la ruta a welcome
  returnToWelcome() {
    this.router.navigate(['/welcome']);
  }
  goToStatusList() {
    this.router.navigate(['/containerOrders']);
  }
  goToTakeOrder() {
    this.router.navigate(['/nameClient']);
  }

  ngAfterViewInit(): void {
    if (location.pathname === '/viewChef') {
      this.renderer2.setStyle(this.contHeader.nativeElement, 'transform',  'translate(-135%, 0%)' )
    }
    console.log(this.contHeader, 'cont header');
    const btnTakeOrder = this.takeOrder.nativeElement;
    const btnListOrder = this.listOrder.nativeElement;
    if (location.pathname === '/nameClient') {
      this.renderer2.addClass(btnTakeOrder, 'btnSelected');
      this.renderer2.removeClass(btnListOrder, 'btnSelected');
    } else if (location.pathname === '/containerOrders') {
      this.renderer2.addClass(btnListOrder, 'btnSelected');
      this.renderer2.removeClass(btnTakeOrder, 'btnSelected');
    } 
  }

}
