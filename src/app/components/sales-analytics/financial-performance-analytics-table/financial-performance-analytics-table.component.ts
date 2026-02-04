import { Component, OnInit } from '@angular/core';

interface FinancialAnalytics {
    period: string;
    orders: number;
    grossRevenue: number;
    discounts: number;
    refunds: number;
    netSales: number;
    tax: number;
    gatewayFees: number;
    riderPayout: number;
    packagingCost: number;
    operationalCost: number;
    totalCost: number;
    netProfit: number;
    profitMargin: number;
    avgOrderValue: number;
    growth: number;
}

@Component({
    selector: 'app-financial-performance-analytics-table',
    templateUrl: './financial-performance-analytics-table.component.html',
    styleUrls: ['./financial-performance-analytics-table.component.scss'],
    standalone: false
})
export class FinancialPerformanceAnalyticsTableComponent implements OnInit {

    analyticsData: FinancialAnalytics[] = [
        {
            period: 'Jan 2026',
            orders: 1250,
            grossRevenue: 8500000,
            discounts: 450000,
            refunds: 120000,
            netSales: 7930000,
            tax: 410000,
            gatewayFees: 170000,
            riderPayout: 1250000,
            packagingCost: 85000,
            operationalCost: 350000,
            totalCost: 2265000,
            netProfit: 5255000,
            profitMargin: 61.8,
            avgOrderValue: 6800,
            growth: 12.5
        },
        {
            period: 'Dec 2025',
            orders: 1480,
            grossRevenue: 9800000,
            discounts: 600000,
            refunds: 150000,
            netSales: 9050000,
            tax: 480000,
            gatewayFees: 196000,
            riderPayout: 1480000,
            packagingCost: 98000,
            operationalCost: 380000,
            totalCost: 2634000,
            netProfit: 5936000,
            profitMargin: 60.5,
            avgOrderValue: 6620,
            growth: 18.2
        },
        {
            period: 'Nov 2025',
            orders: 1100,
            grossRevenue: 7200000,
            discounts: 350000,
            refunds: 80000,
            netSales: 6770000,
            tax: 360000,
            gatewayFees: 144000,
            riderPayout: 1100000,
            packagingCost: 72000,
            operationalCost: 320000,
            totalCost: 1996000,
            netProfit: 4414000,
            profitMargin: 61.3,
            avgOrderValue: 6545,
            growth: 5.4
        },
        {
            period: 'Oct 2025',
            orders: 1050,
            grossRevenue: 6800000,
            discounts: 300000,
            refunds: 70000,
            netSales: 6430000,
            tax: 340000,
            gatewayFees: 136000,
            riderPayout: 1050000,
            packagingCost: 68000,
            operationalCost: 310000,
            totalCost: 1904000,
            netProfit: 4186000,
            profitMargin: 61.5,
            avgOrderValue: 6476,
            growth: 2.1
        },
        {
            period: 'Sep 2025',
            orders: 980,
            grossRevenue: 6200000,
            discounts: 250000,
            refunds: 60000,
            netSales: 5890000,
            tax: 310000,
            gatewayFees: 124000,
            riderPayout: 980000,
            packagingCost: 62000,
            operationalCost: 290000,
            totalCost: 1766000,
            netProfit: 3814000,
            profitMargin: 61.5,
            avgOrderValue: 6326,
            growth: -3.2
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
