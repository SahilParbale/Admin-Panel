import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-repeat-orders-chart',
    templateUrl: './repeat-orders-chart.component.html',
    styleUrls: ['./repeat-orders-chart.component.scss'],
    standalone: false
})
export class RepeatOrdersChartComponent implements OnInit {
    @Output() chartClick = new EventEmitter<any>();
    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55],
                label: 'First-time Orders',
                backgroundColor: '#6366f1', // Indigo
                hoverBackgroundColor: '#4f46e5',
                borderRadius: 6,
            },
            {
                data: [28, 48, 40, 19, 86, 27],
                label: 'Repeat Orders',
                backgroundColor: '#10b981', // Emerald
                hoverBackgroundColor: '#059669',
                borderRadius: 6,
            }
        ]
    };

    public barChartOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: { size: 12, weight: 500 }
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                usePointStyle: true
            }
        },
        onHover: (event: any, activeElements: any[]) => {
            if (activeElements.length > 0) {
                (event.native.target as HTMLElement).style.cursor = 'pointer';
            } else {
                (event.native.target as HTMLElement).style.cursor = 'default';
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#64748b', font: { size: 12, weight: 500 } }
            },
            y: {
                grid: { color: '#f1f5f9' },
                ticks: { color: '#64748b', font: { size: 12, weight: 500 } },
                beginAtZero: true
            }
        }
    };

    onChartClick({ active }: { active?: any[] }): void {
        if (active && active.length > 0) {
            const index = active[0].index;
            const label = this.barChartData.labels?.[index] as string;
            const firstTime = this.barChartData.datasets[0].data[index] as number;
            const repeat = this.barChartData.datasets[1].data[index] as number;
            this.chartClick.emit({ label, firstTime, repeat });
        }
    }

    constructor() { }

    ngOnInit(): void { }
}
