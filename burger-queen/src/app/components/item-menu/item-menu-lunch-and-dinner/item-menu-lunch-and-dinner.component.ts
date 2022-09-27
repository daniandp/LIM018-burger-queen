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
  
  constructor(private showModal: ConnectionServiceService) { }
  
  ngOnInit(): void { 

    this.showModal.$conector.subscribe((valor:any) => {
      this.modalSwitch = valor;
    })

  }
  openModal() {
    // if (this.Menu.lunchAndDinner.product.startsWith('Hamburguesa')) {
      this.modalSwitch = true;
    // }
  }

  }
