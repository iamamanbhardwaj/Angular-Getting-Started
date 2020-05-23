import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  headerText = 'Product List';
  productList: IProduct[] = [];
  thumbnailMargin = 1;
  thumbnailSize = 100;
  showImage = false;
  filteredProductList: IProduct[] = [];

  private _listFilter: string;
  get listFilter() {
    return this._listFilter;
  }

  set listFilter(val: string) {
    this._listFilter = val;
    this.filteredProductList = this.listFilter ? this.FilterProducts(this.listFilter) : this.productList;
  }
    /**
     * Constructor method
     */
    constructor(private productService: ProductService, private router: Router ) {
      this._listFilter = null;
      this.productService.getProducts().subscribe({
      next: products => {
        this.productList = products;
        this.filteredProductList = this.productList;
        }
      });
    }

  ToggleImage(): void {
    this.showImage = !this.showImage;
  }

  FilterProducts(value: string): IProduct[] {
    value = value.toLocaleLowerCase();
    return this.productList.filter((product: IProduct) => product.Name.toLocaleLowerCase().indexOf(value) !== -1);
  }

  onRatingClicked(value: string): void{
    this.headerText = value;
  }

  onCodeClick(id: number): void {
    this.router.navigate(['/product', id]);
  }
}


