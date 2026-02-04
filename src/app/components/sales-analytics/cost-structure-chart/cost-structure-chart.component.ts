import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
    selector: 'app-cost-structure-chart',
    templateUrl: './cost-structure-chart.component.html',
    styleUrls: ['./cost-structure-chart.component.scss'],
    standalone: false
})
export class CostStructureChartComponent implements OnInit {

    public chartType: ChartType = 'line';

    public chartData: ChartData<'line'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Gateway Fees',
                data: [120000, 140000, 110000, 160000, 150000, 190000, 230000, 210000, 170000, 185000, 195000, 260000],
                fill: true,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: '#3b82f6',
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#fff',
                tension: 0.4
            },
            {
                label: 'Packaging',
                data: [65000, 75000, 55000, 85000, 78000, 105000, 130000, 120000, 95000, 105000, 110000, 150000],
                fill: true,
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderColor: '#f59e0b',
                pointBackgroundColor: '#f59e0b',
                pointBorderColor: '#fff',
                tension: 0.4
            },
            {
                label: 'Ops Cost',
                data: [250000, 280000, 220000, 310000, 290000, 380000, 450000, 420000, 330000, 360000, 380000, 480000],
                fill: true,
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                borderColor: '#8b5cf6',
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#fff',
                tension: 0.4
            },
            {
                label: 'Tax',
                data: [310000, 350000, 280000, 410000, 380000, 490000, 580000, 540000, 430000, 470000, 500000, 680000],
                fill: true,
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                borderColor: '#ef4444',
                pointBackgroundColor: '#ef4444',
                pointBorderColor: '#fff',
                tension: 0.4
            },
            {
                label: 'Rider Payout',
                data: [950000, 1100000, 820000, 1250000, 1150000, 1480000, 1750000, 1600000, 1280000, 1400000, 1500000, 1950000],
                fill: true,
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderColor: '#10b981',
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#fff',
                tension: 0.4
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
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null && context.parsed.y !== undefined) {
                            label += '₹' + context.parsed.y.toLocaleString();
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 11,
                        weight: 600
                    },
                    color: '#64748b'
                }
            },
            y: {
                stacked: true,
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Cumulative Cost (₹)',
                    font: { size: 13, weight: 'bold' },
                    color: '#64748b'
                },
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    callback: (value) => '₹' + (Number(value) / 1000000) + 'M',
                    font: { size: 11 },
                    color: '#64748b'
                }
            }
        },
        elements: {
            point: {
                radius: 4,
                hoverRadius: 6
            },
            line: {
                borderWidth: 3
            }
        }
    };

    constructor() { }

    ngOnInit(): void {
    }

}
