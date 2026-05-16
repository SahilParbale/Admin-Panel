import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance.component';
import { BaseChartDirective } from 'ng2-charts';

const routes: Routes = [
    { path: '', component: FinanceComponent }
];

import { AnalyticsDetailsModalComponent } from '../dashboard/analytics-details-modal/analytics-details-modal.component';

@NgModule({
    declarations: [
        FinanceComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BaseChartDirective,
        AnalyticsDetailsModalComponent
    ]
})
export class FinanceModule { }
