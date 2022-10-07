import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';

@Component({
  selector: 'app-item-bill',
  templateUrl: './item-bill.component.html',
  styleUrls: ['./item-bill.component.css']
})
export class ItemBillComponent implements OnInit {
  arrOrder: Array<any> = [];
  @ViewChild('itemName') itName!: ElementRef;
  @ViewChild('itemPrice') itPrice!: ElementRef;
  @ViewChild('removeItem') btnRemove!: ElementRef;
  @ViewChild('addItem') btnAdd!: ElementRef;

  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void {
    this.connector.$conector.subscribe((valor: any) => {
      this.addItem(valor); // nos suscribimos y recibimos el OBJETO de cada item del menú desayuno
      this.totalPrice();
    })
    this.connector.$lunchAndDinner.subscribe((valor: any) => {
      this.addItem(valor); // nos suscribimos y recibimos el OBJETO de cada item del menú almuerzo y cena
      this.totalPrice();
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

  // Método para restar items y elimina el item si es igual o menor a 0
  restItems(itemsMenu: any) {
    itemsMenu.cont -= 1;
    itemsMenu.subTotal = itemsMenu.price * itemsMenu.cont
    if (itemsMenu.cont <= 0) {
      this.arrOrder.splice(this.arrOrder.indexOf(itemsMenu), 1)
    }
    this.totalPrice();
    console.log(this.arrOrder, 'array order en RESTAR');
  }

  // Método para sumar items
  sumItems(itemsMenu: any) {
    itemsMenu.cont += 1;
    itemsMenu.subTotal = itemsMenu.price * itemsMenu.cont
    console.log(this.arrOrder, 'array order en SUMAR');
    this.totalPrice();
  }

  // Método para el total de la orden 
  totalPrice() {
    let total = 0;
    this.arrOrder.forEach((elem) => {
      total += elem.subTotal
    })
    this.connector.$totalOrder.emit(total); // emitimos el valor total de la orden
  }
}

