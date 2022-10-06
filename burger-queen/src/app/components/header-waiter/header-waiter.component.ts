import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-waiter',
  templateUrl: './header-waiter.component.html',
  styleUrls: ['./header-waiter.component.css'] 
})
export class HeaderWaiterComponent implements OnInit {
 
  constructor(private router: Router) { }
  
  // retorna la ruta a welcome
  returnToWelcome() {
    this.router.navigate(['/welcome']);
  }

  ngOnInit(): void { }

}
