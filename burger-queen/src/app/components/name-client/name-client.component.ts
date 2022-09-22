import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,/* Input */ } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-client',
  templateUrl: './name-client.component.html',
  styleUrls: ['./name-client.component.css']
})
export class NameClientComponent implements OnInit {

  constructor(private router: Router) { }
  clientName: string = '';

  changeViewWaiter() {
    this.router.navigate(['/menuWaiter'], {queryParams: {client: this.clientName}})
    // console.log(this.Menu.breakfast, 'VISTA DEL QUE');
      }

  ngOnInit(): void { }

}
