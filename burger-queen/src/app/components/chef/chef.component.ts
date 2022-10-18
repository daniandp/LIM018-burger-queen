import { Component, OnInit } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  modalChef: boolean = false;
  pendingOrdersToFilter: Array<any> = [];
  pendingOrders: Array<any> = [];
  orderByClient: Array<any> = [];
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  time: string = '';
  constructor(private connector: ConnectionServiceService) { }

  ngOnInit(): void {
    this.connector.getOrder().subscribe(order => { // OBTENEMOS LA ORDEN DE FIRESTORE
      this.pendingOrders = [];
      order.forEach((elem) => { // MÉTODO PARA MOSTRAR SOLO LAS ORDENES PENDIENTES
        if(elem.statusOrder === 'PENDIENTE') {
          this.pendingOrdersToFilter.push(elem); //<<< SE ALMACENAN SOLO LAS ORDENES PENDIENTES
          setInterval(this.timerByOrder, 1000)
        }
      })
      this.showByOrder(order);        
    })
  }

  showByOrder(order: any) {
     this.pendingOrders = this.pendingOrdersToFilter.sort(function(a, b){
      if (a.createdAt > b.createdAt){
         return 1;
      }else if(b.createdAt > a.createdAt){
         return -1;
      }
     
      return 0;
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

  timerByOrder(orderCreatedAt: any) {
    this.seconds = Math.floor((new Date().getTime() - orderCreatedAt)/1000);
    this.seconds++;
    let hrs = Math.floor(this.seconds/3600);
    let mins = Math.floor((this.seconds - (hrs * 3600))/60); 
    let secs = this.seconds % 60;
    return hrs+':'+mins+':'+secs;
  }
}
