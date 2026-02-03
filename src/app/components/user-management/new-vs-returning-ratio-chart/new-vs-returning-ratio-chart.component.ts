import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-new-vs-returning-ratio-chart',
    templateUrl: './new-vs-returning-ratio-chart.component.html',
    styleUrls: ['./new-vs-returning-ratio-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective, CommonModule]
})
export class NewVsReturningRatioChartComponent implements OnInit {

    public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['Returning Users', 'New Users'],
        datasets: [
            {
                data: [65, 35],
                backgroundColor: [
                    '#3b82f6', // Blue-500 (Returning)
                    '#dbeafe'  // Blue-100 (New)
                ],
                hoverBackgroundColor: [
                    '#2563eb', // Blue-600
                    '#bfdbfe'  // Blue-200
                ],
                borderWidth: 0,
                hoverBorderWidth: 0
            }
        ]
    };

    public doughnutChartOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: '#374151', // Gray-700
                    font: {
                        size: 14,
                        family: "'Inter', sans-serif"
                    },
                    padding: 20
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: (context) => {
                        const value = context.parsed;
                        const dataset = context.chart.data.datasets[context.datasetIndex];
                        const data = dataset.data as number[];
                        const total = data.reduce((acc: number, curr: number) => acc + curr, 0);
                        const percentage = ((value / total) * 100).toFixed(1) + '%';
                        return ` ${context.label}: ${value} (${percentage})`;
                    }
                }
            }
        },
        cutout: '70%' // Makes it look like a modern donut
    };

    constructor() { }

    ngOnInit(): void {
    }

}
