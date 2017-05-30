import { Component } from '@angular/core';

@Component({
    template : `
        <form (ngSubmit)="heroForm.valid && submit()" #heroForm="ngForm">
            <div>
            <h3>Form</h3>
            Pristine <strong>{{ heroForm.pristine }}</strong> <br>
            Invalid <strong>{{ heroForm.invalid }}</strong> <br>
            Dirty <strong>{{ heroForm.dirty }}</strong> <br>
            </div>

            <div>
                <input [(ngModel)]="hero.title" 
                       #name ="ngModel" 
                       name="name" 
                       minlength="2"
                       required >
            </div>
             valid {{ name.valid }} <br>
             pristine {{ name.pristine }} <br>
             All errors {{ heroForm.controls.name.errors | json }}

            <div class="error" [hidden]="name.valid || name.pristine">Validation error</div>
            <div><button>Save</button></div>

            {{ heroForm.valid }}
        </form>
    `,
    styles : [ `form { border: solid 2px; padding: 20px; } form.ng-dirty { border: solid 2px orange } form.ng-invalid.ng-dirty { border: solid 2px red } form.ng-invalid.ng-pristine { border: solid 2px black }`,`.error {  color: white; background: salmon; border: solid 2px red; padding: 5px }` ]
})
export class HeroComponent{
    hero:Hero;

    constructor(){
        this.hero = new Hero();
        this.hero.title ='';
    }

    submit(){
        console.log('submitted');
    }
}

class Hero {
    title:string;
    description:string;
}