import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

    @Output() chartClick = new EventEmitter<void>();

    onChartClick() {
        this.chartClick.emit();
    }

    public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['Returning Users', 'New Users'],
        datasets: [
            {
                data: [65, 35],
                backgroundColor: [
                    '#10b981', // Emerald-500
                    '#f43f5e'  // Rose-500
                ],
                hoverBackgroundColor: [
                    '#059669', // Emerald-600
                    '#e11d48'  // Rose-600
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
        console.log(`New vs Returning filter: ${type} = ${value}`);
        this.showPeriodDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        return options.find(o => o.value === value)?.label ?? value;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
