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

  ngOnInit(): void { }
  

  closeModal() {
    if(this.select.nativeElement.value === 'unselect') {
      this.statusModal = true;
    } else {
      this.statusModal = false;
    }
    this.burgerOptions = {
      product: this.select.nativeElement.value,
      egg: this.egg.nativeElement.checked,
      cheese: this.cheese.nativeElement.checked,
      statusModal: this.statusModal
    }
    this.connector.$modal.emit(this.burgerOptions);        
  }
  // REVISAR CONEXIÓN DEL BURGER OPTIONS  

}
