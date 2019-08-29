import { Injectable, Inject} from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: CartItem[] = [];
    formData: OrdersComponent;
    rootURL;
    order: Order;
    addToCart(product) {
        this.items.push(product);
        console.log(this.items);
    } 
        
    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
    }

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    parentCateogeryId : number,
}
//export interface Customer {
//    id: number,
//    name: string,
   
//}
export interface CartItem {
    product: Product,
    //customer: Customer,
    quantity: number,

}
interface Order {
    Id: number;
    Status: string;
     DeliveryAddress: string;
    BillingAddress: string;
    OrderTime: string;
}

export class Orders {
    Id: number;
    Status: string;
    DeliveryAddress: string;
    BillingAddress: string;
    OrderTime: string;

    constructor(public id: number,
        public status: string,
        public deliveryAddress: string,
        public billingAddress: string,
        public orderTime: string) {

        this.Id = id;
        this.Status = status;
        this.DeliveryAddress = deliveryAddress;
        this.BillingAddress = billingAddress;
        this.OrderTime = orderTime;
    }

    
}


