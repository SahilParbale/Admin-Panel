import { Component, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-analytics-details-modal',
    templateUrl: './analytics-details-modal.component.html',
    styleUrls: ['./analytics-details-modal.component.scss'],
    standalone: false
})
export class AnalyticsDetailsModalComponent implements OnInit, OnChanges {
    @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
    @Input() isOpen = false;
    @Input() mode: 'orders' | 'performance' | 'revenue' = 'orders';
    @Output() close = new EventEmitter<void>();

    title = 'Order Analytics – January 2026';
    dateRange = 'Jan 01 - Jan 31, 2026';

    // Data Containers
    kpis: any[] = [];
    tableData: any[] = [];

    // Chart Configurations
    public lineChartData: ChartConfiguration['data'] = { datasets: [] };
    public lineChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true, position: 'top', align: 'end', labels: { usePointStyle: true, boxWidth: 8 } }
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: '#f0f0f0' }, beginAtZero: true }
        }
    };

    public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = { datasets: [] };
    public doughnutChartOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true, position: 'right', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } }
        },
        cutout: '75%'
    };

    // Chart Type State
    public chartType: ChartType = 'line';
    public isChartVisible = true;

    constructor() { }

    ngOnInit(): void {
        this.loadData();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['mode'] || changes['isOpen']) {
            this.loadData();
        }
    }

    loadData() {
        if (this.mode === 'performance') {
            this.loadPerformanceData();
        } else if (this.mode === 'revenue') {
            this.loadRevenueData();
        } else {
            this.loadOrderData();
        }
        // Reset chart type to line when opening or switching modes
        this.setChartType('line');
    }

    loadRevenueData() {
        this.title = 'Revenue Profile – January 2026';

        this.kpis = [
            { label: 'Total Revenue', value: '₹87,363', change: '+11%', isPositive: true },
            { label: 'Net Profit', value: '₹12,450', change: '+8%', isPositive: true },
            { label: 'Expenses', value: '₹4,200', change: '+2%', isPositive: false }, // Higher expenses usually negative
            { label: 'Avg Order Value', value: '₹450', change: '+5%', isPositive: true }
        ];

        // Purple (Revenue), Blue (Profit), Light (Expense/Other)
        const purple = '#6f42c1';
        const blue = '#007bff';
        const lightPurple = '#d5c6f3';

        this.lineChartData = {
            labels: ['Jan 01', 'Jan 05', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'],
            datasets: [
                {
                    data: [5000, 7000, 6500, 9000, 12000, 11000, 15000],
                    label: 'Revenue',
                    fill: true,
                    tension: 0.4,
                    borderColor: purple,
                    backgroundColor: 'rgba(111, 66, 193, 0.1)',
                    pointBackgroundColor: purple,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: purple
                },
                {
                    data: [1000, 1500, 1200, 2000, 3000, 2500, 3500],
                    label: 'Net Profit',
                    fill: false,
                    tension: 0.4,
                    borderColor: blue,
                    borderDash: [5, 5],
                    pointRadius: 3,
                    pointBackgroundColor: blue,
                    pointBorderColor: '#fff'
                }
            ]
        };

        this.doughnutChartData = {
            labels: ['Product Sales', 'Services', 'Subscriptions'],
            datasets: [
                {
                    data: [65, 25, 10],
                    backgroundColor: [purple, blue, lightPurple],
                    hoverBackgroundColor: [purple, blue, lightPurple],
                    borderWidth: 0,
                    hoverOffset: 4
                }
            ]
        };

        this.tableData = [
            { date: 'Jan 30', total: '₹5,200', completed: '₹4,500', cancelled: '₹700', rate: '86%', status: 'Good' },
            { date: 'Jan 29', total: '₹4,800', completed: '₹4,200', cancelled: '₹600', rate: '87%', status: 'Good' },
            { date: 'Jan 28', total: '₹3,500', completed: '₹3,000', cancelled: '₹500', rate: '85%', status: 'Average' },
            { date: 'Jan 27', total: '₹6,100', completed: '₹5,800', cancelled: '₹300', rate: '95%', status: 'Excellent' },
            { date: 'Jan 26', total: '₹4,200', completed: '₹3,500', cancelled: '₹700', rate: '83%', status: 'Warning' },
        ];
    }

    loadOrderData() {
        this.title = 'Order Analytics – January 2026';

        this.kpis = [
            { label: 'Total Orders', value: '4,250', change: '+12%', isPositive: true },
            { label: 'Completed', value: '3,850', change: '+15%', isPositive: true },
            { label: 'Cancelled', value: '400', change: '-5%', isPositive: true },
            { label: 'Completion Rate', value: '90.5%', change: '+2.5%', isPositive: true }
        ];

        this.lineChartData = {
            labels: ['Jan 01', 'Jan 05', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'],
            datasets: [
                {
                    data: [120, 150, 110, 180, 220, 190, 250],
                    label: 'Completed',
                    fill: true,
                    tension: 0.4,
                    borderColor: '#000',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    pointBackgroundColor: '#000',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#000'
                },
                {
                    data: [20, 30, 15, 25, 40, 35, 20],
                    label: 'Cancelled',
                    fill: false,
                    tension: 0.4,
                    borderColor: '#aaaaaa',
                    borderDash: [5, 5],
                    pointRadius: 0,
                    pointHoverRadius: 0
                }
            ]
        };

        this.doughnutChartData = {
            labels: ['Completed', 'Cancelled', 'Pending'],
            datasets: [
                {
                    data: [3850, 400, 150],
                    backgroundColor: ['#000000', '#aaaaaa', '#e0e0e0'],
                    hoverBackgroundColor: ['#222222', '#888888', '#d0d0d0'],
                    borderWidth: 0,
                    hoverOffset: 4
                }
            ]
        };

        this.tableData = [
            { date: 'Jan 30', total: 270, completed: 250, cancelled: 20, rate: '92.5%', status: 'Excellent' },
            { date: 'Jan 29', total: 225, completed: 190, cancelled: 35, rate: '84.4%', status: 'Good' },
            { date: 'Jan 28', total: 125, completed: 110, cancelled: 15, rate: '88.0%', status: 'Average' },
            { date: 'Jan 27', total: 205, completed: 180, cancelled: 25, rate: '87.8%', status: 'Good' },
            { date: 'Jan 26', total: 260, completed: 220, cancelled: 40, rate: '84.6%', status: 'Warning' },
        ];
    }

    loadPerformanceData() {
        this.title = 'Order Performance – January 2026';

        this.kpis = [
            { label: 'Avg Delivery Time', value: '32m', change: '-2m', isPositive: true }, // Faster is better (positive)
            { label: 'On-Time Rate', value: '94%', change: '+1.5%', isPositive: true },
            { label: 'Customer Rating', value: '4.8', change: '+0.2', isPositive: true },
            { label: 'Issues Reported', value: '12', change: '-5', isPositive: true } // Fewer issues is positive
        ];

        // Green (Good), Yellow (Average/Return), Red (Bad/Cancel)
        const green = '#28a745';
        const yellow = '#ffc107';
        const red = '#dc3545';

        this.lineChartData = {
            labels: ['Jan 01', 'Jan 05', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'],
            datasets: [
                {
                    data: [95, 94, 96, 92, 98, 95, 97],
                    label: 'On-Time %',
                    fill: true,
                    tension: 0.4,
                    borderColor: green,
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    pointBackgroundColor: green,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: green
                },
                {
                    data: [2, 3, 2, 5, 1, 3, 2],
                    label: 'Issues %',
                    fill: false,
                    tension: 0.4,
                    borderColor: red,
                    borderDash: [5, 5],
                    pointRadius: 3,
                    pointBackgroundColor: red,
                    pointBorderColor: '#fff'
                }
            ]
        };

        this.doughnutChartData = {
            labels: ['On-Time', 'Delayed', 'Issues'],
            datasets: [
                {
                    data: [94, 4, 2],
                    backgroundColor: [green, yellow, red],
                    hoverBackgroundColor: [green, yellow, red],
                    borderWidth: 0,
                    hoverOffset: 4
                }
            ]
        };

        this.tableData = [
            { date: 'Jan 30', total: 270, completed: 262, cancelled: 5, rate: '97.0%', status: 'Excellent' },
            { date: 'Jan 29', total: 225, completed: 210, cancelled: 8, rate: '93.3%', status: 'Good' },
            { date: 'Jan 28', total: 125, completed: 115, cancelled: 2, rate: '92.0%', status: 'Good' },
            { date: 'Jan 27', total: 205, completed: 180, cancelled: 15, rate: '87.8%', status: 'Average' },
            { date: 'Jan 26', total: 260, completed: 240, cancelled: 5, rate: '92.3%', status: 'Good' },
        ];
    }

    setChartType(type: ChartType) {
        this.chartType = type;

        // Update colors based on chart type AND mode
        if (type === 'bar') {
            if (this.mode === 'orders') {
                if (this.lineChartData.datasets[0]) {
                    this.lineChartData.datasets[0].backgroundColor = '#000000';
                    this.lineChartData.datasets[0].borderColor = '#000000';
                }
                if (this.lineChartData.datasets[1]) {
                    this.lineChartData.datasets[1].backgroundColor = '#aaaaaa';
                    this.lineChartData.datasets[1].borderColor = '#aaaaaa';
                    (this.lineChartData.datasets[1] as any).borderDash = [];
                }
            } else if (this.mode === 'performance') {
                const green = '#28a745';
                const red = '#dc3545';
                if (this.lineChartData.datasets[0]) {
                    this.lineChartData.datasets[0].backgroundColor = green;
                    this.lineChartData.datasets[0].borderColor = green;
                }
                if (this.lineChartData.datasets[1]) {
                    this.lineChartData.datasets[1].backgroundColor = red;
                    this.lineChartData.datasets[1].borderColor = red;
                    (this.lineChartData.datasets[1] as any).borderDash = [];
                }
            } else if (this.mode === 'revenue') {
                const purple = '#6f42c1';
                const blue = '#007bff';
                if (this.lineChartData.datasets[0]) {
                    this.lineChartData.datasets[0].backgroundColor = purple;
                    this.lineChartData.datasets[0].borderColor = purple;
                }
                if (this.lineChartData.datasets[1]) {
                    this.lineChartData.datasets[1].backgroundColor = blue;
                    this.lineChartData.datasets[1].borderColor = blue;
                    (this.lineChartData.datasets[1] as any).borderDash = [];
                }
            }
        } else {
            // Line Chart Colors - Reload Data to reset styles properly
            if (this.mode === 'orders') {
                this.loadOrderData();
            } else if (this.mode === 'performance') {
                this.loadPerformanceData();
            } else if (this.mode === 'revenue') {
                this.loadRevenueData();
            }

            // Manual overrides ensuring line styles (similar to previous approach to handle toggle back)
            if (this.mode === 'orders') {
                if (this.lineChartData.datasets[0]) {
                    this.lineChartData.datasets[0].backgroundColor = 'rgba(0,0,0,0.05)';
                    this.lineChartData.datasets[0].borderColor = '#000000';
                }
                if (this.lineChartData.datasets[1]) {
                    this.lineChartData.datasets[1].backgroundColor = 'transparent';
                    this.lineChartData.datasets[1].borderColor = '#aaaaaa';
                    (this.lineChartData.datasets[1] as any).borderDash = [5, 5];
                }
            } else if (this.mode === 'performance') {
                const green = '#28a745';
                const red = '#dc3545';
                if (this.lineChartData.datasets[0]) {
                    this.lineChartData.datasets[0].backgroundColor = 'rgba(40, 167, 69, 0.1)';
                    this.lineChartData.datasets[0].borderColor = green;
                }
                if (this.lineChartData.datasets[1]) {
                    this.lineChartData.datasets[1].backgroundColor = 'transparent';
                    this.lineChartData.datasets[1].borderColor = red;
                    (this.lineChartData.datasets[1] as any).borderDash = [5, 5];
                }
            } else if (this.mode === 'revenue') {
                const purple = '#6f42c1';
                const blue = '#007bff';
                if (this.lineChartData.datasets[0]) {
                    this.lineChartData.datasets[0].backgroundColor = 'rgba(111, 66, 193, 0.1)';
                    this.lineChartData.datasets[0].borderColor = purple;
                }
                if (this.lineChartData.datasets[1]) {
                    this.lineChartData.datasets[1].backgroundColor = 'transparent';
                    this.lineChartData.datasets[1].borderColor = blue;
                    (this.lineChartData.datasets[1] as any).borderDash = [5, 5];
                }
            }
        }

        // Force re-render
        this.isChartVisible = false;
        setTimeout(() => {
            this.isChartVisible = true;
        }, 0);
    }

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }
}
