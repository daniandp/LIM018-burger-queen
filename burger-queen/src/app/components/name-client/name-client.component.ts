import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,/* Input */ } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionServiceService } from 'src/app/connection-service.service';

@Component({
  selector: 'app-name-client',
  templateUrl: './name-client.component.html',
  styleUrls: ['./name-client.component.css']
})
export class NameClientComponent implements OnInit {
  /* @ViewChild('nameClient') */ /* clientName!:ElementRef */
  /* message: string = '';
  approvalText: string = ''; */
  /* @Input() clientName: Array<any> = [] */
  /* clientName: string = '' */
 /*  prueba: any = 'flor' */
  constructor(private router: Router) { }
  clientName: string = '';
  /* ngAfterViewInit() { } */

  changeViewWaiter() {
    this.router.navigate(['/menuWaiter'], {queryParams: {data: this.clientName}})
    console.log(this.clientName, 'VISTA DEL QUE');
    
/*         this.serviceConnection.sendNameClient(clientName)
        console.log(clientName, '==> NOMBRE DEL CLIENTE'); */
        
        /* console.log(`View waiter de forma exitosa`) */
        /* this.clientName.nativeElement.value.next(this.message) */
        /* console.log('Nombre en el name client component =>', this.clientName.nativeElement.value);
        this.connection.connectionTrigger.emit({ */
         /*  data: */
         /*  }); */
      }

  ngOnInit(): void { }

}
