import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-availability-chart',
    templateUrl: './availability-chart.component.html',
    styleUrls: ['./availability-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective]
})
export class AvailabilityChartComponent implements OnChanges {
    @Input() data: { active: number, inactive: number } = { active: 0, inactive: 0 };

    public pieChartData: ChartConfiguration<'pie'>['data'] = {
        labels: ['Active', 'Inactive'],
        datasets: [{
            data: [0, 0],
            backgroundColor: ['#14b8a6', '#f43f5e'], // Teal-500 for Active, Rose-500 for Inactive
            hoverBackgroundColor: ['#0d9488', '#e11d48'],
            borderWidth: 0
        }]
    };

    public pieChartOptions: ChartOptions<'pie'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        family: "'Poppins', sans-serif",
                        size: 12
                    },
                    color: '#6c757d'
                }
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
                cornerRadius: 4,
                displayColors: true
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
        if (!this.data) return;

        this.pieChartData = {
            ...this.pieChartData,
            datasets: [{
                ...this.pieChartData.datasets[0],
                data: [this.data.active, this.data.inactive]
            }]
        };

        this.cdr.markForCheck();
    }
}
