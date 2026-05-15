import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-payment-method-split-chart',
    templateUrl: './payment-method-split-chart.component.html',
    styleUrls: ['./payment-method-split-chart.component.scss'],
    standalone: false
})
export class PaymentMethodSplitChartComponent implements OnInit {
    @Output() chartClick = new EventEmitter<any>();
    public pieChartData: ChartConfiguration<'pie'>['data'] = {
        labels: ['UPI', 'COD', 'Credit/Debit Card', 'Wallet'],
        datasets: [
            {
                data: [450, 320, 180, 50],
                backgroundColor: [
                    '#4F46E5', // Indigo (UPI)
                    '#06B6D4', // Cyan (COD)
                    '#F43F5E', // Rose (Card)
                    '#F59E0B'  // Amber (Wallet)
                ],
                hoverBackgroundColor: [
                    '#4338CA',
                    '#0891B2',
                    '#E11D48',
                    '#D97706'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }
        ]
    };

    public pieChartOptions: ChartOptions<'pie'> = {
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
                displayColors: true,
                usePointStyle: true,
                callbacks: {
                    label: (context) => {
                        const total = context.dataset.data.reduce((a: any, b: any) => a + b, 0);
                        const value = context.parsed;
                        const percentage = ((value / total) * 100).toFixed(1);
                        return ` ${context.label}: ${percentage}% (${value})`;
                    }
                }
            }
        },
        onHover: (event: any, activeElements: any[]) => {
            if (activeElements.length > 0) {
                (event.native.target as HTMLElement).style.cursor = 'pointer';
            } else {
                (event.native.target as HTMLElement).style.cursor = 'default';
            }
        }
    };

    onChartClick({ active }: { active?: any[] }): void {
        if (active && active.length > 0) {
            const index = active[0].index;
            const label = this.pieChartData.labels?.[index] as string;
            const value = this.pieChartData.datasets[0].data[index] as number;
            this.chartClick.emit({ label, value });
        }
    }

    // Filter states
    selectedPeriod = 'Last 7 Days';
    selectedOrderValue = 'All Values';

    showPeriodDropdown = false;
    showOrderValueDropdown = false;

    // Filter Options
    periodOptions = [
        { label: 'Last 7 Days', value: 'Last 7 Days' },
        { label: 'Last 30 Days', value: 'Last 30 Days' }
    ];

    valueOptions = [
        { label: 'All Values', value: 'All Values' },
        { label: 'High Value (₹1000+)', value: 'High Value' },
        { label: 'Low Value (<₹500)', value: 'Low Value' }
    ];

    toggleDropdown(dropdownName: string) {
        this.showPeriodDropdown = dropdownName === 'period' ? !this.showPeriodDropdown : false;
        this.showOrderValueDropdown = dropdownName === 'orderValue' ? !this.showOrderValueDropdown : false;
    }

    setFilter(filterType: string, value: string) {
        if (filterType === 'period') this.selectedPeriod = value;
        if (filterType === 'orderValue') this.selectedOrderValue = value;
        
        console.log(`Payment filter updated: ${filterType} = ${value}`);
        
        this.showPeriodDropdown = false;
        this.showOrderValueDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        const option = options.find(o => o.value === value);
        return option ? option.label : value;
    }

    constructor() { }

    ngOnInit(): void { }
}
