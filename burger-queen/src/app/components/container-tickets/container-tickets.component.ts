import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
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
  @ViewChild('btnDelivered') btnShowDelivered!: ElementRef
  @ViewChild('btnStatusList') btnStatusList!: ElementRef
  menu!: Menu[];

  constructor(private renderer2: Renderer2, private connector: ConnectionServiceService) { 
    this.menu = [
      {
        clientName: 'pedro',
        totalPrice: 10,
        statusOrder: 'PENDIENTE',
        fullOrder: [],
        
      }
    ]
  }

  ngOnInit(): void {
    this.connector.getOrder().subscribe(menu => {
      this.menu = menu;
      console.log(this.menu, 'MENUUUUUU');
      
    }) 
  }

  showDelivered() {
    const btnDelivered = this.btnShowDelivered.nativeElement
    const btnStatusOrder = this.btnStatusList.nativeElement
    this.deliveredSwitch = true;
    this.statusListSwitch = false;
    this.renderer2.addClass(btnDelivered, 'btnSelected');
    this.renderer2.removeClass(btnStatusOrder, 'btnSelected');
  }
  
  showStatusList() {
    const btnDelivered = this.btnShowDelivered.nativeElement
    const btnStatusOrder = this.btnStatusList.nativeElement
    this.statusListSwitch = true;
    this.deliveredSwitch = false;
    this.renderer2.addClass(btnStatusOrder, 'btnSelected');
    this.renderer2.removeClass(btnDelivered, 'btnSelected');
}

}
