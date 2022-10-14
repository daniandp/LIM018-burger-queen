export default interface Order {
    id?: string;
    clientName: string;
    totalPrice: number;
    statusOrder: string;
    fullOrder: Array<any>;
    date?: string;
    hour?: string;
}