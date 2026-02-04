import { Component, OnInit } from '@angular/core';

interface FinancialSummary {
    period: string;
    totalOrders: number;
    unitsSold: number;
    grossRevenue: number;
    discounts: number;
    refunds: number;
    gatewayCharges: number;
    riderPayout: number;
    netRevenue: number;
    netProfit: number;
    avgOrderValue: number;
    profitMargin: number;
    growth: number;
}

@Component({
    selector: 'app-sales-financial-summary-table',
    templateUrl: './sales-financial-summary-table.component.html',
    styleUrls: ['./sales-financial-summary-table.component.scss'],
    standalone: false
})
export class SalesFinancialSummaryTableComponent implements OnInit {

    summaryData: FinancialSummary[] = [
        {
            period: 'Jan 2026',
            totalOrders: 1250,
            unitsSold: 1420,
            grossRevenue: 8500000,
            discounts: 450000,
            refunds: 120000,
            gatewayCharges: 170000,
            riderPayout: 1250000,
            netRevenue: 7760000,
            netProfit: 2500000,
            avgOrderValue: 6800,
            profitMargin: 29.4,
            growth: 12.5
        },
        {
            period: 'Dec 2025',
            totalOrders: 1480,
            unitsSold: 1680,
            grossRevenue: 9800000,
            discounts: 600000,
            refunds: 150000,
            gatewayCharges: 196000,
            riderPayout: 1480000,
            netRevenue: 8874000,
            netProfit: 2900000,
            avgOrderValue: 6620,
            profitMargin: 29.6,
            growth: 18.2
        },
        {
            period: 'Nov 2025',
            totalOrders: 1100,
            unitsSold: 1250,
            grossRevenue: 7200000,
            discounts: 350000,
            refunds: 80000,
            gatewayCharges: 144000,
            riderPayout: 1100000,
            netRevenue: 6626000,
            netProfit: 2100000,
            avgOrderValue: 6545,
            profitMargin: 29.2,
            growth: 5.4
        },
        {
            period: 'Oct 2025',
            totalOrders: 1050,
            unitsSold: 1180,
            grossRevenue: 6800000,
            discounts: 300000,
            refunds: 70000,
            gatewayCharges: 136000,
            riderPayout: 1050000,
            netRevenue: 6294000,
            netProfit: 1950000,
            avgOrderValue: 6476,
            profitMargin: 28.7,
            growth: 2.1
        },
        {
            period: 'Sep 2025',
            totalOrders: 980,
            unitsSold: 1100,
            grossRevenue: 6200000,
            discounts: 250000,
            refunds: 60000,
            gatewayCharges: 124000,
            riderPayout: 980000,
            netRevenue: 5766000,
            netProfit: 1800000,
            avgOrderValue: 6326,
            profitMargin: 29.0,
            growth: -3.2
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
