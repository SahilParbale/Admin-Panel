import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-performance-chart',
    templateUrl: './performance-chart.component.html',
    styleUrls: ['./performance-chart.component.scss'],
    standalone: false
})
export class PerformanceChartComponent {
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
}
