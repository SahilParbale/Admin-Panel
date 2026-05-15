import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-rider-status-chart',
    templateUrl: './rider-status-chart.component.html',
    styleUrls: ['./rider-status-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective, CommonModule]
})
export class RiderStatusChartComponent implements OnInit {

    public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['Active Riders', 'Inactive Riders'],
        datasets: [
            {
                data: [185, 45],
                backgroundColor: [
                    '#2dd4bf', // Teal-400
                    '#f43f5e'  // Rose-500
                ],
                hoverBackgroundColor: [
                    '#14b8a6', // Teal-500
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
                    color: '#374151',
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
        cutout: '70%'
    };

    // Filter states
    selectedZone = 'All Zones';
    showZoneDropdown = false;
    zoneOptions = [
        { label: 'All Zones', value: 'All Zones' },
        { label: 'North', value: 'North' },
        { label: 'South', value: 'South' },
        { label: 'East', value: 'East' },
        { label: 'West', value: 'West' }
    ];

    toggleDropdown(name: string) {
        this.showZoneDropdown = name === 'zone' ? !this.showZoneDropdown : false;
    }

    setFilter(type: string, value: string) {
        if (type === 'zone') this.selectedZone = value;
        console.log(`Rider Status filter: ${type} = ${value}`);
        this.showZoneDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        return options.find(o => o.value === value)?.label ?? value;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
