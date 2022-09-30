import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import DataMenu from 'src/assets/menu.json';
import { __param } from 'tslib';


@Component({
  selector: 'app-item-menu-lunch-and-dinner',
  templateUrl: './item-menu-lunch-and-dinner.component.html',
  styleUrls: ['./item-menu-lunch-and-dinner.component.css']
})
export class ItemMenuLunchAndDinnerComponent implements OnInit {
  Menu: any = DataMenu;
  modalSwitch: boolean = false;
  arrOrder: Array<any> = [];
  burgerOptions: any;
  
  constructor(private connector: ConnectionServiceService) { }
  
  ngOnInit(): void { 
    this.connector.$modal.subscribe((valor:any) => {
      this.burgerOptions = valor;
      this.modalSwitch = valor.statusModal;
      // if(this.burgerOptions.product !== 'unselect') {
      //   console.log(this.burgerOptions, 'VALOR MODAL');
      //   this.arrOrder.push({
      //     product: this.burgerOptions.product + ' ' + this.arrOrder.product
      //   })
      // }
    })   
  }

  getElemMenu(param: any) { 
    this.modalSwitch = param.product.startsWith('Hamburguesa')
      this.addItem(param);
    this.connector.$lunchAndDinner.emit(this.arrOrder);
  }
  
  addItem(itemsMenu: any) {
    if(itemsMenu.product.startsWith('Hamburguesa')) {
      console.log('PAPAS FRITAS POR QUE SI');
      
    }
    if(this.arrOrder.some((elem) => elem.product === itemsMenu.product)) {
      this.arrOrder = this.arrOrder.map((elem) => {
        if (elem.product === itemsMenu.product) {
          elem.cont += 1;
          return elem;
        }
        return elem;
      });
    } else {
      this.arrOrder.push({...itemsMenu, cont: 1 });
    }
    console.log(this.arrOrder, 'LA TORRE INCLINADA DE LAS AREPAS');
  }
  }
  // LOGICA 1:
  //traiga item menu (producto precio y cantidad)

  //traiga la info del modal para saber si en caso es hamburguesa simple o doble, el tipo y los adicionales

  //al almacenar en arrOrder debe combinar en producto, lo que trae item menu (hamb simple o doble) + el tipo de hamburguesa
  //que trae el modal y los adicionales. debería quedar (Hamburguesa Simple, Pollo, Queso, Huevo)

  //el precio debería sumarse si tiene adicionales +1 por cada add


  //item menu debe enviar el objeto con la hamburguesa sería {producto: hamburguesa simple, price: 10, cont: 1} 
  // al modal para que el complete la orden


  // LOGICA 2:
  // el modal debe pedirle al mesero que elija las opciones de la hamburguesa que quiere el cliente, concatenando
  // en el producto el tipo y el adicional por ejemplo 'product: Hamburguesa Simple, Vegana, Queso, Huevo' y 
  // debe modificar el precio de acuerdo a la cantidad de adicionales que pida el cliente en el caso de arriba pasaría de 
  // $10 a $12 (10 precio base, 1 queso, 1 huevo)
  // luego el modal debe enviar ese objeto al item menu lunch and dinner para que lo agregue al arrOrder que es el que 
  // se va a mostrar en el viewWaiterOrder