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
  @ViewChild('itemName') itName!: ElementRef;
  @ViewChild('itemPrice') itPrice!: ElementRef;

  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void {
    this.connector.$conector.subscribe((valor: any) => {
      this.arrOrder = valor;
      console.log(this.arrOrder, 'aqui');
      if (this.arrOrder.some((elem) => elem.product === valor.product)) {
        this.arrOrder = this.arrOrder.map((elem) => {
          if (elem.product === valor.product) {
            elem.cont += 1;
            return elem;
          }
          return elem;
        });
      } else {
        this.arrOrder.push({ ...valor, cont: 1 });
      }
      console.log(this.arrOrder, 'LA TORRE INCLINADA DE LAS AREPAS');

      /*       console.log(valor, 'primer valor');
            
            console.log(this.arrOrder.includes(valor), 'aqui');
            
            if (this.arrOrder.includes(valor)) {
              this.arrOrder;
              console.log(this.arrOrder, 'DENTRO DEL IF');
            } else {
              this.arrOrder.push(valor);
            }
            console.log(this.arrOrder.flat(), 'ARRAY ORDER');
            console.log(valor, 'VALOR'); */
    })
  }

}
