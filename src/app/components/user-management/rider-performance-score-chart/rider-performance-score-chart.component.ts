import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-rider-performance-score-chart',
    templateUrl: './rider-performance-score-chart.component.html',
    styleUrls: ['./rider-performance-score-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective, CommonModule]
})
export class RiderPerformanceScoreChartComponent implements OnInit {

    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Alex', 'Jordan', 'Chris', 'Taylor', 'Sam', 'Micky', 'Pat'],
        datasets: [
            {
                data: [85, 92, 78, 95, 88, 75, 91],
                label: 'Performance Score',
                backgroundColor: '#f97316', // Orange-500
                hoverBackgroundColor: '#ea580c', // Orange-600
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
                        return ` Score: ${context.parsed.y}/100`;
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
                beginAtZero: true,
                max: 100
            }
        }
    };

    constructor() { }

    ngOnInit(): void {
    }

}
