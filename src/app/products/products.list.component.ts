import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './product.model';

@Component({
    selector : 'product-list',
    template: `
    <div class="row" 
         [ngClass]="{ 'even' : i % 2 === 0, 'selected' : selected && selected.id === product.id  }" 
         *ngFor="let product of products | sort; let i = index">
       {{ product.title }} 
       <span class="out-of-stock" *ngIf="product.outOfStock">Out of stock</span>
        <button style="float:right" (click)="select.emit(product)">Select</button>
        <button style="float:right" (click)="remove.emit(product)">Remove</button>
     </div>
    `,
    styles : [ `.out-of-stock{ font-weight: bold; background: red; color: white; padding: 5px; }`,`.even { background: lightgray; color: white; }`,'.selected { background:green }', '.row { display:block; padding: 20px 5px; font-family: Verdana; box-shadow: 0px 5px 20px #888888; margin-bottom:20px; }']
})
export class ProductListComponent {
    @Input() selected:Product;
    @Input() products:Product[];
    @Output() select = new EventEmitter<Product>(); 
    @Output() remove = new EventEmitter<Product>(); 
}