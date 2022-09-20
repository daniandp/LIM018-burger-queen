import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {
  /*  @Output() connectionTrigger: EventEmitter<any> = new EventEmitter(); */
  
  private stateName = new BehaviorSubject('Flor');
  currentStateName = this.stateName.asObservable();
  
  constructor() { }

  updateStateName(message: string) {
    this.stateName.next(message);
  }

}
