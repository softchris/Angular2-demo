import { Pipe } from "@angular/core";
import { Product } from './product.model';

@Pipe({
  name: "sort"
})
export class ProductSortPipe {
  transform(array: Array<Product>, args: string): Array<Product> {
    array.sort((a: Product, b: Product) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
