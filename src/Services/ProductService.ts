import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productList: IProduct[] = [];

    /**
     *
     */
    constructor(private httpclient: HttpClient) {
    }
    getProducts(): Observable<IProduct[]> {
        // for (let i = 1 ; i < 10; i++ ){
        //     this.productList.push({
        //     Name: 'product ' + i,
        //     Available: i % 2 ? true : false,
        //     Code : `TTT- ${111 + i * 2}`,
        //     Price : 10 + i * 5,
        //     Rating : i % 2 ? 0.5 * i :  0.3 * i ,
        //     ImageUrl: `https://i.picsum.photos/id/23${i}/200/200.jpg`
        //     });
        // }
        return this.httpclient.get<IProduct[]>('api/products/products.json');
    }
}
