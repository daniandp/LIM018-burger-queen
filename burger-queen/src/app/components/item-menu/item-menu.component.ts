import { Component, OnInit } from '@angular/core';
import DataMenu from 'src/assets/menu.json';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
  Menu: any = DataMenu;

  constructor() { }

  ngOnInit(): void {

  }

}
