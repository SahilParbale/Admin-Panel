import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-revenue-chart',
    templateUrl: './revenue-chart.component.html',
    styleUrls: ['./revenue-chart.component.scss'],
    standalone: false
})
export class RevenueChartComponent implements OnChanges {
    @Input() data: { labels: string[], data: number[] } = { labels: [], data: [] };

    public areaChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Jan 01', 'Jan 07', 'Jan 14', 'Jan 21', 'Jan 28'],
        datasets: [
            {
                data: [0, 5000, 12000, 25000, 45000],
                label: 'Revenue',
                fill: true,
                tension: 0.4,
                borderColor: '#6464ff',
                backgroundColor: 'rgba(100, 100, 255, 0.2)',
                pointRadius: 0,
                pointHoverRadius: 5
            }
        ]
    };

    public areaChartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
                cornerRadius: 4,
                displayColors: false
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#aaa', font: { size: 11 } }
            },
            y: {
                grid: { color: '#f0f0f0' },
                ticks: { color: '#aaa', font: { size: 11 }, callback: (value) => value + 'k' },
                min: 0,
                // max: removed to allow auto-scaling
            }
        }
    };

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['data']) {
            this.updateChart();
        }
    }

    private updateChart() {
        if (!this.data || !this.data.labels || !this.data.data) return;

        this.areaChartData = {
            ...this.areaChartData,
            labels: this.data.labels,
            datasets: [{
                ...this.areaChartData.datasets[0],
                data: this.data.data
            }]
        };

        this.cdr.markForCheck();
    }
}
