import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 /* @ViewChild('waiterBtn') waiter: HTMLButtonElement; */
 
  constructor(private router: Router) { }
  

  changeViewClientName() {
    this.router.navigateByUrl('/nameClient')
      .then(() => {
        console.log(`Navegación exitosa al client name`);
      })
      .catch((error) => {
        console.log(`Falló la navegación al client name: ${error.message}`);
      });
  }


 /*  initWaiter(): void {
   const btnWaiter = this.waiter.nativeElement
    console.log('aqui estamos', btnWaiter);
    this.renderer2.setStyle(btnWaiter, 'style', 'background: url("https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png")')
    
 } */


 ngOnInit(): void {
   /* const waiterBtn = document.querySelector('#waiterBtn');
   console.log('estamos aqui', waiterBtn); */
 }
}
