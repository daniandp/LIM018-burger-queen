import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import { NameClientComponent } from '../name-client/name-client.component';


@Component({
  selector: 'app-view-waiter-order',
  templateUrl: './view-waiter-order.component.html',
  styleUrls: ['./view-waiter-order.component.css']
})
export class ViewWaiterOrderComponent implements OnInit {
  message: string = '';
  /* prueba:any =  */
  componentNameClient: any = NameClientComponent
  
  constructor(private appService: ConnectionServiceService) { }

 /*  ngAfterViewInit() { } */
  
  ngOnInit(): void {
    console.log('Nombre en el view waiter component =>', this.appService.currentStateName.subscribe ((msg:string) => this.message = msg ));
   /*  this.connection.connectionTrigger.subscribe(data => {
      console.log('Recibiendo data...', data);
    }) */
  }

}
