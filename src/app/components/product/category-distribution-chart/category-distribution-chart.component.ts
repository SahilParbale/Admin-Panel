import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-category-distribution-chart',
    templateUrl: './category-distribution-chart.component.html',
    styleUrls: ['./category-distribution-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective]
})
export class CategoryDistributionChartComponent {
    public chartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports', 'Toys'],
        datasets: [
            {
                data: [45, 30, 20, 15, 25, 10],
                label: 'In Stock',
                backgroundColor: '#10b981', // Green
                hoverBackgroundColor: '#059669',
                barPercentage: 0.6,
                categoryPercentage: 0.8
            },
            {
                data: [5, 8, 4, 3, 2, 1],
                label: 'Low Stock',
                backgroundColor: '#f59e0b', // Amber/Orange
                hoverBackgroundColor: '#d97706',
                barPercentage: 0.6,
                categoryPercentage: 0.8
            },
            {
                data: [2, 1, 0, 5, 0, 0],
                label: 'Out of Stock',
                backgroundColor: '#ef4444', // Red
                hoverBackgroundColor: '#dc2626',
                barPercentage: 0.6,
                categoryPercentage: 0.8,
                borderRadius: {
                    topLeft: 4,
                    topRight: 4
                }
            }
        ]
    };

    public chartOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    font: { family: "'Inter', sans-serif", size: 12 },
                    boxWidth: 8,
                    color: '#6b7280'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                titleColor: '#fff',
                bodyColor: '#e5e7eb',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 10
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                ticks: {
                    color: '#6b7280',
                    font: { family: "'Inter', sans-serif", size: 11 }
                }
            },
            y: {
                stacked: true,
                border: { display: false },
                grid: { color: '#f3f4f6' },
                ticks: {
                    color: '#9ca3af',
                    font: { family: "'Inter', sans-serif", size: 11 }
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    };
}
