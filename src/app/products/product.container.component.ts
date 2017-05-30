import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product.model';

@Component({
    template : `
        <h2>Container page for component</h2>
        <product-list (remove)="remove($event)" 
              (select)="select($event)" 
              [products]="products"
              [selected]="selectedProduct">
        </product-list>
        <edit-product (save)="update($event)" [product]="selectedProduct"></edit-product>
        <create-product (create)="create($event)"></create-product>
        <button (click)="gotoDetail()">Try navigation</button>
        <a [routerLink]="[1]">Product detail</a>
    `
})
export class ProductContainerComponent{
    products:Product[];
  title = 'Imperial products Inc';
  selectedProduct:Product;

  constructor(private router:Router){
    this.products = [ 
      { id : 1, title : 'Star wars - IV A new Hope', outOfStock : false }, 
      { id : 2, title : 'Star Wars - V Empire Strikes Back', outOfStock: false } ];
  }

  gotoDetail(){
    this.router.navigate(['/products', 1]);
  }

  create(newTitle:string) {
    this.products = [
      ...this.products,
      Object.assign({}, { id: this.getNewId(), title : newTitle, outOfStock : false })
    ]
  }

  select(product:Product){
    this.selectedProduct = product;
    console.log( product );
  }

  getNewId(){
    let max = this.products
    .map( x => x.id )
    .reduce(( acc, val ) => Math.max( acc,val ));

    return max + 1;
  }

  update(product:Product){
    console.log('updating');
    console.log('Updated product', product );
    let found = this.products.filter( p => p.id === product.id);
    if(found){
      this.products = [
        ...this.products.filter( p => p.id !== product.id ),
        Object.assign({}, product)
      ];
    }
  }

  remove(product:Product) {
     this.products = [
        ...this.products.filter( p => p.id !== product.id )
     ];

     this.selectedProduct = null;
  }
}