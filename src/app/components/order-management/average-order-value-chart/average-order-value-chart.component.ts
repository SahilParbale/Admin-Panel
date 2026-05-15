import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-average-order-value-chart',
    templateUrl: './average-order-value-chart.component.html',
    styleUrls: ['./average-order-value-chart.component.scss'],
    standalone: false
})
export class AverageOrderValueChartComponent implements OnInit {
    @Output() chartClick = new EventEmitter<any>();
    public lineChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [1250, 1400, 1100, 1600, 1550, 1850, 1700],
                label: 'Avg Order Value (₹)',
                fill: true,
                tension: 0.4,
                borderColor: '#10b981', // Emerald green
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#10b981',
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    };

    public lineChartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
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
                        return value !== null ? ` ₹${value.toLocaleString()}` : '';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#9ca3af', font: { size: 12, weight: 500 } }
            },
            y: {
                grid: { color: '#f3f4f6', drawTicks: false },
                ticks: {
                    color: '#9ca3af',
                    font: { size: 12, weight: 500 },
                    callback: (value) => '₹' + value
                },
                min: 0
            }
        },
        onHover: (event: any, activeElements: any[]) => {
            if (event.native && event.native.target) {
                event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
            }
        }
    };

    onChartClick({ active }: { active?: any[] }): void {
        if (active && active.length > 0) {
            const index = active[0].index;
            const label = this.lineChartData.labels?.[index] as string;
            const value = this.lineChartData.datasets[0].data[index] as number;
            this.chartClick.emit({ label, value });
        }
    }

    // Filter states
    selectedPeriod = 'Last 7 Days';

    showPeriodDropdown = false;

    // Filter Options
    periodOptions = [
        { label: 'Last 7 Days', value: 'Last 7 Days' },
        { label: 'Last 30 Days', value: 'Last 30 Days' },
        { label: 'This Quarter', value: 'This Quarter' }
    ];

    toggleDropdown(dropdownName: string) {
        this.showPeriodDropdown = dropdownName === 'period' ? !this.showPeriodDropdown : false;
    }

    setFilter(filterType: string, value: string) {
        if (filterType === 'period') this.selectedPeriod = value;
        
        console.log(`AOV filter updated: ${filterType} = ${value}`);
        
        this.showPeriodDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        const option = options.find(o => o.value === value);
        return option ? option.label : value;
    }

    constructor() { }

    ngOnInit(): void { }
}
