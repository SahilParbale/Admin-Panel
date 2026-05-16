import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAnalyticsComponent } from './sales-analytics.component';
import { SalesAnalyticsRoutingModule } from './sales-analytics-routing.module';
import { SalesPerformanceMasterTableComponent } from './sales-performance-master-table/sales-performance-master-table.component';
import { SalesFinancialSummaryTableComponent } from './sales-financial-summary-table/sales-financial-summary-table.component';
import { FinancialPerformanceAnalyticsTableComponent } from './financial-performance-analytics-table/financial-performance-analytics-table.component';
import { FinancialCompositionBreakdownComponent } from './revenue-cost-composition-table/revenue-cost-composition-table.component';
import { SalesOrderChartComponent } from './sales-order-chart/sales-order-chart.component';
import { CategoryDistributionChartComponent } from './category-distribution-chart/category-distribution-chart.component';
import { FinancialWaterfallChartComponent } from './revenue-waterfall-chart/revenue-waterfall-chart.component';
import { CostStructureChartComponent } from './cost-structure-chart/cost-structure-chart.component';
import { ZoneEfficiencyChartComponent } from './zone-efficiency-chart/zone-efficiency-chart.component';
import { BaseChartDirective } from 'ng2-charts';
import { AnalyticsDetailsModalComponent } from '../dashboard/analytics-details-modal/analytics-details-modal.component';

@NgModule({
    declarations: [
        SalesAnalyticsComponent,
        SalesPerformanceMasterTableComponent,
        SalesFinancialSummaryTableComponent,
        FinancialPerformanceAnalyticsTableComponent,
        FinancialCompositionBreakdownComponent,
        SalesOrderChartComponent,
        CategoryDistributionChartComponent,
        FinancialWaterfallChartComponent,
        CostStructureChartComponent,
        ZoneEfficiencyChartComponent
    ],
    imports: [
        CommonModule,
        SalesAnalyticsRoutingModule,
        BaseChartDirective,
        AnalyticsDetailsModalComponent
    ]
})
export class SalesAnalyticsModule { }
