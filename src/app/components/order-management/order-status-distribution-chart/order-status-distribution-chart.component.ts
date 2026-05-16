import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-order-status-distribution-chart',
    templateUrl: './order-status-distribution-chart.component.html',
    styleUrls: ['./order-status-distribution-chart.component.scss'],
    standalone: false
})
export class OrderStatusDistributionChartComponent implements OnInit {
    @Output() chartClick = new EventEmitter<any>();
    public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['New', 'Packed', 'Out for Delivery', 'Delivered'],
        datasets: [
            {
                data: [45, 30, 25, 120],
                backgroundColor: [
                    '#6366f1', // Indigo (New)
                    '#f59e0b', // Orange (Packed)
                    '#06b6d4', // Cyan (Out for Delivery)
                    '#10b981'  // Emerald (Delivered)
                ],
                hoverBackgroundColor: [
                    '#4f46e5',
                    '#d97706',
                    '#0891b2',
                    '#059669'
                ],
                borderWidth: 0,
                hoverOffset: 15
            }
        ]
    };

    public doughnutChartOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
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
                usePointStyle: true
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
            const label = this.doughnutChartData.labels?.[index] as string;
            const value = this.doughnutChartData.datasets[0].data[index] as number;
            this.chartClick.emit({ label, value });
        }
    }

    // Filter states
    @Output() viewDetail = new EventEmitter<{ statusName: string, orderCount: number }>();

    openDetail(statusName: string = 'Current Distribution', orderCount: number = 482) {
        this.viewDetail.emit({ statusName, orderCount });
    }

    selectedTimeFrame = 'Today';
    selectedPartner = 'All Partners';

    showTimeFrameDropdown = false;
    showPartnerDropdown = false;

    // Filter Options
    timeFrameOptions = [
        { label: 'Today', value: 'Today' },
        { label: 'Yesterday', value: 'Yesterday' },
        { label: 'Last 7 Days', value: 'Last 7 Days' }
    ];

    partnerOptions = [
        { label: 'All Partners', value: 'All Partners' },
        { label: 'Partner A', value: 'Partner A' },
        { label: 'Partner B', value: 'Partner B' }
    ];

    toggleDropdown(dropdownName: string) {
        this.showTimeFrameDropdown = dropdownName === 'timeFrame' ? !this.showTimeFrameDropdown : false;
        this.showPartnerDropdown = dropdownName === 'partner' ? !this.showPartnerDropdown : false;
    }

    setFilter(filterType: string, value: string) {
        if (filterType === 'timeFrame') this.selectedTimeFrame = value;
        if (filterType === 'partner') this.selectedPartner = value;
        
        console.log(`Status filter updated: ${filterType} = ${value}`);
        
        this.showTimeFrameDropdown = false;
        this.showPartnerDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        const option = options.find(o => o.value === value);
        return option ? option.label : value;
    }

    constructor() { }

    ngOnInit(): void { }
}
