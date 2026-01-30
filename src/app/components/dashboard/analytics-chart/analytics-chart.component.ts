import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-analytics-chart',
    templateUrl: './analytics-chart.component.html',
    styleUrls: ['./analytics-chart.component.scss'],
    standalone: false
})
export class AnalyticsChartComponent implements OnChanges {
    @Input() data: { labels: string[], completed: (number | null)[], pending: (number | null)[] } = { labels: [], completed: [], pending: [] };

    public lineChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['01', '03', '06', '09', '12', '15', '18', '21', '24', '27', '30'],
        datasets: [
            {
                data: [1000, 1200, 1150, 1700, 1400, 1600, 1500, 1900, 2000, 2500, 2100],
                label: 'Completed',
                fill: false,
                tension: 0.4,
                borderColor: '#000000',
                backgroundColor: '#000000',
                pointBackgroundColor: '#000000',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#000000',
                pointRadius: 3,
                pointHoverRadius: 5
            },
            {
                data: [500, 600, 550, 600, 900, 500, 800, 1200, 1100, 1300, 1500],
                label: 'Cancelled',
                fill: false,
                tension: 0.4,
                borderColor: '#aaaaaa',
                borderDash: [5, 5],
                pointRadius: 0,
                pointHoverRadius: 0
            }
        ]
    };
    public lineChartOptions: ChartOptions<'line'> = {
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
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#aaa', font: { size: 11 } }
            },
            y: {
                grid: { color: '#f0f0f0' },
                ticks: { color: '#aaa', stepSize: 500, font: { size: 11 } },
                min: 0,
                // max: 3000 // Removed max for auto-scaling
            }
        }
    };

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['data']) {
            this.updateCharts();
        }
    }

    private updateCharts() {
        if (!this.data || !this.data.labels) return;

        this.lineChartData = {
            ...this.lineChartData,
            labels: this.data.labels,
            datasets: [
                {
                    ...this.lineChartData.datasets[0],
                    data: this.data.completed
                },
                {
                    ...this.lineChartData.datasets[1],
                    data: this.data.pending
                }
            ]
        };

        this.cdr.markForCheck();
    }
}
