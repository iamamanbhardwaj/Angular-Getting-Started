import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { DetailsComponent } from '../details/details.component';

import { ProductDetailGuard } from 'src/Services/product-detail.guard';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: DetailsComponent, canActivate: [ProductDetailGuard] },
];

@NgModule({
  declarations: [
    ProductListComponent,
    DetailsComponent,
  ],
  imports: [
    RouterModule.forChild(routes), SharedModule
  ]
})
export class ProductModule { }
