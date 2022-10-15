import { Component, OnInit } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  modalChef: boolean = false;
  pendingOrders: Array<any> = [];
  orderByClient:Array<any> = [];
  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void {
    this.connector.getOrder().subscribe(order => { // OBTENEMOS LA ORDEN DE FIRESTORE
      this.pendingOrders = [];
      order.forEach((elem) => { // MÉTODO PARA MOSTRAR SOLO LAS ORDENES PENDIENTES
        if(elem.statusOrder === 'PENDIENTE') {
          this.pendingOrders.push(elem); //<<< SE ALMACENAN SOLO LAS ORDENES PENDIENTES
        }
      })      
    })
  }

  openModalConfirm(order: any) {
    this.modalChef = true;
    this.orderByClient = order;
  }

  closeModalConfirm() {
    this.modalChef = false;
  }

  async sendOrderReady(order: any) {
    this.modalChef = false;
    const response = await this.connector.changeStatus(order, 'PREPARADO');
  }
}
