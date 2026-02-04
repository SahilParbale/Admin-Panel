import { Component, OnInit } from '@angular/core';

interface RevenueCostComposition {
    type: string;
    item: string;
    orders: number;
    amount: number;
    contribution: number;
    avgValue: number;
    refundRate: number;
    chargeRate: number;
    profitImpact: number;
}

@Component({
    selector: 'app-financial-composition-breakdown',
    templateUrl: './revenue-cost-composition-table.component.html',
    styleUrls: ['./revenue-cost-composition-table.component.scss'],
    standalone: false
})
export class FinancialCompositionBreakdownComponent implements OnInit {

    compositionData: RevenueCostComposition[] = [
        {
            type: 'Revenue',
            item: 'Product Sales',
            orders: 1250,
            amount: 7800000,
            contribution: 91.8,
            avgValue: 6240,
            refundRate: 1.2,
            chargeRate: 2.0,
            profitImpact: 5200000
        },
        {
            type: 'Revenue',
            item: 'Shipping Fees',
            orders: 1100,
            amount: 450000,
            contribution: 5.3,
            avgValue: 410,
            refundRate: 0.5,
            chargeRate: 0.0,
            profitImpact: 150000
        },
        {
            type: 'Revenue',
            item: 'Service Charges',
            orders: 450,
            amount: 250000,
            contribution: 2.9,
            avgValue: 555,
            refundRate: 0.0,
            chargeRate: 1.5,
            profitImpact: 210000
        },
        {
            type: 'Cost',
            item: 'Marketing & Ads',
            orders: 1250,
            amount: 850000,
            contribution: 32.5,
            avgValue: 680,
            refundRate: 0.0,
            chargeRate: 0.0,
            profitImpact: -850000
        },
        {
            type: 'Cost',
            item: 'Logistics & Delivery',
            orders: 1250,
            amount: 1250000,
            contribution: 47.8,
            avgValue: 1000,
            refundRate: 2.5,
            chargeRate: 0.0,
            profitImpact: -1250000
        },
        {
            type: 'Cost',
            item: 'Packaging Materials',
            orders: 1250,
            amount: 125000,
            contribution: 4.8,
            avgValue: 100,
            refundRate: 0.0,
            chargeRate: 0.0,
            profitImpact: -125000
        },
        {
            type: 'Cost',
            item: 'Payment Gateway Fees',
            orders: 1250,
            amount: 170000,
            contribution: 6.5,
            avgValue: 136,
            refundRate: 0.0,
            chargeRate: 2.0,
            profitImpact: -170000
        },
        {
            type: 'Cost',
            item: 'Operational Overhead',
            orders: 1250,
            amount: 220000,
            contribution: 8.4,
            avgValue: 0,
            refundRate: 0.0,
            chargeRate: 0.0,
            profitImpact: -220000
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
