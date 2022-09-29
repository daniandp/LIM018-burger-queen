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
  
  constructor(private connector: ConnectionServiceService) { }
  
  ngOnInit(): void { 

    this.connector.$conector.subscribe((valor:any) => {
      this.modalSwitch = valor.statusModal;
    })

  }
  openModal(param: any) {
    if (param.product.startsWith('Hamburguesa')) {
      this.modalSwitch = true;
    }
  }
  }
