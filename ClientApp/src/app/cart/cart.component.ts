import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService, CartItem, Product, Orders } from '../cart.service';
import { Options } from 'selenium-webdriver/safari';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
    items: CartItem[];
    oppoSuits;
    sizes;
    cardDetails;
    checkoutForm;
    https: HttpClient;
    url;
    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
        private order: Orders,
        http: HttpClient,
        @Inject('BASE_URL') baseUrl: string
        
    ) {
        http.post
        this.https = http;
        this.url = baseUrl;
        this.oppoSuits = ['Men', 'Women', 'Boys', 'Girls'];
        this.sizes = [34, 36, 38, 40, 42];
        this.cardDetails = ['Master', 'Visa', 'Debit', 'Swish'];
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: '',
            cardNumber: '',
            itemDetails: this.items
        });

        http.post(this.url + '/api/Orders', this.order).subscribe(res => {
            const response = res.toString
        }
        );
    }
    onSubmit(checkoutForm)
    {

        console.log('Your order has been submitted', checkoutForm.address);
        this.insertRecord(checkoutForm);

     

    //this.items = this.cartService.clearCart();
    //this.checkoutForm.reset();
    }
 

    insertRecord(checkoutForm) {
        
        this.order = new Orders(1, "Delivered", "Gothenburg", "Gothenburg", "2019");
        //this.cartService.postOrder();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let obj: Order = JSON.parse('{ "Id": 1, "Status": "Delivered","DeliveryAddress" : "Gothenbrug", "BillingAddress" : "Mild", "OrderTime" : "2019"}');
        this.https.post('https://localhost:44323/api/Orders', obj).subscribe(res => {
            const response = res.toString
        }
        );
        //this.cartService.postOrder(this.order);
        this.checkoutForm.reset();
    }
    resetForm(checkoutForm: any) {
        throw new Error("Method not implemented.");
    }
    ngOnInit() {
    }
}

interface Order {
    Id: number;
    Status: string;
    DeliveryAddress: string;
    BillingAddress: string;
    OrderTime: string;
}
