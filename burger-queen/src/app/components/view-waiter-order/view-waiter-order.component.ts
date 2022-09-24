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
  modalSwitch: boolean = false;
  
  constructor(private router: ActivatedRoute, private showModal: ConnectionServiceService) { }
  
  ngOnInit(): void {
    this.router.queryParams.subscribe((params: any) => {
      this.clientName = params.client;
      console.log('CLIENTE ', this.clientName = params.client);
    })

    this.showModal.$modal.subscribe((valor:any) => {
      this.modalSwitch = valor;
    })

  }

}
