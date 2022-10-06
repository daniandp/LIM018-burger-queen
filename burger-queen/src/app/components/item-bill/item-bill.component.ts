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
    this.fullOrder()
   
  
   }

   fullOrder(){
    this.connector.$conector.subscribe((valor: any) => {
      this.arrBreakfast = valor;
      console.log(this.arrBreakfast, 'array order de DESAYUNO');
      this.arrOrder = valor.concat(this.arrLunchAndDinner);
      console.log(this.arrOrder, "arrayOrder DESAYUNO")
    })
    this.connector.$lunchAndDinner.subscribe((valor: any) => {
      this.arrLunchAndDinner = valor;
      console.log(this.arrLunchAndDinner, 'array order de LUNCH AND DINNER');
      this.arrOrder = valor.concat(this.arrBreakfast);
      console.log(this.arrOrder, "arrayOrder ALMUERZO")
    });
   }
}
