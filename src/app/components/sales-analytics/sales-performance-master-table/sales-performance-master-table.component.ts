import { Component, OnInit } from '@angular/core';

interface SalesPerformance {
    category: string;
    product: string;
    unitsSold: number;
    orders: number;
    grossRevenue: number;
    discounts: number;
    refunds: number;
    netRevenue: number;
    cost: number;
    profit: number;
    profitMargin: number;
    returnRate: number;
    growth: number;
    stockLeft: number;
}

@Component({
    selector: 'app-sales-performance-master-table',
    templateUrl: './sales-performance-master-table.component.html',
    styleUrls: ['./sales-performance-master-table.component.scss'],
    standalone: false
})
export class SalesPerformanceMasterTableComponent implements OnInit {

    salesData: SalesPerformance[] = [
        {
            category: 'Electronics', product: 'iPhone 15 Pro', unitsSold: 450, orders: 420, grossRevenue: 45000000, discounts: 2500000, refunds: 500000, netRevenue: 42000000, cost: 32000000, profit: 10000000, profitMargin: 23.8, returnRate: 1.1, growth: 15.5, stockLeft: 120
        },
        {
            category: 'Electronics', product: 'MacBook Air M2', unitsSold: 280, orders: 265, grossRevenue: 28000000, discounts: 1500000, refunds: 300000, netRevenue: 26200000, cost: 20000000, profit: 6200000, profitMargin: 23.6, returnRate: 0.8, growth: 12.2, stockLeft: 45
        },
        {
            category: 'Accessories', product: 'AirPods Pro', unitsSold: 850, orders: 810, grossRevenue: 2125000, discounts: 125000, refunds: 25000, netRevenue: 1975000, cost: 1200000, profit: 775000, profitMargin: 39.2, returnRate: 1.5, growth: 22.8, stockLeft: 310
        },
        {
            category: 'Electronics', product: 'Samsung S23 Ultra', unitsSold: 320, orders: 300, grossRevenue: 32000000, discounts: 3000000, refunds: 800000, netRevenue: 28200000, cost: 22000000, profit: 6200000, profitMargin: 22.0, returnRate: 2.5, growth: -5.4, stockLeft: 85
        },
        {
            category: 'Wearables', product: 'Apple Watch Series 9', unitsSold: 540, orders: 520, grossRevenue: 24300000, discounts: 1200000, refunds: 400000, netRevenue: 22700000, cost: 16000000, profit: 6700000, profitMargin: 29.5, returnRate: 1.2, growth: 18.3, stockLeft: 150
        },
        {
            category: 'Cameras', product: 'Sony A7 IV', unitsSold: 120, orders: 115, grossRevenue: 24000000, discounts: 1000000, refunds: 200000, netRevenue: 22800000, cost: 18000000, profit: 4800000, profitMargin: 21.1, returnRate: 0.5, growth: 8.9, stockLeft: 22
        },
        {
            category: 'Audio', product: 'Sony WH-1000XM5', unitsSold: 620, orders: 605, grossRevenue: 18600000, discounts: 900000, refunds: 150000, netRevenue: 17550000, cost: 12000000, profit: 5550000, profitMargin: 31.6, returnRate: 1.4, growth: 25.1, stockLeft: 180
        },
        {
            category: 'Gaming', product: 'PlayStation 5', unitsSold: 940, orders: 920, grossRevenue: 47000000, discounts: 500000, refunds: 1000000, netRevenue: 45500000, cost: 40000000, profit: 5500000, profitMargin: 12.1, returnRate: 2.2, growth: 42.6, stockLeft: 35
        },
        {
            category: 'Tablets', product: 'iPad Pro M2', unitsSold: 310, orders: 295, grossRevenue: 24800000, discounts: 1200000, refunds: 350000, netRevenue: 23250000, cost: 17000000, profit: 6250000, profitMargin: 26.9, returnRate: 0.9, growth: 14.8, stockLeft: 64
        },
        {
            category: 'Laptops', product: 'Dell XPS 15', unitsSold: 185, orders: 178, grossRevenue: 27750000, discounts: 2000000, refunds: 500000, netRevenue: 25250000, cost: 21000000, profit: 4250000, profitMargin: 16.8, returnRate: 1.8, growth: 6.5, stockLeft: 18
        },
        {
            category: 'Home', product: 'Dyson V15', unitsSold: 410, orders: 395, grossRevenue: 20500000, discounts: 1500000, refunds: 250000, netRevenue: 18750000, cost: 13000000, profit: 5750000, profitMargin: 30.7, returnRate: 1.1, growth: 19.4, stockLeft: 92
        },
        {
            category: 'Electronics', product: 'Google Pixel 8', unitsSold: 220, orders: 210, grossRevenue: 15400000, discounts: 1800000, refunds: 400000, netRevenue: 13200000, cost: 10000000, profit: 3200000, profitMargin: 24.2, returnRate: 2.8, growth: -12.4, stockLeft: 110
        },
        {
            category: 'Audio', product: 'Bose QC Ultra', unitsSold: 380, orders: 370, grossRevenue: 13300000, discounts: 800000, refunds: 120000, netRevenue: 12380000, cost: 8500000, profit: 3880000, profitMargin: 31.3, returnRate: 1.2, growth: 16.7, stockLeft: 75
        },
        {
            category: 'Wearables', product: 'Garmin Epix Gen 2', unitsSold: 150, orders: 145, grossRevenue: 12000000, discounts: 600000, refunds: 100000, netRevenue: 11300000, cost: 8000000, profit: 3300000, profitMargin: 29.2, returnRate: 0.7, growth: 31.2, stockLeft: 28
        },
        {
            category: 'Gaming', product: 'Nintendo Switch OLED', unitsSold: 1120, orders: 1090, grossRevenue: 33600000, discounts: 1200000, refunds: 600000, netRevenue: 31800000, cost: 24000000, profit: 7800000, profitMargin: 24.5, returnRate: 1.5, growth: 11.8, stockLeft: 210
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
