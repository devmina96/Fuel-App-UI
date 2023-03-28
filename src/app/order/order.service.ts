import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient, private router: Router,  private route: ActivatedRoute) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('jwt')!).jwt}`
    })
  };

  public PlacetheFuelOrder(order: Order){
    
  
      this.http.post("http://localhost:8181/order", order, this.httpOptions)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['../main-page'], { relativeTo: this.route });
      }
      })
      
  }
}
