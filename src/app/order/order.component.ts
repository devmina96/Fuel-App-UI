import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'fd-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

@Injectable()
export class OrderComponent implements OnInit {
  ImagePath: string;
  order = new Order()
  
  constructor(private http:HttpClient, private service:OrderService) { 
    this.ImagePath = '/assets/images/1.jpg'
  }
  postid: any;
  ngOnInit(): void {
  }

  submitOrder(orderDetails: {Id: number, FualType: string, Capacity: string}){
    console.log(orderDetails)
    // this.http.post("http://localhost:8181/kafka/order", orderDetails, {responseType:'text' as 'json'})
    // .subscribe((res)=>{
    //   console.log(res);
    //   if(res=="Success"){
    //       this.postid = "Your Order is placed. Check Inquiry to get the details later."
    //   }
    //   else{
    //     this.postid = "Your order is faild. Try again."
    //   }
    // });
  }

  placeOrder(){
    this.service.PlacetheFuelOrder(this.order)
  }

  submitForm(nameInput: HTMLInputElement) {
    const formData = {
      name: nameInput.value,
      // email: emailInput.value
    };
    console.log(formData);
  }


}
