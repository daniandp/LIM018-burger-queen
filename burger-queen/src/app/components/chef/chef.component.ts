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
      this.pendingOrdersToFilter = []; // LIMPIAMOS EL ARRAY PARA QUE NO SE DUPLIQUEN AL HACER PUSH  
      order.forEach((elem) => { // MÉTODO PARA MOSTRAR SOLO LAS ORDENES PENDIENTES
        if(elem.statusOrder === 'PENDIENTE') {
          this.pendingOrdersToFilter.push(elem); //<<< SE ALMACENAN SOLO LAS ORDENES PENDIENTES
          setInterval(this.timerByOrder, 1000)
        }
      })
      this.showByOrder(order);        
    })
  }


  // MÉTODOS PARA ABRIR Y CERRAR MODALES PARA CONFIRMAR LA ENTREGA DE LA ORDEN
  openModalConfirm(order: any) {
    this.modalChef = true;
    this.orderByClient = order;
  }

  closeModalConfirm() {
    this.modalChef = false;
  }

  // MÉTODO PARA CAMBIAR STATUS DE LA ORDEN A PREPARARADO
  async sendOrderReady(order: any) {
    this.modalChef = false;
    const response = await this.connector.changeStatus(order, 'PREPARADO');
  }


  // MÉTODO PARA EL TIMER DE LAS ORDENES
  timerByOrder(orderCreatedAt: any) {
    this.seconds = Math.floor((new Date().getTime() - orderCreatedAt)/1000); // DIFERENCIA ENTRE HORA ACTUAL Y LA HORA EN QUE SE CREÓ LA ORDEN
    this.seconds++;
    let hrs = Math.floor(this.seconds/3600); // CANTIDAD DE HORAS(MATH FLOOR REDONDEA HACIA ABAJO, NO TRAE DECIMALES)
    let mins = Math.floor((this.seconds - (hrs * 3600))/60); // A LOS SEGUNDOS SE LE RESTA LA CANTIDAD DE HORAS EN SEGUNDOS Y LA DIFERENCIA SE DIVIDE ENTRE 60
    let secs = this.seconds % 60; // EL RECIDUO DE LA DIVISIÓN DE LOS SEGUNDOS ENTRE 60 
    return hrs + ':' + mins + ':' + secs;
  }

  // MÉTODO PARA ORDENAR LOS PEDIDOS POR HORA Y FECHA DE CREACIÓN, SE MUESTRAN PRIMERO LOS MÁS ANTIGUOS 
  showByOrder(order: any) {
    this.pendingOrders = this.pendingOrdersToFilter.sort(function (a, b) {
        if (a.createdAt > b.createdAt){
          return 1;
       }else if(b.createdAt > a.createdAt){
          return -1;
       }
    
     return 0;
   })

 }

}
