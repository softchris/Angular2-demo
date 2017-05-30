import { Pipe } from "@angular/core";
import { Product } from './product.model';

@Pipe({
  name: "bananas"
})
export class BananasPipe{
    transform(val, ...args){
        return `${val}, is bananas B A N A N A S`
    }
}