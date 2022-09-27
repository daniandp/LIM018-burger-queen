import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import { NameClientComponent } from '../name-client/name-client.component';


@Component({
  selector: 'app-view-waiter-order',
  templateUrl: './view-waiter-order.component.html',
  styleUrls: ['./view-waiter-order.component.css']
})
export class ViewWaiterOrderComponent implements OnInit {
  clientName: string = '';
  modalSwitch!: boolean;
  breakfastSwitch: boolean = true; // item Menú
  lunchAndDinnerSwitch!: boolean; // menú lunch & dinner 
  itemBillSwitch!: boolean; // creación de items de orden
  @ViewChild('btnBreakfast') buttonBreakFast!: ElementRef;
  @ViewChild('btnLunch') buttonLunch!: ElementRef;

  
  constructor(private router: ActivatedRoute, private conector: ConnectionServiceService, private renderer2: Renderer2) { }
  
  ngOnInit(): void {
    this.router.queryParams.subscribe((params: any) => {
      this.clientName = params.client;
      console.log('CLIENTE ', this.clientName = params.client);
    })
  }

  showBreakfast(){
    const btnBFast = this.buttonBreakFast.nativeElement;
    const btnLunch = this.buttonLunch.nativeElement;
    this.renderer2.addClass(btnBFast, 'btnWaiterSelected');
    this.renderer2.removeClass(btnLunch, 'btnWaiterSelected');
    this.breakfastSwitch = true;
    this.lunchAndDinnerSwitch = false;
  }
  showLunchAndDinner(){
    const btnBFast = this.buttonBreakFast.nativeElement;
    const btnLunch = this.buttonLunch.nativeElement;
    this.renderer2.addClass(btnLunch, 'btnWaiterSelected');
    this.renderer2.removeClass(btnBFast, 'btnWaiterSelected');
    this.lunchAndDinnerSwitch = true;
    this.breakfastSwitch = false;
  }

  
}
