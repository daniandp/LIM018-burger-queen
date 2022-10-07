import { Injectable, EventEmitter } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Menu from './interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {

  constructor(private firestore: Firestore) { }
  addMenu(menu: Menu) {
    const menuRef = collection(this.firestore, 'menu');
    return addDoc(menuRef, menu);
  }

  $conector = new EventEmitter<any>();
  $modal = new EventEmitter<any>();
  $lunchAndDinner = new EventEmitter<any>();
  $totalOrder = new EventEmitter<any>();

}
