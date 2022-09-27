import { Component, OnInit } from '@angular/core';
import { ConnectionServiceService } from '../connection-service.service';

@Component({
  selector: 'app-modal-burgers',
  templateUrl: './modal-burgers.component.html',
  styleUrls: ['./modal-burgers.component.css']
})
export class ModalBurgersComponent implements OnInit {

  constructor(private showModal: ConnectionServiceService) { }

  ngOnInit(): void { }
  
  closeModal() {
    this.showModal.$conector.emit(false);
  }

}
