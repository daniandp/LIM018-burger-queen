import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionServiceService } from 'src/app/connection-service.service';
import { NameClientComponent } from '../name-client/name-client.component';


@Component({
  selector: 'app-view-waiter-order',
  templateUrl: './view-waiter-order.component.html',
  styleUrls: ['./view-waiter-order.component.css']
})
export class ViewWaiterOrderComponent implements OnInit {
  clientName: string = '';
  /* prueba:any =  */
 /*  componentNameClient: any = NameClientComponent */
  
  constructor(private router: ActivatedRoute) { }

  /* ngAfterViewInit() { } */
  
  ngOnInit(): void {
    this.router.queryParams.subscribe((params: any) => {
      this.clientName = params.data;
      console.log('CLIENTE ', this.clientName = params.data);
      
    })
/*     this.serviceConnection.receivedNameClient().subscribe((data) => {
      this.clientName = data;
      console.log(data, '==> nombre del cliente en VISTA MESERO');
    })
 */ /*    console.log('Nombre en el view waiter component =>', this.appService.currentStateName.subscribe ((msg:string) => this.message = msg )); */
   /*  this.connection.connectionTrigger.subscribe(data => {
      console.log('Recibiendo data...', data);
    }) */
  }

}
