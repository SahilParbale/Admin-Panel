import { Component, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-demand-forecast-chart',
    templateUrl: './demand-forecast-chart.component.html',
    styleUrls: ['./demand-forecast-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective]
})
export class DemandForecastChartComponent {
    @Output() chartClick = new EventEmitter<any>();
    public chartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Feb 01', 'Feb 02', 'Feb 03', 'Feb 04', 'Feb 05', 'Feb 06', 'Feb 07'],
        datasets: [
            {
                data: [350, 380, 340, 420, 450, 480, 520],
                label: 'Predicted Sales',
                fill: true,
                tension: 0.4,
                borderColor: '#6366f1', // Indigo-500
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.25)'); // Indigo fade
                    gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)');
                    return gradient;
                },
                borderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#6366f1',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#6366f1',
                pointHoverBorderColor: '#fff'
            }
        ]
    };

    public chartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    font: { family: "'Inter', sans-serif", size: 12 },
                    boxWidth: 8,
                    color: '#6b7280'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                titleColor: '#fff',
                bodyColor: '#e5e7eb',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return 'Prediction: ' + context.parsed.y + ' units';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: '#6b7280',
                    font: { family: "'Inter', sans-serif", size: 11 }
                }
            },
            y: {
                border: { display: false },
                grid: { color: '#f3f4f6' },
                ticks: {
                    color: '#9ca3af',
                    font: { family: "'Inter', sans-serif", size: 11 },
                    stepSize: 50
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
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
            const label = this.chartData.labels?.[index] as string;
            const value = this.chartData.datasets[0].data[index] as number;
            this.chartClick.emit({ label, value });
        }
    }
}
