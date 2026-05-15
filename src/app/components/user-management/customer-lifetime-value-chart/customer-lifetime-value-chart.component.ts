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
                backgroundColor: 'rgba(6, 182, 212, 0.2)', // Cyan-500
                borderColor: '#06b6d4', // Cyan-500
                pointBackgroundColor: '#fff',
                pointBorderColor: '#06b6d4',
                pointHoverBackgroundColor: '#06b6d4',
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

    // Filter states
    selectedPeriod = 'This Year';
    showPeriodDropdown = false;
    periodOptions = [
        { label: 'This Year', value: 'This Year' },
        { label: 'Last 6 Months', value: 'Last 6 Months' },
        { label: 'Last Quarter', value: 'Last Quarter' }
    ];

    toggleDropdown(name: string) {
        this.showPeriodDropdown = name === 'period' ? !this.showPeriodDropdown : false;
    }

    setFilter(type: string, value: string) {
        if (type === 'period') this.selectedPeriod = value;
        console.log(`CLV filter: ${type} = ${value}`);
        this.showPeriodDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        return options.find(o => o.value === value)?.label ?? value;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
