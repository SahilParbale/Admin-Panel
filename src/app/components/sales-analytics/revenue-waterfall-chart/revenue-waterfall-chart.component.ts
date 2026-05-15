import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
    selector: 'app-financial-waterfall-chart',
    templateUrl: './revenue-waterfall-chart.component.html',
    styleUrls: ['./revenue-waterfall-chart.component.scss'],
    standalone: false
})
export class FinancialWaterfallChartComponent implements OnInit {

    public chartType: ChartType = 'bar';

    public chartData: ChartData<'bar'> = {
        labels: ['Gross Revenue', 'Discounts', 'Refunds', 'Tax', 'Gateway Fees', 'Rider Payout', 'Packaging', 'Ops Cost', 'Net Profit'],
        datasets: [
            {
                label: 'Financial Flow',
                data: [
                    [0, 8500000],      // Gross Revenue
                    [8500000, 8050000],  // Discounts (-450k)
                    [8050000, 7930000],  // Refunds (-120k)
                    [7930000, 7520000],  // Tax (-410k)
                    [7520000, 7350000],  // Gateway Fees (-170k)
                    [7350000, 6100000],  // Rider Payout (-1.25M)
                    [6100000, 6015000],  // Packaging (-85k)
                    [6015000, 5665000],  // Ops Cost (-350k)
                    [0, 5665000]       // Net Profit
                ] as any,
                backgroundColor: (context) => {
                    const index = context.dataIndex;
                    if (index === 0 || index === 8) return '#6366f1'; // Revenue and Profit are modern Indigo
                    return '#fb7185'; // Deductions are Soft Rose
                },
                borderRadius: 4,
                borderSkipped: false
            }
        ]
    };

    public chartOptions: ChartConfiguration['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1e293b',
                padding: 12,
                callbacks: {
                    label: (context) => {
                        const raw = context.raw as any;
                        if (Array.isArray(raw)) {
                            const diff = raw[1] - raw[0];
                            const absDiff = Math.abs(diff);
                            const label = context.label;

                            if (context.dataIndex === 0 || context.dataIndex === 8) {
                                return `${label}: ₹${absDiff.toLocaleString()}`;
                            }
                            return `${label}: -₹${absDiff.toLocaleString()}`;
                        }
                        return '';
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
                beginAtZero: true,
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
    selectedPeriod = 'This Month';
    showPeriodDropdown = false;
    periodOptions = [
        { label: 'This Month', value: 'This Month' },
        { label: 'Last Quarter', value: 'Last Quarter' },
        { label: 'This Year', value: 'This Year' }
    ];

    toggleDropdown(name: string) {
        this.showPeriodDropdown = name === 'period' ? !this.showPeriodDropdown : false;
    }

    setFilter(type: string, value: string) {
        if (type === 'period') this.selectedPeriod = value;
        console.log(`Revenue Waterfall filter: ${type} = ${value}`);
        this.showPeriodDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        return options.find(o => o.value === value)?.label ?? value;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
