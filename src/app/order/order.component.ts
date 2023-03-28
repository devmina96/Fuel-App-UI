import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'fd-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
@Injectable()
export class OrderComponent implements OnInit {
  ImagePath: string;
  order = new Order();

  constructor(private http: HttpClient, private service: OrderService) {
    this.ImagePath = '/assets/images/1.jpg';
  }
  postid: any;
  ngOnInit(): void {}

  placeOrder() {
    this.service.PlacetheFuelOrder(this.order);
  }

  submitForm(nameInput: HTMLInputElement) {
    const formData = {
      name: nameInput.value,
      // email: emailInput.value
    };
    console.log(formData);
  }
}
