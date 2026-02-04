import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
    selector: 'app-zone-efficiency-chart',
    templateUrl: './zone-efficiency-chart.component.html',
    styleUrls: ['./zone-efficiency-chart.component.scss'],
    standalone: false
})
export class ZoneEfficiencyChartComponent implements OnInit {

    public chartType: ChartType = 'bubble';

    public chartData: ChartData<'bubble'> = {
        datasets: [
            {
                label: 'Zone North',
                data: [{ x: 28, y: 94, r: 15 }, { x: 30, y: 92, r: 12 }],
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderColor: '#3b82f6',
            },
            {
                label: 'Zone South',
                data: [{ x: 35, y: 88, r: 25 }, { x: 32, y: 90, r: 20 }],
                backgroundColor: 'rgba(16, 185, 129, 0.6)',
                borderColor: '#10b981',
            },
            {
                label: 'Zone East',
                data: [{ x: 42, y: 82, r: 10 }, { x: 45, y: 78, r: 8 }],
                backgroundColor: 'rgba(245, 158, 11, 0.6)',
                borderColor: '#f59e0b',
            },
            {
                label: 'Zone West',
                data: [{ x: 25, y: 96, r: 18 }, { x: 22, y: 98, r: 22 }],
                backgroundColor: 'rgba(139, 92, 246, 0.6)',
                borderColor: '#8b5cf6',
            },
            {
                label: 'Central',
                data: [{ x: 38, y: 85, r: 30 }, { x: 40, y: 83, r: 28 }],
                backgroundColor: 'rgba(239, 68, 68, 0.6)',
                borderColor: '#ef4444',
            }
        ]
    };

    public chartOptions: ChartConfiguration['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                }
            },
            tooltip: {
                backgroundColor: '#1e293b',
                padding: 12,
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 13 },
                callbacks: {
                    label: (context) => {
                        const raw = context.raw as any;
                        return [
                            `${context.dataset.label}`,
                            `Avg Speed: ${raw.x} mins`,
                            `Success Rate: ${raw.y}%`,
                            `Order Volume: ${raw.r * 10} units`
                        ];
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Avg Delivery Time (minutes)',
                    font: { size: 13, weight: 'bold' },
                    color: '#64748b'
                },
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    font: { size: 11 },
                    color: '#64748b'
                },
                suggestedMin: 15,
                suggestedMax: 50
            },
            y: {
                title: {
                    display: true,
                    text: 'Delivery Success Rate (%)',
                    font: { size: 13, weight: 'bold' },
                    color: '#64748b'
                },
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    callback: (value) => value + '%',
                    font: { size: 11 },
                    color: '#64748b'
                },
                suggestedMin: 70,
                suggestedMax: 100
            }
        }
    };

    constructor() { }

    ngOnInit(): void {
    }

}
