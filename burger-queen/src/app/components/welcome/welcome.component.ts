import { style } from '@angular/animations';
import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 @ViewChild('waiterBtn') waiter: ElementRef|any;
 
constructor(private renderer2: Renderer2) {
  /*  const btnWaiter =  *//* this.waiter.nativeElement */
  }

  initWaiter(): void {
   const btnWaiter = this.waiter.nativeElement
    console.log('aqui estamos', btnWaiter);
    this.renderer2.setStyle(btnWaiter, 'style', 'background: url("https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png");')

 }


 ngOnInit(): void {
   /* const waiterBtn = document.querySelector('#waiterBtn');
   console.log('estamos aqui', waiterBtn); */
 }
}
