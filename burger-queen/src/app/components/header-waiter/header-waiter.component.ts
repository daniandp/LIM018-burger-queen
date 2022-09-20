import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameClientComponent } from '../name-client/name-client.component'

@Component({
  selector: 'app-header-waiter',
  templateUrl: './header-waiter.component.html',
  styleUrls: ['./header-waiter.component.css'] 
})
export class HeaderWaiterComponent implements OnInit {
 
  constructor(private router: Router) { }
  
  returnToWelcome() {
    this.router.navigateByUrl('/welcome')
      .then(() => {
        console.log(`Regresamos al welcome de forma exitosa`);
      })
      .catch((error) => {
        console.log(`Falló el regreso al welcome: ${error.message}`);
      });
  }

  getNameClient() {
    const nameClient = document.querySelector('#nameClient') as HTMLInputElement;
    console.log(nameClient);
    
  }

  ngOnInit(): void {
    
  }

}
