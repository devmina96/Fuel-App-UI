import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  public PlacetheFuelOrder(order: Order){
      console.log(order)
  }
}
