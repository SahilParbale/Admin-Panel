import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UserMasterTableComponent } from './user-master-table/user-master-table.component';
import { UserComplaintsTableComponent } from './user-complaints-table/user-complaints-table.component';
import { RiderMasterTableComponent } from './rider-master-table/rider-master-table.component';
import { RiderEarningsTableComponent } from './rider-earnings-table/rider-earnings-table.component';
import { UserGrowthTrendChartComponent } from './user-growth-trend-chart/user-growth-trend-chart.component';
import { NewVsReturningRatioChartComponent } from './new-vs-returning-ratio-chart/new-vs-returning-ratio-chart.component';
import { UserOrderFrequencyChartComponent } from './user-order-frequency-chart/user-order-frequency-chart.component';
import { CustomerLifetimeValueChartComponent } from './customer-lifetime-value-chart/customer-lifetime-value-chart.component';
import { DeliveriesPerRiderChartComponent } from './deliveries-per-rider-chart/deliveries-per-rider-chart.component';
import { RiderPerformanceScoreChartComponent } from './rider-performance-score-chart/rider-performance-score-chart.component';
import { RiderStatusChartComponent } from './rider-status-chart/rider-status-chart.component';
import { AverageDeliveryTimeChartComponent } from './average-delivery-time-chart/average-delivery-time-chart.component';
import { AnalyticsDetailsModalComponent } from '../dashboard/analytics-details-modal/analytics-details-modal.component';

@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        UserMasterTableComponent,
        UserComplaintsTableComponent,
        RiderMasterTableComponent,
        RiderEarningsTableComponent,
        UserGrowthTrendChartComponent,
        NewVsReturningRatioChartComponent,
        UserOrderFrequencyChartComponent,
        CustomerLifetimeValueChartComponent,
        DeliveriesPerRiderChartComponent,
        RiderPerformanceScoreChartComponent,
        RiderStatusChartComponent,
        AverageDeliveryTimeChartComponent,
        AnalyticsDetailsModalComponent
    ]
})
export class UserManagementComponent {
    // Standardized User Management Dashboard
    activeTab: 'user' | 'rider' = 'user';

    setActiveTab(tab: 'user' | 'rider') {
        this.activeTab = tab;
    }

    // Modal State
    showAnalyticsModal = false;
    activeModalMode: 'orders' | 'performance' | 'revenue' | 'product' | 'user' | 'user-ratio' | 'user-order-freq' | 'user-clv' | 'rider-deliveries' = 'user';

    openUserGrowthModal() {
        this.activeModalMode = 'user';
        this.showAnalyticsModal = true;
    }

    openUserRatioModal() {
        this.activeModalMode = 'user-ratio';
        this.showAnalyticsModal = true;
    }

    openUserOrderFreqModal() {
        this.activeModalMode = 'user-order-freq';
        this.showAnalyticsModal = true;
    }

    openUserClvModal() {
        this.activeModalMode = 'user-clv';
        this.showAnalyticsModal = true;
    }

    openRiderDeliveriesModal() {
        this.activeModalMode = 'rider-deliveries';
        this.showAnalyticsModal = true;
    }

    closeAnalyticsModal() {
        this.showAnalyticsModal = false;
    }
}
