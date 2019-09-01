import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService, CartItem, Product, Orders } from '../cart.service';
import { Options } from 'selenium-webdriver/safari';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
    items: CartItem[];
    oppoSuits;
    sizes;
    colors;
    cardDetails;
    checkoutForm;
    https: HttpClient;
    STORAGE_KEY = 'cart_Items';
    
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
        this.colors = ['Black', 'Red', 'Brown', 'White', 'Navy blue'];
        this.cardDetails = ['Master', 'Visa', 'Debit'];
        var storedNames = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        this.items = storedNames;
        //this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: '',
            cardNumber: '',
            itemDetails: this.items
        });
               
    }
    onSubmit(checkoutForm)
    {
        var address = (<HTMLInputElement>document.getElementById("address")).value;
        var name = (<HTMLInputElement>document.getElementById("name")).value;
        var cardNumber = (<HTMLInputElement>document.getElementById("cardNumber")).value; 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        localStorage.clear();
        let dateTime = new Date();
        var obj = {};
        obj['status'] = "Ordered";
        obj['deliveryAddress'] = address;
        obj['billingAddress'] = address;
        obj['orderTime'] = dateTime.toLocaleString();
        obj['products'] = null;
        //let obj: Order = JSON.parse('{"status": "Delivered", "deliveryAddress": address,"billingAddress": address,"orderTime": "9:00","products": null}');
        this.https.post('https://localhost:44323/api/Orders', obj).subscribe(
            data => console.log("success!", data),
            error => console.error("couldn't post because", error)
        );

        this.checkoutForm.reset();

     

    //this.items = this.cartService.clearCart();
    //this.checkoutForm.reset();
    }
 
    onRemove(cartItem) {
        var storedNames = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        this.items = storedNames;
        if (cartItem == 0) {
            this.items.shift();
        } else {
            this.items.splice(cartItem);
        }
        
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
       
    }
    insertRecord( name,  address, cardNumber ) {
        //var address = checkoutForm.get('address')
        //this.order = new Orders(1, "Delivered", "Gothenburg", "Gothenburg", "2019");
        //this.cartService.postOrder();
        
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
