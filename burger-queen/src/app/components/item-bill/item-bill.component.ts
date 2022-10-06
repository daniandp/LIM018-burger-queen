import { ThisReceiver } from '@angular/compiler';
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
  arrSubOrder: Array<any> = [];
  arrBreakfast: Array<any> = [];
  arrLunchAndDinner: Array<any> = [];
  @ViewChild('itemName') itName!: ElementRef;
  @ViewChild('itemPrice') itPrice!: ElementRef;

  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void {
    this.connector.$conector.subscribe((valor: any) => {
      this.arrBreakfast = valor;
      this.fullOrder();
      console.log(this.arrLunchAndDinner, 'ALMUERZO EN EL DEDSAYUNO ');
      console.log(this.arrOrder, 'ARRAY ORDER EN DESAYUNO');
    })   
    this.connector.$lunchAndDinner.subscribe((valor: any) => {
      this.arrLunchAndDinner= valor;
      this.fullOrder();
      console.log(this.arrBreakfast, 'DESAYUNO EN EL ALMUERZO');
      console.log(this.arrOrder, 'ARRAY ORDER EN ALMUERZO');
    });
   }
   fullOrder() {
    this.arrSubOrder.push(...this.arrBreakfast,...this.arrLunchAndDinner);
    // console.log(this.arrSubOrder.sort(), 'EL ARRAY ORDER DE FULL ORDER <<<<<<');
    this.arrSubOrder.forEach((elem) => {
      if(!this.arrOrder.includes(elem)) {
        this.arrOrder.push(elem);
      }
    })
   }
}
