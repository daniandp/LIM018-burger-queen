import { Component, OnInit, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import Menu from 'src/app/interfaces/menu.interface';
@Component({
  selector: 'app-container-tickets',
  templateUrl: './container-tickets.component.html',
  styleUrls: ['./container-tickets.component.css']
})
export class ContainerTicketsComponent implements OnInit {
  deliveredSwitch: boolean = false;
  statusListSwitch: boolean = true;
  @ViewChild('btnDelivered') btnShowDelivered!: ElementRef;
  @ViewChild('btnStatusList') btnStatusList!: ElementRef;
  menu!: Menu[];
  statusMenu: Array<any> = [];
  filteredStatus: Array<any> = [];

  constructor(private renderer2: Renderer2, private connector: ConnectionServiceService) { 
    this.menu = [
      {
        clientName: 'Cliente',
        totalPrice: 10,
        statusOrder: 'Estado Orden',
        fullOrder: [],
        
      }
    ]
  }

  ngOnInit(): void {
    this.connector.getOrder().subscribe(menu => {
      const btnDelivered = this.btnShowDelivered.nativeElement
      const btnStatusOrder = this.btnStatusList.nativeElement
      this.renderer2.addClass(btnStatusOrder, 'btnSelected');
      this.renderer2.removeClass(btnDelivered, 'btnSelected');
      this.menu = menu;
      this.menu.forEach((elem) => {
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
    })
    console.log(this.menu, 'MENU DE LA 55');
    
  }

  showDelivered() {
    this.statusMenu = [];
    const btnDelivered = this.btnShowDelivered.nativeElement;
    const btnStatusOrder = this.btnStatusList.nativeElement;
    this.deliveredSwitch = true;
    this.statusListSwitch = false;
    this.renderer2.addClass(btnDelivered, 'btnSelected');
    this.renderer2.removeClass(btnStatusOrder, 'btnSelected');    
    this.menu.forEach((elem) => {
      if(elem.statusOrder === 'ENTREGADO') {
        this.statusMenu.push(elem);
      }
    })
    console.log(this.statusMenu, 'ARRAY DE ORDENES ENTREGADAS ');
  }
  
  showStatusList() {
    this.filteredStatus = [];
    const btnDelivered = this.btnShowDelivered.nativeElement
    const btnStatusOrder = this.btnStatusList.nativeElement
    this.statusListSwitch = true;
    this.deliveredSwitch = false;
    this.renderer2.addClass(btnStatusOrder, 'btnSelected');
    this.renderer2.removeClass(btnDelivered, 'btnSelected');
    this.menu.forEach((elem) => {
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
    console.log(this.statusMenu, "filtradosss!!")
    // Métodoconsole.log(this.statusMenu, 'ARRAY DE ORDENES PENDIENTES');
}
  btnDeliveredOrder(order: any) {
    order = 'ENTREGADO';
    console.log(order, 'LOG DE ORDER EN LA 99');
    
   return order = 'ENTREGADO';
  }
}
