import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAnalyticsComponent } from './sales-analytics.component';
import { SalesAnalyticsRoutingModule } from './sales-analytics-routing.module';
import { SalesPerformanceMasterTableComponent } from './sales-performance-master-table/sales-performance-master-table.component';
import { SalesFinancialSummaryTableComponent } from './sales-financial-summary-table/sales-financial-summary-table.component';
import { FinancialPerformanceAnalyticsTableComponent } from './financial-performance-analytics-table/financial-performance-analytics-table.component';

@NgModule({
    declarations: [
        SalesAnalyticsComponent,
        SalesPerformanceMasterTableComponent,
        SalesFinancialSummaryTableComponent,
        FinancialPerformanceAnalyticsTableComponent
    ],
    imports: [
        CommonModule,
        SalesAnalyticsRoutingModule
    ]
})
export class SalesAnalyticsModule { }
