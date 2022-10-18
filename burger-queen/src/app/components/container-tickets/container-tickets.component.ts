import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import Order from 'src/app/interfaces/menu.interface';
@Component({
  selector: 'app-container-tickets',
  templateUrl: './container-tickets.component.html',
  styleUrls: ['./container-tickets.component.css']
})
export class ContainerTicketsComponent implements OnInit {
  deliveredSwitch: boolean = false;
  statusListSwitch: boolean = true;
  modalOrder: boolean = false;
  modalCancelOrder: boolean = false;
  total: number = 0;
  clientName: string = '';
  orderByClient!: Order[]; // MODELO DE MENÚ DE LA INTERFACE
  statusMenu: Array<any> = [];
  filteredStatus: Array<any> = [];
  fullOrder: Array<any> = [];
  @ViewChild('btnDelivered') btnShowDelivered!: ElementRef;
  @ViewChild('btnStatusList') btnStatusList!: ElementRef;

  constructor(private renderer2: Renderer2, private connector: ConnectionServiceService) { }

  ngOnInit(): void { 
    this.connector.getOrder().subscribe(order => { // OBTENEMOS LA ORDEN DE FIRESTORE
      this.filteredStatus = []; // LIMPIAMOS EL ARRAY PARA QUE NO SE DUPLIQUEN AL HACER PUSH  
      // ESTILO DE LOS BOTONES CUANDO SE SELECCIONAN
      const btnDelivered = this.btnShowDelivered.nativeElement;
      const btnStatusOrder = this.btnStatusList.nativeElement;
      this.renderer2.addClass(btnStatusOrder, 'btnSelected');
      this.renderer2.removeClass(btnDelivered, 'btnSelected');
      this.orderByClient = order;
      this.filterOrderStatus();
    })
  }

  // MÉTODO PARA FILTRAR Y ORDENAR LAS ORDENES SEGÚN SI SU ESTADO ES PENDIENTE O PREPARADO
  filterOrderStatus() {
    this.orderByClient.forEach((elem) => {
      if(elem.statusOrder === 'PENDIENTE' || elem.statusOrder === 'PREPARADO') {
        this.filteredStatus.push(elem);
      }
    })
    this.statusMenu = this.filteredStatus.sort(function(a, b){
      if (a.statusOrder > b.statusOrder){
         return -1;
      }else if(b.statusOrder > a.statusOrder){
         return 1;
      }
     
      return 0;
    })
  }

  // MÉTODO PARA MOSTRAR SOLO LAS ORDENES ENTREGADAS
  showDelivered() {
    this.statusMenu = [];
    const btnDelivered = this.btnShowDelivered.nativeElement;
    const btnStatusOrder = this.btnStatusList.nativeElement;
    this.deliveredSwitch = true;
    this.statusListSwitch = false;
    this.renderer2.addClass(btnDelivered, 'btnSelected');
    this.renderer2.removeClass(btnStatusOrder, 'btnSelected');    
    this.orderByClient.forEach((elem) => {
      if(elem.statusOrder === 'ENTREGADO') {
        this.statusMenu.push(elem);
      }
    })
  }

  // MÉTODO PARA MOSTRAR SOLO LAS ORDENES PENDIENTES Y PREPARADAS
  showStatusList() {
    this.filteredStatus = [];
    const btnDelivered = this.btnShowDelivered.nativeElement;
    const btnStatusOrder = this.btnStatusList.nativeElement;
    this.statusListSwitch = true;
    this.deliveredSwitch = false;
    this.renderer2.addClass(btnStatusOrder, 'btnSelected');
    this.renderer2.removeClass(btnDelivered, 'btnSelected');
    this.filterOrderStatus();
  }


  // MÉTODO PARA CAMBIAR EL ESTADO DE UNA ORDEN PREPARADA A ENTREGADA
  async btnDeliveredOrder(order: any) {
    const response = await this.connector.changeStatus(order, 'ENTREGADO');
  }
  
  // MÉTODO PARA ELIMINAR UNA ORDEN PENDIENTE
  async btnDeleteOrder(order: any) {
    const response = await this.connector.deleteOrder(order);
    this.closeModalCancelOrder();
  }

  // MÉTODOS PARA ABRIR Y CERRAR LOS MODALES
  openModalOrder(order: any) { // Muestra el resumen de la orden en el botón de ver
    this.modalOrder = true;
    this.fullOrder = order.fullOrder;
    this.clientName = order.clientName;
    console.log(this.fullOrder, 'FULL ORDER');
    this.total = 0;
    this.fullOrder.forEach((elem) => {
      this.total += elem.subTotal;
    })
  }

  openModalCancelOrder() {
    this.modalCancelOrder = true;
  }

  closeModalOrder() {
    this.modalOrder = false;
  }

  closeModalCancelOrder() {
    this.modalCancelOrder = false;
  }
  
}
