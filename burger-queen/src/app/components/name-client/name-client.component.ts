import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, /* Input */ } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionServiceService } from 'src/app/connection-service.service';

@Component({
  selector: 'app-name-client',
  templateUrl: './name-client.component.html',
  styleUrls: ['./name-client.component.css']
})
export class NameClientComponent implements OnInit {
  @ViewChild('nameClient') clientName!:ElementRef
  message: string = '';
  approvalText: string = '';
  /* @Input() clientName: Array<any> = [] */
  /* clientName: string = '' */
 /*  prueba: any = 'flor' */
  constructor(private router: Router, private appService: ConnectionServiceService) { }

  /* ngAfterViewInit() { } */

  changeViewWaiter(/* inputNameValue: string */) {
    this.router.navigateByUrl('/menuWaiter')
      .then(() => {
        this.appService.currentStateName.subscribe((msg: string) => {
          console.log(msg, 'aqui');
          this.message = msg
        })
        this.appService.updateStateName(this.clientName.nativeElement.value);
        console.log(this.clientName.nativeElement.value , 'ACA 2');
        
        
        /* console.log(`View waiter de forma exitosa`) */
        /* this.clientName.nativeElement.value.next(this.message) */
        /* console.log('Nombre en el name client component =>', this.clientName.nativeElement.value);
        this.connection.connectionTrigger.emit({ */
         /*  data: */
         /*  }); */
      })
      .catch((error) => {
        console.log(`Falló el view waiter: ${error.message}`);
      });
  }

  ngOnInit(): void { }

}
