import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Product } from './product.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    baseUrl:string = 'http://swapi.co/api/';

    constructor(private http:Http){

    }

    getProduct(id):Observable<Product>{
        return  this.http
        .get(`${this.baseUrl}people/${id}`)
        .map( res => res.json())
        .map( this.mapProduct )
    }
    
    private mapProduct(json):Product{
        return new Product( json.name, 0, false );
    }
}