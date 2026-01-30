import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list';
import { ProductFormComponent } from './product-form/product-form';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductModal } from './add-product-modal/add-product-modal';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    AddProductModal
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
