import { Component } from '@angular/core';

@Component({
    template : `
        <h2>Home, sweet home</h2>
        <html-outlet [html]="html"></html-outlet>
    `
})
export class HomeComponent{
    html:string;
    constructor(){
        this.html ='<h1>Peace</h1>'
    }
}