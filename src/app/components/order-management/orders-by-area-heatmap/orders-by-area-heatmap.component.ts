import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-orders-by-area-heatmap',
    templateUrl: './orders-by-area-heatmap.component.html',
    styleUrls: ['./orders-by-area-heatmap.component.scss'],
    standalone: false
})
export class OrdersByAreaHeatmapComponent implements OnInit {
    @Output() chartClick = new EventEmitter<any>();
    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'],
        datasets: [
            {
                data: [420, 380, 450, 310, 290, 240, 210, 180],
                label: 'Orders',
                backgroundColor: (context) => {
                    const value = context.parsed.x;
                    if (value === null) return '#e5e7eb';
                    if (value > 400) return '#111827'; // Black/Gray-900
                    if (value > 300) return '#374151'; // Gray-700
                    if (value > 200) return '#6b7280'; // Gray-500
                    return '#e5e7eb'; // Gray-200
                },
                borderRadius: 2,
                barThickness: 12,
                categoryPercentage: 0.8,
                barPercentage: 0.9,
            }
        ]
    };

    public barChartOptions: ChartOptions<'bar'> = {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: { bottom: 0 }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: (context) => ` ${context.parsed.x} Orders`
                }
            }
        },
        scales: {
            x: {
                grid: { display: true, color: '#f3f4f6' },
                ticks: { color: '#9ca3af', font: { size: 12, weight: 500 } },
                title: { display: true, text: 'Order Volume', color: '#6b7280' }
            },
            y: {
                grid: { display: false },
                ticks: {
                    color: '#4b5563',
                    padding: 10,
                    font: { size: 13, weight: 600 }
                }
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
            const label = this.barChartData.labels?.[index] as string;
            const value = this.barChartData.datasets[0].data[index] as number;
            this.chartClick.emit({ label, value });
        }
    }

    constructor() { }

    ngOnInit(): void { }
}
