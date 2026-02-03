import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-average-delivery-time-chart',
    templateUrl: './average-delivery-time-chart.component.html',
    styleUrls: ['./average-delivery-time-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective, CommonModule]
})
export class AverageDeliveryTimeChartComponent implements OnInit {

    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Alex', 'Jordan', 'Chris', 'Taylor', 'Sam', 'Micky', 'Pat'],
        datasets: [
            {
                data: [22, 18, 25, 15, 20, 28, 19],
                label: 'Avg Time (Min)',
                backgroundColor: '#06b6d4', // Cyan-500
                hoverBackgroundColor: '#0891b2', // Cyan-600
                borderRadius: 6,
                barThickness: 35
            }
        ]
    };

    public barChartOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: (context) => {
                        return ` Avg Time: ${context.parsed.y} mins`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#6b7280',
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    color: '#f3f4f6',
                    drawTicks: false
                },
                ticks: {
                    color: '#9ca3af',
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    }
                },
                beginAtZero: true
            }
        }
    };

    constructor() { }

    ngOnInit(): void {
    }

}
