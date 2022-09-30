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
  //burgerOptions: object = {};

  ngOnInit(): void {
    /* this.connector.$modal.emit('HOLA'); */
   }
  
/*   burgerOptions: object = {
    product: this.select.nativeElement.value,
    egg: this.egg.nativeElement.value,
    cheese: this.cheese.nativeElement.value,
    statusModal: false
  }
   */
  closeModal() {
    const burgerOptions: Object = {
      product: this.select.nativeElement.value,
      egg: this.egg.nativeElement.value,
      cheese: this.cheese.nativeElement.value,
      statusModal: false
    }
    this.connector.$modal.emit(burgerOptions);
  }
  // REVISAR CONEXIÓN DEL BURGER OPTIONS  

}
