import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,/* Input */ } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-client',
  templateUrl: './name-client.component.html',
  styleUrls: ['./name-client.component.css']
})
export class NameClientComponent implements OnInit {
  clientName: string = '';

  constructor(private router: Router) { }

  changeViewWaiter() {
    // Cambio de ruta y capturamos el nombre del cliente
    this.router.navigate(['/menuWaiter'], {queryParams: {client: this.clientName}})
      }

  ngOnInit(): void { }

}
