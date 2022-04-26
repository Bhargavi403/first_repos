import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

// configuring child routes
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), // registering the child routes
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
