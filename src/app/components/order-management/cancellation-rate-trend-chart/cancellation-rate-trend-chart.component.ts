import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-cancellation-rate-trend-chart',
    templateUrl: './cancellation-rate-trend-chart.component.html',
    styleUrls: ['./cancellation-rate-trend-chart.component.scss'],
    standalone: false
})
export class CancellationRateTrendChartComponent implements OnInit {
    @Output() chartClick = new EventEmitter<any>();
    public lineChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [5, 4.5, 4.8, 4.2, 3.8, 3.5],
                label: 'Cancellation Rate (%)',
                fill: true,
                tension: 0.4,
                borderColor: '#ef4444', // Red color
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                pointBackgroundColor: '#ef4444',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#ef4444',
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    };

    public lineChartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: (context) => {
                        const value = context.parsed.y;
                        return value !== null ? ` ${value}%` : '';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#9ca3af', font: { size: 12, weight: 500 } }
            },
            y: {
                grid: { color: '#f3f4f6', drawTicks: false },
                ticks: {
                    color: '#9ca3af',
                    font: { size: 12, weight: 500 },
                    callback: (value) => value + '%'
                },
                min: 0
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
            const label = this.lineChartData.labels?.[index] as string;
            const value = this.lineChartData.datasets[0].data[index] as number;
            this.chartClick.emit({ label, value });
        }
    }

    // Filter states
    @Output() viewDetail = new EventEmitter<{ period: string, rate: number }>();

    openDetail(period: string = this.selectedResolution, rate: number = 3.8) {
        this.viewDetail.emit({ period, rate });
    }

    selectedResolution = 'Monthly';
    selectedReason = 'All Reasons';
    selectedInitiator = 'All';

    showResolutionDropdown = false;
    showReasonDropdown = false;
    showInitiatorDropdown = false;

    // Filter Options
    resolutionOptions = [
        { label: 'Daily', value: 'Daily' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' }
    ];

    reasonOptions = [
        { label: 'All Reasons', value: 'All Reasons' },
        { label: 'Customer Changed Mind', value: 'Customer Changed Mind' },
        { label: 'Delayed Delivery', value: 'Delayed Delivery' },
        { label: 'Out of Stock', value: 'Out of Stock' }
    ];

    initiatorOptions = [
        { label: 'All Initiators', value: 'All' },
        { label: 'Customer', value: 'Customer' },
        { label: 'Admin/System', value: 'Admin/System' }
    ];

    toggleDropdown(dropdownName: string) {
        this.showResolutionDropdown = dropdownName === 'resolution' ? !this.showResolutionDropdown : false;
        this.showReasonDropdown = dropdownName === 'reason' ? !this.showReasonDropdown : false;
        this.showInitiatorDropdown = dropdownName === 'initiator' ? !this.showInitiatorDropdown : false;
    }

    setFilter(filterType: string, value: string) {
        if (filterType === 'resolution') this.selectedResolution = value;
        if (filterType === 'reason') this.selectedReason = value;
        if (filterType === 'initiator') this.selectedInitiator = value;
        
        console.log(`Cancellation filter updated: ${filterType} = ${value}`);
        
        this.showResolutionDropdown = false;
        this.showReasonDropdown = false;
        this.showInitiatorDropdown = false;
    }

    getLabel(value: string, options: any[]): string {
        const option = options.find(o => o.value === value);
        return option ? option.label : value;
    }

    constructor() { }

    ngOnInit(): void { }
}
