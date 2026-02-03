import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
    selector: 'app-user-growth-trend-chart',
    templateUrl: './user-growth-trend-chart.component.html',
    styleUrls: ['./user-growth-trend-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective]
})
export class UserGrowthTrendChartComponent implements OnInit {

    public lineChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: [120, 150, 180, 220, 260, 310, 380, 450, 500, 580, 650, 720],
                label: 'Total Users',
                fill: true,
                tension: 0.4,
                borderColor: '#6366f1', // Indigo-500
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                pointBackgroundColor: '#6366f1',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#6366f1',
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    };

    public lineChartOptions: ChartOptions<'line'> = {
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
                displayColors: false,
                callbacks: {
                    label: (context) => {
                        const value = context.parsed.y;
                        return value !== null ? ` ${value} Users` : '';
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
                    color: '#9ca3af',
                    font: {
                        size: 12,
                        weight: 500 // Use number instead of string '500' for Chart.js types compatibility if needed, though string often works
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
                        size: 12,
                        weight: 500
                    },
                    callback: (value) => {
                        if (typeof value === 'number') {
                            return value >= 1000 ? (value / 1000) + 'k' : value;
                        }
                        return value;
                    }
                },
                min: 0
            }
        }
    };

    constructor() { }

    ngOnInit(): void {
    }

}
