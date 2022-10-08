export class sendArrOrder {
    clientName: string;
    totalPrice: number;
    status: string;
    arrOrder: Array<any>;
    
    constructor(clientName: string, totalPrice: number, status: string, arrOrder: Array<any>) {
        this.clientName = clientName;
        this.totalPrice = totalPrice;
        this.status = status;
        this.arrOrder = arrOrder;
     }
  
   }