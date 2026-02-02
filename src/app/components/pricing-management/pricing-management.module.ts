import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingManagementComponent } from './pricing-management.component';
import { PricingManagementRoutingModule } from './pricing-management-routing.module';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        PricingManagementRoutingModule,
        PricingManagementComponent
    ]
})
export class PricingManagementModule { }
