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
  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void { }
  
  getElemMenu(param: any) {
    console.log(param);
    
    const itemsMenu = {
      product : param.product,
      price: param.price,
      itemBill: true,
    }
    this.connector.$conector.emit(itemsMenu)
   

    
  }
}
