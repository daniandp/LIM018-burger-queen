import { Component, OnInit, ViewChild, ElementRef, Injectable, Input } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import DataMenu from 'src/assets/menu.json';
import { newBurger } from '../../models/newBurger';

@Component({
  selector: 'app-item-menu-lunch-and-dinner',
  templateUrl: './item-menu-lunch-and-dinner.component.html',
  styleUrls: ['./item-menu-lunch-and-dinner.component.css']
})


export class ItemMenuLunchAndDinnerComponent implements OnInit {
  @ViewChild('selectType') select!: ElementRef;
  @ViewChild('addCheese') cheese!: ElementRef;
  @ViewChild('addEgg') egg!: ElementRef;
  @ViewChild('btnAceptModal') btnModal!: ElementRef;
  Menu: any = DataMenu;
  modalSwitch: boolean = false;
  arrOrder: Array<any> = [];
  burgerOptions: any;
  selectValue: undefined;
  cheeseValue: string = '';
  eggValue: string = '';
  hamburger: any;

  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void { }

  getElemMenu(param: any) {
    if (param.product.startsWith('Hamburguesa')) {
      this.modalSwitch = true;
      this.burgerOptions = param;
      console.log(this.burgerOptions, "soy burgerOptions!!!")
      this.selectValue = undefined;
    } else {
      this.addItem(param);
    }
    // this.manageOrder(param);
    this.connector.$lunchAndDinner.emit(this.arrOrder);
  }

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
    this.connector.$lunchAndDinner.emit(itemsMenu);
  }

  changeSelectValue(event: any) {
    this.selectValue = event.target.value;
  }

  changeCheckboxCheese(event: any) {
    this.cheeseValue = event.target.checked;
  }

  changeCheckboxEgg(event: any) {
    this.eggValue = event.target.checked;
  }

  closeModal(itemsMenu: any) {
    console.log(itemsMenu, "soy itemsmenu")

    if (this.selectValue === undefined) {
      this.modalSwitch = true;
    } else {
      this.modalSwitch = false;
    }

    if (this.cheeseValue && !this.eggValue) {
      this.hamburger = new newBurger(
        this.burgerOptions.product + ' de ' + this.selectValue + ' + Queso',
        this.burgerOptions.price + 1,
        1
      )
      console.log(this.hamburger, "soy burgerOptions HAMBURGUESA CON QUESO");

    } else if (this.eggValue && !this.cheeseValue) {
      this.hamburger = new newBurger(
        this.burgerOptions.product + ' de ' + this.selectValue + ' + Huevo',
        this.burgerOptions.price + 1,
        1
      )
      console.log(this.hamburger, "soy burgerOptions HAMBURGUESA CON HUEVOOOOOOO");

    } else if (this.cheeseValue && this.eggValue) {
      this.hamburger = new newBurger(
        this.burgerOptions.product + ' de ' + this.selectValue + ' + Queso + Huevo',
        this.burgerOptions.price + 2,
        1
      )
      console.log(this.hamburger, "soy burgerOptions HAMBURGUESA CON HUEVOOOOOOO y quesooooooo");
    } else {
      this.hamburger = new newBurger(
        this.burgerOptions.product + ' de ' + this.selectValue,
        this.burgerOptions.price,
        1
      )
      this.addItem(this.hamburger);
      console.log(this.hamburger, "soy burgerOptions HAMBURGUESA SIN ADD");
    }

  }

  /* manageOrder(itemsMenu: any) {
    if (itemsMenu.product.startsWith('Hamburguesa')) {
      this.addItem(this.hamburger);
      console.log(this.hamburger, 'NEW BURGER');

    } else {
      this.addItem(itemsMenu);
    }
  } */

}
