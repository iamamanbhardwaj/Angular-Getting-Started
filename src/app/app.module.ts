import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './home/welcome.component';
import { ErrorComponent } from './error/error.component';

import { YesNoPipe } from 'src/pipes/YesNoPipe';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'products/:id', component: ProductListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, YesNoPipe, StarComponent, DetailsComponent, WelcomeComponent, ErrorComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
