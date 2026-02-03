import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-customer-lifetime-value-chart',
    templateUrl: './customer-lifetime-value-chart.component.html',
    styleUrls: ['./customer-lifetime-value-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective, CommonModule]
})
export class CustomerLifetimeValueChartComponent implements OnInit {

    public lineChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: [500, 520, 550, 580, 620, 650, 700, 750, 800, 850, 900, 950],
                label: 'Average CLV (₹)',
                backgroundColor: 'rgba(16, 185, 129, 0.2)', // Emerald-500 with opacity
                borderColor: '#10b981', // Emerald-500
                pointBackgroundColor: '#fff',
                pointBorderColor: '#10b981',
                pointHoverBackgroundColor: '#10b981',
                pointHoverBorderColor: '#fff',
                fill: true,
                tension: 0.4
            }
        ]
    };

    public lineChartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    },
                    color: '#6b7280'
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
                        return ` ${context.dataset.label}: ₹${context.parsed.y}`;
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
                    },
                    callback: (value) => {
                        return '₹' + value;
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
