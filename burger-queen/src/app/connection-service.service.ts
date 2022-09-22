import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import Menu from './interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {
  // private subject = new Subject<string>();
  /*  @Output() connectionTrigger: EventEmitter<any> = new EventEmitter(); */
  
  /* private stateName = new BehaviorSubject<string>('Client');
  currentStateName = this.stateName.asObservable();
   */
  constructor(private firestore: Firestore) { }
  addMenu(menu: Menu) {
    const menuRef = collection(this.firestore, 'menu');
    return addDoc(menuRef, menu);
  }
  /* updateStateName(message: string) {
    this.stateName.next(message);
  } */

}
