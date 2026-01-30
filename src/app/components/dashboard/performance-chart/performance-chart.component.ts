import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-performance-chart',
    templateUrl: './performance-chart.component.html',
    styleUrls: ['./performance-chart.component.scss'],
    standalone: false
})
export class PerformanceChartComponent implements OnChanges {
    @Input() data: { completed: number, return: number, cancel: number } = { completed: 82, return: 10, cancel: 40 };

    public completedPct: number = 82;
    public returnPct: number = 10;
    public cancelPct: number = 40;

    public chartOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '85%',
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        elements: {
            arc: { borderWidth: 0 }
        }
    };

    public chart1Data: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['Completed', 'Remaining'],
        datasets: [{ data: [82, 18], backgroundColor: ['#00b074', '#e9ecef'] }]
    };

    public chart2Data: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['Return', 'Remaining'],
        datasets: [{ data: [10, 90], backgroundColor: ['#ffc107', '#e9ecef'] }]
    };

    public chart3Data: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['Cancel', 'Remaining'],
        datasets: [{ data: [40, 60], backgroundColor: ['#dc3545', '#e9ecef'] }]
    };

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['data']) {
            this.updateCharts();
        }
    }

    private updateCharts() {
        if (!this.data) return;

        this.completedPct = this.data.completed;
        this.returnPct = this.data.return;
        this.cancelPct = this.data.cancel;

        this.chart1Data = {
            ...this.chart1Data,
            datasets: [{ data: [this.data.completed, 100 - this.data.completed], backgroundColor: ['#00b074', '#e9ecef'] }]
        };
        this.chart2Data = {
            ...this.chart2Data,
            datasets: [{ data: [this.data.return, 100 - this.data.return], backgroundColor: ['#ffc107', '#e9ecef'] }]
        };
        this.chart3Data = {
            ...this.chart3Data,
            datasets: [{ data: [this.data.cancel, 100 - this.data.cancel], backgroundColor: ['#dc3545', '#e9ecef'] }]
        };

        this.cdr.markForCheck(); // Force update
    }
}
