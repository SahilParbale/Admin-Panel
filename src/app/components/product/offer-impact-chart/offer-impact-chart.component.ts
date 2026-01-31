import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-offer-impact-chart',
    templateUrl: './offer-impact-chart.component.html',
    styleUrls: ['./offer-impact-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective]
})
export class OfferImpactChartComponent {
    public chartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
            {
                data: [120, 130, 125, 140, 135, 150],
                label: 'Before Discount',
                fill: true,
                tension: 0.4,
                borderColor: '#9ca3af', // Gray
                backgroundColor: 'rgba(156, 163, 175, 0.2)',
                borderDash: [5, 5], // Dashed line for "Before"
                pointBackgroundColor: '#fff',
                pointBorderColor: '#9ca3af',
                pointHoverBackgroundColor: '#9ca3af',
                pointHoverBorderColor: '#fff',
            },
            {
                data: [140, 160, 200, 240, 280, 320],
                label: 'After Discount',
                fill: true,
                tension: 0.4,
                borderColor: '#10b981', // App Theme Green
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
                    gradient.addColorStop(1, 'rgba(16, 185, 129, 0.05)');
                    return gradient;
                },
                pointBackgroundColor: '#fff',
                pointBorderColor: '#10b981',
                pointHoverBackgroundColor: '#10b981',
                pointHoverBorderColor: '#fff',
            }
        ]
    };

    public chartOptions: ChartOptions<'line'> = {
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
                    boxWidth: 8
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
                padding: 10,
                displayColors: true
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: '#6b7280',
                    font: { family: "'Inter', sans-serif" }
                }
            },
            y: {
                border: { display: false },
                grid: { color: '#f3f4f6' },
                ticks: {
                    color: '#9ca3af',
                    font: { family: "'Inter', sans-serif" }
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        elements: {
            point: {
                radius: 3,
                hoverRadius: 6,
                borderWidth: 2
            }
        }
    };
}
