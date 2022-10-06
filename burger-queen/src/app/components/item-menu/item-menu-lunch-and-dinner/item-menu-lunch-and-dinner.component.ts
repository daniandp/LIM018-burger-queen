import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  Menu: any = DataMenu; // Menú Json
  modalSwitch: boolean = false;
  arrOrder: Array<any> = [];
  burgerOptions: any;
  selectValue: undefined;
  cheeseValue: string = '';
  eggValue: string = '';
  hamburger: any;

  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void { }


  // Método que está en el botón de agregar y agrega items diferentes a la hamburguesa
  getElemMenu(param: any) { // Param es cualquier item del menú 
    if (param.product.startsWith('Hamburguesa')) {
      this.modalSwitch = true; // Abre el modal
      this.burgerOptions = param; // almacenamos los valores del menú en una variable
      this.selectValue = undefined; // Reinicia el valor del select cada vez que se da agregar(evita el cierre del modal)
    } else {
      this.addItem(param);
    }
    this.connector.$lunchAndDinner.emit(this.arrOrder);
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
 } 

  // Método para escuchar el cambio de opciones en el select
  changeSelectValue(event: any) {
    this.selectValue = event.target.value;
  }


  // Método para escuchar la selección del checkbox queso
  changeCheckboxCheese(event: any) {
    this.cheeseValue = event.target.checked;
  }

  // Método para escuchar la selección del checkbox huevo
  changeCheckboxEgg(event: any) {
    this.eggValue = event.target.checked;
  }


  // Método para cerrar el modal y capturar los datos seleccionados y enviarlo a addItem
  closeModal() {
    // Si el valor es undefines el modal permanece abierto, si no se cierra
    if (this.selectValue === undefined) {
      this.modalSwitch = true;
    } else {
      this.modalSwitch = false;
    }
    // Si se selecciona queso
    if (this.cheeseValue && !this.eggValue) {
      this.hamburger = new newBurger(
        this.burgerOptions.product + ' de ' + this.selectValue + ' + Queso',
        this.burgerOptions.price + 1,
        1
      )

    // Si se selecciona huevo
    } else if (this.eggValue && !this.cheeseValue) {
      this.hamburger = new newBurger(
        this.burgerOptions.product + ' de ' + this.selectValue + ' + Huevo',
        this.burgerOptions.price + 1,
        1
      )

    // Si se selecciona queso y huevo
    } else if (this.cheeseValue && this.eggValue) {
      this.hamburger = new newBurger(
        this.burgerOptions.product + ' de ' + this.selectValue + ' + Queso + Huevo',
        this.burgerOptions.price + 2,
        1
      )
    } else {
      // Si no se selecciona ningún adicional 
      this.hamburger = new newBurger(
        this.burgerOptions.product + ' de ' + this.selectValue,
        this.burgerOptions.price,
        1
      )
    }
    // enviamos el objeto de la hamburguesa a addItem
    this.addItem(this.hamburger);
    this.cheeseValue = ''
    this.eggValue = ''
  }
}

// COSAS QUE NOS FALTAN

// El total de cada item
// El total de toda la orden
// Mezclar los menús
// Poder agregar items
// Poder eliminar items
// Conectar con firebase

