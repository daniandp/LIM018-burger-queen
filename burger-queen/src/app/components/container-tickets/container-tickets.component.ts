import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';

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

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {}

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
