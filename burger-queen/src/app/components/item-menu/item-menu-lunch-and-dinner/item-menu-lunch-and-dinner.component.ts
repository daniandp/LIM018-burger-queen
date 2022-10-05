import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import DataMenu from 'src/assets/menu.json';
import { __param } from 'tslib';


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
  
   newBurger: object =  {
    product: "",
    price: 0,
    cont: 0

  };
  selectValue: undefined;
  
  constructor(private connector: ConnectionServiceService) { }
  
  ngOnInit(): void { }
  
  getElemMenu(param: any) { 
    if (param.product.startsWith('Hamburguesa')) {
      this.modalSwitch = true;
      this.burgerOptions = param;
      console.log(this.burgerOptions,"soy burgerOptions!!!" )
     }
      //this.manageOrder(param);
    this.connector.$lunchAndDinner.emit(this.arrOrder);
  }
  
  addItem(itemsMenu: any) {
    if(!itemsMenu.product.startsWith('Hamburguesa')) {
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
    } else {
      this.connector.$lunchAndDinner.emit(itemsMenu);
    }
  }

  changeSelectValue(event: any) {
    this.selectValue = event.target.value;
  }

  closeModal(itemsMenu: any) {   
    console.log(itemsMenu, "soy itemsmenu") 
    //console.log(this.selectValue, 'CONSTANTE SELECT VALUE');
    
    if(this.selectValue === undefined) {
      this.modalSwitch = true;
    } else {
      this.modalSwitch = false;
      //this.selectValue = undefined; //AQUI HAY UN ERROOOOOOOOOOOOOOOOOR
    }

    if(this.selectValue === "vegan") {
     const prueba = this.burgerOptions.product + " vegana"
     //console.log(this.newBurger, 'producto 75!!!!!! ');
     console.log(prueba, "soy burgerOptions")
    }
   
    /*
    this.burgerOptions = {
      product: this.selectValue, // EL VALOR LLEGA UNDEFINED PORQUE SE LO ESTOY ASIGNANDO EN EL ELSE DE ARRIBA, LINEA 65
      egg: this.egg.nativeElement.checked,
      cheese: this.cheese.nativeElement.checked,
      statusModal: this.modalSwitch
    }
   
    console.log(this.selectValue, 'SELECT VALUE doooos'); // EL VALOR LLEGA UNDEFINED PORQUE SE LO ESTOY ASIGNANDO EN EL ELSE DE ARRIBA, LINEA 65
    console.log(this.burgerOptions.product, 'producto');
    console.log(this.modalSwitch, ' status modallll');
    */
  }

  // manageOrder(itemsMenu: any) {
  //   if (itemsMenu.product.startsWith('Hamburguesa')) {
  //     this.modalSwitch = true;
  //     this.newBurger = {
  //       product: itemsMenu.product /* + ' ' + this.burgerOptions.product */,
  //       price: itemsMenu.price,
  //       cont: 1,
  //     }
  //     this.addItem(this.newBurger);
  //     console.log(this.newBurger, 'MENULND LINEA 44');
  //   } else {
  //     this.addItem(itemsMenu);
  //   }
  // }

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