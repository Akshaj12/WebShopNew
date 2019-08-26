import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    public products: Product[];
    categoryNumber: number;

    share() {
        window.alert('The product has been shared!');
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
    constructor(private route: ActivatedRoute, private cartService: CartService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
       
        this.route.paramMap.subscribe(params => {
            this.categoryNumber = + params.get('cateogryId');
        });
        this.categoryNumber++;
        http.get<Product[]>(baseUrl + 'api/products/' + this.categoryNumber).subscribe(result => {
      this.products = result;
      console.log(result);
    }, error => console.error(error));
    }
    

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
          this.categoryNumber = + params.get('cateogryId');
      });
  }

}
