import { Injectable } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: CartItem[] = [];
    formData: OrdersComponent;
    readonly rootURL ="https://localhost:44323/api"
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
    constructor(private http: HttpClient) { }
    postOrder(fromData: OrdersComponent) {
        this.http.post(this.rootURL + '/Order', fromData);
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


