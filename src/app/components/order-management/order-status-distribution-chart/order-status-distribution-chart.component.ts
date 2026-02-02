import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-order-status-distribution-chart',
    templateUrl: './order-status-distribution-chart.component.html',
    styleUrls: ['./order-status-distribution-chart.component.scss'],
    standalone: false
})
export class OrderStatusDistributionChartComponent implements OnInit {
    public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['New', 'Packed', 'Out for Delivery', 'Delivered'],
        datasets: [
            {
                data: [45, 30, 25, 120],
                backgroundColor: [
                    '#6366f1', // Indigo (New)
                    '#f59e0b', // Orange (Packed)
                    '#06b6d4', // Cyan (Out for Delivery)
                    '#10b981'  // Emerald (Delivered)
                ],
                hoverBackgroundColor: [
                    '#4f46e5',
                    '#d97706',
                    '#0891b2',
                    '#059669'
                ],
                borderWidth: 0,
                hoverOffset: 15
            }
        ]
    };

    public doughnutChartOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: { size: 12, weight: 500 }
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                displayColors: true,
                usePointStyle: true
            }
        }
    };

    constructor() { }

    ngOnInit(): void { }
}
