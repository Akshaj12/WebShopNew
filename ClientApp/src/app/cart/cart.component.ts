import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService, CartItem, Product } from '../cart.service';
import { Options } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
    items: CartItem[];
    oppoSuits;
    sizes;
    checkoutForm;
    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ) {
        this.oppoSuits = ['Men', 'Women', 'Boys', 'Girls'];
        this.sizes = [34, 36, 38, 40, 42];
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: '',
            cardNumber: '',
            itemDetails: this.items
        });
    }
    onSubmit(checkoutForm)
    {
        this.insertRecord(checkoutForm)
    
            console.warn('Your order has been submitted', checkoutForm);
     

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    }
 

    insertRecord(checkoutForm) {
        this.cartService.postOrder(checkoutForm.value).subscribe((res: any) => {
            this.resetForm(checkoutForm)
        });
    }
    resetForm(checkoutForm: any) {
        throw new Error("Method not implemented.");
    }
    ngOnInit() {
    }
}

