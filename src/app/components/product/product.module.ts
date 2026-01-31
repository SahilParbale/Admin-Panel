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
    DemandForecastChartComponent
  ]
})
export class ProductModule { }
