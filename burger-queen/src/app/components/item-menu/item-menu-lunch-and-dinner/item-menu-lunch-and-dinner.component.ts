import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import DataMenu from 'src/assets/menu.json';


@Component({
  selector: 'app-item-menu-lunch-and-dinner',
  templateUrl: './item-menu-lunch-and-dinner.component.html',
  styleUrls: ['./item-menu-lunch-and-dinner.component.css']
})
export class ItemMenuLunchAndDinnerComponent implements OnInit {
  Menu: any = DataMenu;
  modalSwitch: boolean = false;
  arrOrder: Array<any> = [];
  burgerOptions: object = {};
  
  constructor(private connector: ConnectionServiceService) { }
  
  ngOnInit(): void { 
    this.connector.$modal.subscribe((valor:any) => {
      this.burgerOptions = valor;
      this.modalSwitch = valor.statusModal;  
      console.log(valor, 'VALOR MODAL');
    })   
  }

  /* ngAfterViewInit(): void {
    this.connector.$conector.subscribe((valor) => {
      this.burgerOptions = valor;
      this.modalSwitch = valor.statusModal;  
      console.log(valor, 'VALOR MODAL');
    })   
  } */

  getElemMenu(param: any) { 
    this.modalSwitch = param.product.startsWith('Hamburguesa')
    if (this.modalSwitch === true) {
      this.addItem(param);
    }
    this.connector.$conector.emit(this.arrOrder);
  }
  
 /*  openModal(param: any) {    
    if (param.product.startsWith('Hamburguesa')) {
      this.modalSwitch = true;
    }
  } */

  addItem(itemsMenu: any) {
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
