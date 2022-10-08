import { Injectable, EventEmitter } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Menu from './interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {

  constructor(private firestore: Firestore) { }
  addOrder(order: any) {
    const orderRef = collection(this.firestore, 'orderClient');
    return addDoc(orderRef, order);
  }

  $conector = new EventEmitter<any>();
  $modal = new EventEmitter<any>();
  $lunchAndDinner = new EventEmitter<any>();
  $totalOrder = new EventEmitter<any>();
  $navigateViewWaiter = new EventEmitter<any>();
  $addOrderFirebase = new EventEmitter<any>();
  $sendArrOrder = new EventEmitter<any>();
}
