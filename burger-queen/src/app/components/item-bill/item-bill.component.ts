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
  prueba: Array<any> = [];
  arrBreakfast: Array<any> = [];
  arrLunchAndDinner: Array<any> = [];
  @ViewChild('itemName') itName!: ElementRef;
  @ViewChild('itemPrice') itPrice!: ElementRef;

  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void {
    this.connector.$conector.subscribe((valor: any) => {
      this.addItem(valor);
      // console.log(this.arrLunchAndDinner, 'ALMUERZO EN EL DEDSAYUNO ');
      // console.log(this.arrOrder, 'ARRAY ORDER EN DESAYUNO');
    })   
    this.connector.$lunchAndDinner.subscribe((valor: any) => {
      this.addItem(valor);
      // console.log(this.arrBreakfast, 'DESAYUNO EN EL ALMUERZO');
      // console.log(this.arrOrder, 'ARRAY ORDER EN ALMUERZO');
    });
   }
     // Método para llenar el array de la orden, si 2 items se repiten los suma en el contador
  addItem(itemsMenu: any) {
    if (this.arrOrder.some((elem) => elem.product === itemsMenu.product)) {
      this.arrOrder = this.arrOrder.map((elem) => {
        if (elem.product === itemsMenu.product) {
          elem.cont += 1;
        
          return elem;
        }
        return elem;
      });
    } else {
      this.arrOrder.push({ ...itemsMenu, cont: 1 });
    }
    this.arrOrder = this.arrOrder.map((elem) => {
      elem.subTotal = elem.price * elem.cont;
      return elem;
    })
    console.log(this.arrOrder, 'CONSOLE DE ARRAY ORDER EN ITEMBILL');
 } 

}

// RECORRER EL arrOrder Y BUSCAR QUE PRODUCTO TIENE EL MISMO NOMBRE QUE EL SIGUIENTE ELEMENTO Y ACUMULAR
// LOS CONTADORES DE AMBOS

//SI EL ELEMENTO 1 .PRODUCT ES 'AROS DE CEBOLLA' Y EN EL CONT TIENE 2, Y EL ELEMENTO 2 .PRODUCT ES 'AROS DE CEBOLLA'
// Y EN EL CONT TIENE 1, ENTONCES EL RESULTADO DEBERÍA SER UN UNICO ELEMENTO CON CONT 3