import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import { sendArrOrder } from '../models/sendArrOrder';

@Component({
  selector: 'app-view-waiter-order',
  templateUrl: './view-waiter-order.component.html',
  styleUrls: ['./view-waiter-order.component.css']
})
export class ViewWaiterOrderComponent implements OnInit {
  clientName: string = ''; // nombre del cliente, lo traemos de nameClient
  breakfastSwitch: boolean = true; // item Menú desayuno
  lunchAndDinnerSwitch!: boolean; // menú lunch & dinner 
  totalPrice: number = 0;
  @ViewChild('btnBreakfast') buttonBreakFast!: ElementRef;
  @ViewChild('btnLunch') buttonLunch!: ElementRef;
  sendArrOrder: any;
  //@ViewChild('sendOrder') btnSendOrder!: ElementRef;
  
  constructor(private router: ActivatedRoute, private renderer2: Renderer2, private connector: ConnectionServiceService ) { }
  
  ngOnInit(): void {
    // Nos suscribimos al valor del nombre del cliente 
    this.router.queryParams.subscribe((params: any) => {
      this.clientName = params.client;
    })
    
    this.connector.$totalOrder.subscribe((valor: any) => {
      this.totalPrice = valor;
    })

    this.connector.$sendArrOrder.subscribe((valor: any) => {
      this.sendArrOrder = new sendArrOrder (
        this.clientName,
        this.totalPrice,
        "PENDIENTE",
        valor,
      )
       
      
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

  async sendOrder() {
    const response = await this.connector.addOrder(this.sendArrOrder)
    console.log(response, "!!!!sendArrOrder");
    console.log(sendArrOrder, "sendArray")
  }
}
