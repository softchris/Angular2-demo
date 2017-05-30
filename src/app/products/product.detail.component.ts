import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from './product.model';
import { ProductService } from './product.service';

import 'rxjs/add/operator/switchMap';


@Component({
    template : `
    <h2>Product detail</h2>
    <div *ngIf="product.title">{{ product.title }}</div>
     `
})
export class ProductDetailComponent {
    product:Product;
    constructor(private router:Router, private route:ActivatedRoute, private productService: ProductService){
        this.route.params
        .switchMap( param =>  this.productService.getProduct(param.id) )
        .subscribe( data => this.product = data )
    }
}