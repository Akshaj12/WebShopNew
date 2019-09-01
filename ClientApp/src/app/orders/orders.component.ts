import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

 

  public orders: Order[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Order[]>(baseUrl + 'api/orders').subscribe(result => {
      this.orders = result;
      console.log(result);
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

export interface Order{
  id: number,
    status: string,
    deliveryAddress: string,
    billingAddress: string,
    orderTime: string,
    products:null
        
  //date: string;
  //temperatureC: number;
  //temperatureF: number;
  //summary: string;
}
