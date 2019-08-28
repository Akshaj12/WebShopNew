import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    public product: Product;
    productnumber: number;
    //constructor(private route: ActivatedRoute, private cartService: CartService) {
    //    console.log(cartService.getItems);
    //}

    constructor(private route: ActivatedRoute, private cartService: CartService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        
        this.route.paramMap.subscribe(params => {
            this.productnumber = +params.get('productId');
        });
        
        console.log(cartService.getItems)
        http.get<Product>(baseUrl + 'api/productdetails/' + this.productnumber).subscribe(result => { 
            this.product = result;
            console.log(result);
        }, error => console.error(error));
                
}

    addToCart(product) {
        window.alert('Your product has been added to the cart!');
        this.cartService.addToCart(product);
    }

      
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.productnumber = + params.get('productId');
        });
    }

}
