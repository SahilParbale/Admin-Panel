import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingManagementComponent } from './pricing-management.component';

const routes: Routes = [
    { path: '', component: PricingManagementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PricingManagementRoutingModule { }
