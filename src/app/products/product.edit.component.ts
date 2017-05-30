import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Product } from './product.model';

@Component({
    selector: 'edit-product',
    template : `
    <h2>Edit</h2>
    <div *ngIf="product.title" class="edit-product">
        Id : {{ product.id }}
        <input [(ngModel)]="product.title">
        <label>
         <input type="checkbox" [(ngModel)]="product.outOfStock" >Set out of stock
        </label>
       
        <button style="float:right" (click)="save.emit( product )">Save</button>   
    </div>
    <div *ngIf="!product.title">Nothing selected</div>  
    `,
    styles : [`.edit-product { margin-top: 10px;padding:20px; border: solid 1px lightgray; }`]
})
export class ProductEditComponent{
    @Output() save = new EventEmitter<Product>();

    private _product:Product;

    @Input('product') 
    set product(value:Product) {
        this._product = Object.assign({}, value);
    }

    get product(){
        return this._product;
    }
    

    
}