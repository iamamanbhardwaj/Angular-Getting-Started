import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productList: IProduct[] = [];

    constructor(private httpclient: HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        return this.httpclient.get<IProduct[]>('api/products/products.json');
    }
}
