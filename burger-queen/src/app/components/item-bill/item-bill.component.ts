import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';

@Component({
  selector: 'app-item-bill',
  templateUrl: './item-bill.component.html',
  styleUrls: ['./item-bill.component.css']
})
export class ItemBillComponent implements OnInit {
  /* arrOrderBreakfast: Array<any> = [];
  arrOrderLunchAndDinner: Array<any> = []; */
  arrOrder: Array<any> = [];
  arrBreakfast: Array<any> = [];
  arrLunchAndDinner: Array<any> = [];
  @ViewChild('itemName') itName!: ElementRef;
  @ViewChild('itemPrice') itPrice!: ElementRef;

  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void {
    this.connector.$conector.subscribe((valor: any) => {
      this.arrOrder = valor;
      console.log(this.arrOrder, 'array order');
      
    })
    this.connector.$lunchAndDinner.subscribe((valor: any) => {
      this.arrOrder = valor;
    });
   }
}
