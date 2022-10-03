import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectionServiceService } from '../connection-service.service';

@Component({
  selector: 'app-modal-burgers',
  templateUrl: './modal-burgers.component.html',
  styleUrls: ['./modal-burgers.component.css']
})
export class ModalBurgersComponent implements OnInit {
  constructor(private connector: ConnectionServiceService) { }
  @ViewChild('selectType') select!: ElementRef;
  @ViewChild('addCheese') cheese!: ElementRef;
  @ViewChild('addEgg') egg!: ElementRef;
  burgerOptions: object = {};
  statusModal: boolean = false;
  hamburger: any;

  ngOnInit(): void {
    // this.connector.$lunchAndDinner.subscribe((valor:any) => {
    //   // this.burgerOptions = valor;
    //   // if( valor.product.startsWith('Hamburguesa') ) {
    //     this.hamburger = valor;
    //     console.log(valor, 'HAMBURGUESAAAAAAAAAAAAAAAAAAAAAAAAA'); 
    //   // }
    //   // if(this.burgerOptions.product !== 'unselect') {
    //   //   console.log(this.burgerOptions, 'VALOR MODAL');
    //   //   this.arrOrder.push({
    //   //     product: this.burgerOptions.product + ' ' + this.arrOrder.product
    //   //   })
    //   // }
    // }) 
  }
  

  closeModal() {
 
    if(this.select.nativeElement.value === 'unselect') {
      this.statusModal = true;
    } else {
      this.statusModal = false;
    }
    this.burgerOptions = {
      product:this.select.nativeElement.value,
      egg: this.egg.nativeElement.checked,
      cheese: this.cheese.nativeElement.checked,
      statusModal: this.statusModal
    }
    console.log('BURGER OPTIONS LINEA 48 MODAL', this.burgerOptions);
    
    this.connector.$modal.emit(this.burgerOptions);        
  }
  // REVISAR CONEXIÓN DEL BURGER OPTIONS  
  
}
