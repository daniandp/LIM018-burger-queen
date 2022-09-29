import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import DataMenu from 'src/assets/menu.json';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
  Menu: any = DataMenu;
  @ViewChild('product') productName!: ElementRef;
  @ViewChild('price') priceTag!: ElementRef;
  itemBillSwitch: boolean = false;
  arrOrder: Array<any> = [];
  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void { }
  
  getElemMenu(param: any) {
    const itemsMenu = {
      product : param.product,
      price: param.price,
      cont: 1
    }    
    this.addItem(param);
  }

  addItem(itemsMenu: any){
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
    this.connector.$conector.emit(this.arrOrder);
  }
}
