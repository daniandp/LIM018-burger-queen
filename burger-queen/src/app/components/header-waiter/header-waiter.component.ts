import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-waiter',
  templateUrl: './header-waiter.component.html',
  styleUrls: ['./header-waiter.component.css'] 
})
export class HeaderWaiterComponent implements OnInit {
 
  constructor(private router: Router) { }
  
  returnToWelcome() {
    this.router.navigate(['/welcome']);

  }

  getNameClient() {
    const nameClient = document.querySelector('#nameClient') as HTMLInputElement;
    console.log(nameClient);
    
  }

  ngOnInit(): void {
    
  }

}
