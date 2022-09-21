import { Component, OnInit } from '@angular/core';
import DataMenu from 'src/assets/menu.json';

@Component({
  selector: 'app-item-menu-lunch-and-dinner',
  templateUrl: './item-menu-lunch-and-dinner.component.html',
  styleUrls: ['./item-menu-lunch-and-dinner.component.css']
})
export class ItemMenuLunchAndDinnerComponent implements OnInit {
  Menu: any = DataMenu.lunchAndDinner.hamburguers;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  }