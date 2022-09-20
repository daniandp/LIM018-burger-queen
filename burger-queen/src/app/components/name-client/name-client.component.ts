import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-client',
  templateUrl: './name-client.component.html',
  styleUrls: ['./name-client.component.css']
})
export class NameClientComponent implements OnInit {

  constructor(private router: Router) { }

  changeViewWaiter() {
    this.router.navigateByUrl('/menuWaiter')
      .then(() => {
        console.log(`View waiter de forma exitosa`);
      })
      .catch((error) => {
        console.log(`Falló el view waiter: ${error.message}`);
      });
  }

  ngOnInit(): void {
  }

}
