import { ThisReceiver } from '@angular/compiler';
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
          this.pendingOrders.push(elem); //<<< SE ALMACENAN SOLO LAS ORDENES PENDIENTES
          setInterval(this.timerByOrder, 1000);

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

  timerByOrder(orderCreatedAt: any) {
    let currentHour: any = new Date();
    
    let seconds = orderCreatedAt - Date.parse(currentHour) /1000
    console.log(seconds, 'SEGUNDOS');

    let hour: any = Math.floor(seconds / 3600);
    hour = hour < 10 ? '0' + hour : hour;
    let minute: any = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? '0' + minute : minute;
    let second: any = seconds % 60;
    second = second < 10 ? '0' + second : second;
    this.time = hour + ':' + minute + ':' + second;
    return this.time;
    

    /* const orderCreated = orderCreatedAt
    
    function padTo2Digits(num: any) {
      return num.toString().padStart(2, '0');
    } 
    
    window.setInterval(() => {
      const timePassed = new Date().getTime() - parseInt(orderCreated);
      this.seconds = Math.floor(timePassed / 1000);
      console.log(this.seconds, 'SEGUNDOS');
      
      this.minutes = Math.floor( this.seconds / 60);
      this.hours = Math.floor( this.minutes / 60);

      this.seconds =  this.seconds % 60;
      this.minutes =  this.minutes % 60;
      this.hours =  this.hours % 24;
      
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        console.log('if 1');
        
        if ( this.minutes ===60) {
          this.minutes = 0;
          this.hours++;
          console.log('if 2');
        }
      }
     
      this.hours = padTo2Digits( this.hours);
      this.minutes = padTo2Digits( this.minutes);
      this.seconds = padTo2Digits(this.seconds);
      this.seconds++;
      
      console.log( this.seconds, 'SEGUNDOS',  this.minutes, 'MINUTOOS',  this.hours, 'HORAS');

    }, 1000); */
  }
}
