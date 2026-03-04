import { Component, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-category-distribution-chart',
    templateUrl: './category-distribution-chart.component.html',
    styleUrls: ['./category-distribution-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective]
})
export class CategoryDistributionChartComponent {
    @Output() chartClick = new EventEmitter<any>();
    public chartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports', 'Toys'],
        datasets: [
            {
                data: [45, 30, 20, 15, 25, 10],
                label: 'In Stock',
                backgroundColor: '#8b5cf6', // Violet-500
                hoverBackgroundColor: '#7c3aed',
                barPercentage: 0.6,
                categoryPercentage: 0.8
            },
            {
                data: [5, 8, 4, 3, 2, 1],
                label: 'Low Stock',
                backgroundColor: '#f59e0b', // Amber-500
                hoverBackgroundColor: '#d97706',
                barPercentage: 0.6,
                categoryPercentage: 0.8
            },
            {
                data: [2, 1, 0, 5, 0, 0],
                label: 'Out of Stock',
                backgroundColor: '#f43f5e', // Rose-500
                hoverBackgroundColor: '#e11d48',
                barPercentage: 0.6,
                categoryPercentage: 0.8,
                borderRadius: {
                    topLeft: 4,
                    topRight: 4
                }
            }
        ]
    };

    public chartOptions: ChartOptions<'bar'> = {
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
                padding: 10
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                ticks: {
                    color: '#6b7280',
                    font: { family: "'Inter', sans-serif", size: 11 }
                }
            },
            y: {
                stacked: true,
                border: { display: false },
                grid: { color: '#f3f4f6' },
                ticks: {
                    color: '#9ca3af',
                    font: { family: "'Inter', sans-serif", size: 11 }
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
            const category = this.chartData.labels?.[index] as string;
            const inStock = this.chartData.datasets[0].data[index] as number;
            const lowStock = this.chartData.datasets[1].data[index] as number;
            const outOfStock = this.chartData.datasets[2].data[index] as number;
            this.chartClick.emit({ category, inStock, lowStock, outOfStock });
        }
    }
}
