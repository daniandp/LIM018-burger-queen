import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionServiceService } from 'src/app/connection-service.service';


@Component({
  selector: 'app-view-waiter-order',
  templateUrl: './view-waiter-order.component.html',
  styleUrls: ['./view-waiter-order.component.css']
})
export class ViewWaiterOrderComponent implements OnInit {
  clientName: string = ''; // nombre del cliente, lo traemos de nameClient
  breakfastSwitch: boolean = true; // item Menú desayuno
  lunchAndDinnerSwitch!: boolean; // menú lunch & dinner 
  @ViewChild('btnBreakfast') buttonBreakFast!: ElementRef;
  @ViewChild('btnLunch') buttonLunch!: ElementRef;

  
  constructor(private router: ActivatedRoute, private renderer2: Renderer2) { }
  
  ngOnInit(): void {
    // Nos suscribimos al valor del nombre del cliente 
    this.router.queryParams.subscribe((params: any) => {
      this.clientName = params.client;
    })
      
  }

  // Método para mostrar el menú de desayuno
  showBreakfast(){
    const btnBFast = this.buttonBreakFast.nativeElement;
    const btnLunch = this.buttonLunch.nativeElement;
    this.renderer2.addClass(btnBFast, 'btnWaiterSelected');
    this.renderer2.removeClass(btnLunch, 'btnWaiterSelected');
    this.breakfastSwitch = true;
    this.lunchAndDinnerSwitch = false;
  }

  // Método para mostrar el menú de lunch and dinner
  showLunchAndDinner(){
    const btnBFast = this.buttonBreakFast.nativeElement;
    const btnLunch = this.buttonLunch.nativeElement;
    this.renderer2.addClass(btnLunch, 'btnWaiterSelected');
    this.renderer2.removeClass(btnBFast, 'btnWaiterSelected');
    this.lunchAndDinnerSwitch = true;
    this.breakfastSwitch = false;
  }

}
