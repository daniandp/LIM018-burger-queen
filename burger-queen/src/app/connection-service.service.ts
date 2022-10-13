import { Injectable, EventEmitter } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Order from './interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {

  constructor(private firestore: Firestore) { }
  addOrder(order: Order) {
    const orderRef = collection(this.firestore, 'orderClient');
    return addDoc(orderRef, order);
  }

  getOrder(): Observable<Order[]> {
    const orderRef = collection(this.firestore, 'orderClient'); 
    return collectionData(orderRef, { idField: 'id' }) as Observable<Order[]>;
  }

  changeStatus(order: Order, status:string) {
    const orderRef = doc(this.firestore, `orderClient/${order.id}`);
    return updateDoc(orderRef, {statusOrder: status})
  } 

  deleteOrder(order: Order) {
    const orderRef = doc(this.firestore, `orderClient/${order.id}`);
    return deleteDoc(orderRef);
  }

  $conector = new EventEmitter<any>();
  $modal = new EventEmitter<any>();
  $lunchAndDinner = new EventEmitter<any>();
  $totalOrder = new EventEmitter<any>();
  $navigateViewWaiter = new EventEmitter<any>();
  $addOrderFirebase = new EventEmitter<any>();
  $sendArrOrder = new EventEmitter<any>();
}
