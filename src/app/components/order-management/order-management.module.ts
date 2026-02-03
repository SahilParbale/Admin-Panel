import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderManagementRoutingModule } from './order-management-routing.module';
import { OrderManagementComponent } from './order-management.component';
import { AverageOrderValueChartComponent } from './average-order-value-chart/average-order-value-chart.component';
import { OrderStatusDistributionChartComponent } from './order-status-distribution-chart/order-status-distribution-chart.component';
import { PaymentMethodSplitChartComponent } from './payment-method-split-chart/payment-method-split-chart.component';
import { OrdersByAreaHeatmapComponent } from './orders-by-area-heatmap/orders-by-area-heatmap.component';
import { PeakOrderTimeHeatmapComponent } from './peak-order-time-heatmap/peak-order-time-heatmap.component';
import { RepeatOrdersChartComponent } from './repeat-orders-chart/repeat-orders-chart.component';
import { CancellationRateTrendChartComponent } from './cancellation-rate-trend-chart/cancellation-rate-trend-chart.component';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
    declarations: [
        OrderManagementComponent,
        AverageOrderValueChartComponent,
        OrderStatusDistributionChartComponent,
        PaymentMethodSplitChartComponent,
        OrdersByAreaHeatmapComponent,
        PeakOrderTimeHeatmapComponent,
        RepeatOrdersChartComponent,
        CancellationRateTrendChartComponent
    ],
    imports: [
        CommonModule,
        OrderManagementRoutingModule,
        BaseChartDirective
    ]
})
export class OrderManagementModule { }
