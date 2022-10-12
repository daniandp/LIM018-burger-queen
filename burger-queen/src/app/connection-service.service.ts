import { Injectable, EventEmitter } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Menu from './interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {

  constructor(private firestore: Firestore) { }
  addOrder(order: Menu) {
    const orderRef = collection(this.firestore, 'orderClient');
    return addDoc(orderRef, order);
  }

  getOrder(): Observable<Menu[]> {
    const orderRef = collection(this.firestore, 'orderClient');
    return collectionData(orderRef, { idField: 'id' }) as Observable<Menu[]>;
  }
  // getUsername(){
  //   this.db.getUsername(someUID).subscribe(
  //     (data) => this.username = data.exists ? data.data().username : undefined
  //   }
  // }
  $conector = new EventEmitter<any>();
  $modal = new EventEmitter<any>();
  $lunchAndDinner = new EventEmitter<any>();
  $totalOrder = new EventEmitter<any>();
  $navigateViewWaiter = new EventEmitter<any>();
  $addOrderFirebase = new EventEmitter<any>();
  $sendArrOrder = new EventEmitter<any>();
}
