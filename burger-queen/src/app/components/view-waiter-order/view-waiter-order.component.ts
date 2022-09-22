import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NameClientComponent } from '../name-client/name-client.component';


@Component({
  selector: 'app-view-waiter-order',
  templateUrl: './view-waiter-order.component.html',
  styleUrls: ['./view-waiter-order.component.css']
})
export class ViewWaiterOrderComponent implements OnInit {
  clientName: string = '';
  
  constructor(private router: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.router.queryParams.subscribe((params: any) => {
      this.clientName = params.client;
      console.log('CLIENTE ', this.clientName = params.client);
    })

  }

}
