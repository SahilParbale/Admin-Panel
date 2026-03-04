import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list';
import { ProductFormComponent } from './product-form/product-form';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductModal } from './add-product-modal/add-product-modal';
import { BaseChartDirective } from 'ng2-charts';
import { AvailabilityChartComponent } from './availability-chart/availability-chart.component';
import { OfferImpactChartComponent } from './offer-impact-chart/offer-impact-chart.component';
import { DemandForecastChartComponent } from './demand-forecast-chart/demand-forecast-chart.component';
import { ProductSalesModalComponent } from './product-sales-modal/product-sales-modal.component';
import { ProductTopSellingModalComponent } from './product-top-selling-modal/product-top-selling-modal.component';
import { ProductAvailabilityModalComponent } from './product-availability-modal/product-availability-modal.component';
import { ProductDemandForecastModalComponent } from './product-demand-forecast-modal/product-demand-forecast-modal.component';
import { ProductCategoryModalComponent } from './product-category-modal/product-category-modal.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BaseChartDirective,
    AvailabilityChartComponent,
    OfferImpactChartComponent,
    DemandForecastChartComponent,
    ProductSalesModalComponent,
    ProductTopSellingModalComponent,
    ProductAvailabilityModalComponent,
    ProductDemandForecastModalComponent,
    ProductCategoryModalComponent
  ]
})
export class ProductModule { }
