import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-order-frequency-chart',
    templateUrl: './user-order-frequency-chart.component.html',
    styleUrls: ['./user-order-frequency-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective, CommonModule]
})
export class UserOrderFrequencyChartComponent implements OnInit {

    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['1-5 Orders', '6-10 Orders', '11-20 Orders', '21+ Orders'],
        datasets: [
            {
                data: [450, 300, 150, 80],
                label: 'Number of Users',
                backgroundColor: '#38bdf8', // Sky-400
                hoverBackgroundColor: '#0ea5e9', // Sky-500
                borderRadius: 4,
                barThickness: 40
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
                        return ` ${context.parsed.y} Users`;
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

    // Filter states
    selectedPeriod = 'Last 30 Days';
    showPeriodDropdown = false;
    periodOptions = [
        { label: 'Last 7 Days', value: 'Last 7 Days' },
        { label: 'Last 30 Days', value: 'Last 30 Days' },
        { label: 'Last 3 Months', value: 'Last 3 Months' }
    ];

    toggleDropdown(name: string) {
        this.showPeriodDropdown = name === 'period' ? !this.showPeriodDropdown : false;
    }

    setFilter(type: string, value: string) {
        if (type === 'period') this.selectedPeriod = value;
        console.log(`Order Frequency filter: ${type} = ${value}`);
        this.showPeriodDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        return options.find(o => o.value === value)?.label ?? value;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
