import { Component } from '@angular/core';

@Component({
    selector: 'app-orders-table',
    templateUrl: './orders-table.component.html',
    styleUrls: ['./orders-table.component.scss'],
    standalone: false
})
export class OrdersTableComponent {
    dashboardMetrics = [
        {
            sNo: 1,
            category: 'Orders',
            kpi: 'Total Orders',
            today: '128',
            thisWeek: '842',
            thisMonth: '3,410',
            trend: 'up',
            action: 'Demand increasing'
        },
        {
            category: '',
            kpi: 'Delivered Orders',
            today: '121',
            thisWeek: '795',
            thisMonth: '3,210',
            trend: 'up',
            action: 'Healthy fulfillment'
        },
        {
            category: '',
            kpi: 'Cancelled Orders',
            today: '7',
            thisWeek: '47',
            thisMonth: '200',
            trend: 'down',
            action: 'Within acceptable range'
        },
        {
            sNo: 2,
            category: 'Revenue',
            kpi: 'Gross Revenue (₹)',
            today: '24,600',
            thisWeek: '1,58,400',
            thisMonth: '6,35,200',
            trend: 'up',
            action: 'Strong growth'
        },
        {
            category: '',
            kpi: 'Net Revenue (₹)',
            today: '22,100',
            thisWeek: '1,41,800',
            thisMonth: '5,72,000',
            trend: 'up',
            action: 'After discounts'
        },
        {
            sNo: 3,
            category: 'Products',
            kpi: 'Top Selling Product',
            today: 'Apples',
            thisWeek: 'Apples',
            thisMonth: 'Apples',
            trend: 'up',
            action: 'Maintain stock'
        },
        {
            category: '',
            kpi: 'Low Stock Products',
            today: '4',
            thisWeek: '6',
            thisMonth: '9',
            trend: 'warning',
            action: 'Refill urgently'
        },
        {
            sNo: 4,
            category: 'Customers',
            kpi: 'New Customers',
            today: '18',
            thisWeek: '96',
            thisMonth: '380',
            trend: 'up',
            action: 'Acquisition strong'
        },
        {
            category: '',
            kpi: 'Repeat Customers',
            today: '63',
            thisWeek: '402',
            thisMonth: '1,580',
            trend: 'up',
            action: 'Good retention'
        },
        {
            sNo: 5,
            category: 'Delivery',
            kpi: 'Avg Delivery Time',
            today: '32 min',
            thisWeek: '34 min',
            thisMonth: '36 min',
            trend: 'down',
            action: 'Improving speed'
        },
        {
            category: '',
            kpi: 'Late Deliveries (%)',
            today: '4%',
            thisWeek: '5%',
            thisMonth: '6%',
            trend: 'down',
            action: 'Operations stable'
        },
        {
            sNo: 6,
            category: 'Offers',
            kpi: 'Active Offers',
            today: '5',
            thisWeek: '5',
            thisMonth: '7',
            trend: 'neutral',
            action: 'Controlled'
        },
        {
            category: '',
            kpi: 'Revenue from Offers (₹)',
            today: '6,800',
            thisWeek: '48,500',
            thisMonth: '1,92,000',
            trend: 'up',
            action: 'Offers effective'
        }
    ];
}
