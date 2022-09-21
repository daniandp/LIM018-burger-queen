import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {
  private subject = new Subject<string>();
  /*  @Output() connectionTrigger: EventEmitter<any> = new EventEmitter(); */
  
  /* private stateName = new BehaviorSubject<string>('Client');
  currentStateName = this.stateName.asObservable();
   */
  constructor() { }

  sendNameClient(clientName:string) {
    this.subject.next(clientName);
  }

  receivedNameClient(): Observable<string> {
    return this.subject.asObservable();
  }

  /* updateStateName(message: string) {
    this.stateName.next(message);
  } */

}
