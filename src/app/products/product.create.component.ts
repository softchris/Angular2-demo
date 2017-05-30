import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'create-product',
    template: `
    <h2>Create</h2>
    <div class="create-product">
        <input [(ngModel)]="title" placeholder="Enter product name">
        <button (click)="save()">Save</button>   
    </div>
    `,
    styles : ['.create-product { margin-top: 10px;padding:20px; border: solid 1px lightgray; }']
})
export class ProductCreateComponent {
    title:string;
    @Output() create = new EventEmitter<string>();

    save(){
        this.create.emit( this.title );
        this.title = '';
    }
}