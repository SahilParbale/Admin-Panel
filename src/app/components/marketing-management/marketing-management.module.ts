import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarketingManagementComponent } from './marketing';

const routes: Routes = [
    { path: '', component: MarketingManagementComponent }
];

@NgModule({
    imports: [
        CommonModule,
        MarketingManagementComponent,
        RouterModule.forChild(routes)
    ]
})
export class MarketingManagementModule { }
