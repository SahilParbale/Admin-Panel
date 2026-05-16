import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
    selector: 'app-category-distribution-chart',
    templateUrl: './category-distribution-chart.component.html',
    styleUrls: ['./category-distribution-chart.component.scss'],
    standalone: false
})
export class CategoryDistributionChartComponent implements OnInit {
    @Output() chartClick = new EventEmitter<void>();

    onChartClick() {
        this.chartClick.emit();
    }

    public chartData: ChartData<'bar'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Electronics',
                data: [2200000, 2500000, 1800000, 2900000, 2600000, 3400000, 4100000, 3800000, 3000000, 3300000, 3500000, 4800000],
                backgroundColor: '#10b981',
                borderRadius: 4
            },
            {
                label: 'Accessories',
                data: [800000, 950000, 700000, 1100000, 900000, 1300000, 1600000, 1400000, 1100000, 1200000, 1300000, 1800000],
                backgroundColor: '#3b82f6',
                borderRadius: 4
            },
            {
                label: 'Wearables',
                data: [600000, 800000, 500000, 900000, 1100000, 1200000, 1500000, 1300000, 1000000, 1100000, 1200000, 1600000],
                backgroundColor: '#8b5cf6',
                borderRadius: 4
            },
            {
                label: 'Home & Audio',
                data: [900000, 950000, 800000, 1200000, 900000, 1300000, 1300000, 1300000, 1100000, 1200000, 1200000, 1600000],
                backgroundColor: '#f59e0b',
                borderRadius: 4
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
                    pointStyle: 'rectRounded',
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
                        if (context.parsed.y !== undefined && context.parsed.y !== null) {
                            label += '₹' + context.parsed.y.toLocaleString();
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: true,
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
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Revenue Distribution (₹)',
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
        }
    };

    // Filter states
    selectedPeriod = 'This Year';
    showPeriodDropdown = false;
    periodOptions = [
        { label: 'This Year', value: 'This Year' },
        { label: 'Last 6 Months', value: 'Last 6 Months' },
        { label: 'Last Quarter', value: 'Last Quarter' }
    ];

    toggleDropdown(name: string) {
        this.showPeriodDropdown = name === 'period' ? !this.showPeriodDropdown : false;
    }

    setFilter(type: string, value: string) {
        if (type === 'period') this.selectedPeriod = value;
        console.log(`Category Distribution filter: ${type} = ${value}`);
        this.showPeriodDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        return options.find(o => o.value === value)?.label ?? value;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
