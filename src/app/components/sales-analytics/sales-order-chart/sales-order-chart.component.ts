import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
    selector: 'app-sales-order-chart',
    templateUrl: './sales-order-chart.component.html',
    styleUrls: ['./sales-order-chart.component.scss'],
    standalone: false
})
export class SalesOrderChartComponent implements OnInit {

    public chartData: ChartData<'bar' | 'line'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Sales Revenue (₹)',
                data: [4500000, 5200000, 3800000, 6100000, 5500000, 7200000, 8500000, 7800000, 6200000, 6800000, 7200000, 9800000],
                type: 'bar',
                backgroundColor: 'rgba(16, 185, 129, 0.6)',
                borderColor: '#10b981',
                borderWidth: 1,
                borderRadius: 8,
                yAxisID: 'y-sales',
                order: 2
            },
            {
                label: 'Total Orders',
                data: [650, 720, 580, 820, 760, 940, 1250, 1100, 980, 1050, 1100, 1480],
                type: 'line',
                borderColor: '#1e293b',
                backgroundColor: 'rgba(30, 41, 59, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#1e293b',
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: false,
                tension: 0.4,
                yAxisID: 'y-orders',
                order: 1
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
                        if (context.parsed && context.parsed.y !== null && context.parsed.y !== undefined) {
                            if (context.datasetIndex === 0) {
                                label += '₹' + context.parsed.y.toLocaleString();
                            } else {
                                label += context.parsed.y;
                            }
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
                        size: 12,
                        weight: 600
                    },
                    color: '#64748b'
                }
            },
            'y-sales': {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Revenue (₹)',
                    font: { size: 13, weight: 'bold' },
                    color: '#10b981'
                },
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    callback: (value) => '₹' + (Number(value) / 1000000) + 'M',
                    font: { size: 11 },
                    color: '#64748b'
                }
            },
            'y-orders': {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Orders',
                    font: { size: 13, weight: 'bold' },
                    color: '#1e293b'
                },
                grid: {
                    display: false
                },
                ticks: {
                    font: { size: 11 },
                    color: '#64748b'
                }
            }
        }
    };

    constructor() { }

    ngOnInit(): void {
    }

}
