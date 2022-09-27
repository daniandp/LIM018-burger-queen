import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectionServiceService } from 'src/app/connection-service.service';

@Component({
  selector: 'app-item-bill',
  templateUrl: './item-bill.component.html',
  styleUrls: ['./item-bill.component.css']
})
export class ItemBillComponent implements OnInit {
  @ViewChild('itemName') itName!: ElementRef;
  @ViewChild('itemPrice') itPrice!: ElementRef;

  constructor(private getItemMenu: ConnectionServiceService) { }

  ngOnInit(): void {
    this.getItemMenu.$conector.subscribe((valor:any) => {
  this.itName.nativeElement.textContent = valor.product;
    })
    this.getItemMenu.$conector.subscribe((valor:any) => {
      this.itPrice.nativeElement.textContent = valor.price;
        }) 
  }

}
