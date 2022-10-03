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
  arrOrder: Array<any> = [];
  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void { }
  
  getElemMenu(param: any) { 
    this.addItem(param);
    this.connector.$conector.emit(this.arrOrder);
  }

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
  }
}
