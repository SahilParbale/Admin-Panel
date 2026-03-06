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

    title = 'Order Analytics Dashboard – January 2026';
    dateRange = 'Jan 01 - Jan 31, 2026';

    // Enhanced Data Containers
    kpis: any[] = [];
    advancedKpis: any[] = [];
    tableData: any[] = [];

    // Revenue-specific data
    profitMargins: any[] = [];
    costBreakdown: any[] = [];
    collectionStats: any[] = [];
    revenueRisks: any[] = [];
    vendorPerformance: any[] = [];
    hourlyDistribution: any[] = [];

    // Chart Configurations
    public lineChartData: ChartConfiguration['data'] = { datasets: [] };
    public areaChartData: ChartConfiguration['data'] = { datasets: [] };
    public barChartData: ChartConfiguration['data'] = { datasets: [] };
    public radarChartData: ChartConfiguration['data'] = { datasets: [] };
    
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

    public areaChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: 'rgba(0,0,0,0.05)' }, beginAtZero: true }
        }
    };

    public barChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: 'rgba(0,0,0,0.05)' }, beginAtZero: true }
        }
    };

    public radarChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true, position: 'bottom', labels: { usePointStyle: true, boxWidth: 8 } }
        },
        scales: {
            r: {
                grid: { color: 'rgba(0,0,0,0.1)' },
                pointLabels: { font: { size: 12 } }
            }
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
        this.title = 'Fruit Delivery Revenue Profile – January 2026';

        // Primary KPIs for Fruit Business - Enhanced with more metrics
        this.kpis = [
            { label: 'Total Revenue', value: '₹3.87L', change: '+18%', isPositive: true, icon: 'bx-rupee' },
            { label: 'Net Profit', value: '₹92,450', change: '+22%', isPositive: true, icon: 'bx-trending-up' },
            { label: 'Operating Costs', value: '₹1.24L', change: '+8%', isPositive: false, icon: 'bx-wallet' },
            { label: 'Avg Order Value', value: '₹910', change: '+8%', isPositive: true, icon: 'bx-shopping-bag' },
            { label: 'Gross Margin', value: '₹2.63L', change: '+15%', isPositive: true, icon: 'bx-pie-chart' },
            { label: 'Tax & Fees', value: '₹18,500', change: '+5%', isPositive: false, icon: 'bx-receipt' }
        ];

        // Advanced Metrics - Fruit Specific - Expanded
        this.advancedKpis = [
            { label: 'Top Seller', value: 'Bananas', revenue: '₹42,500', percentage: '11%' },
            { label: 'Premium Fruits', value: 'Exotic', revenue: '₹1.29L', percentage: '33%' },
            { label: 'Wastage Rate', value: '3.8%', trend: '-1.5%', status: 'good' },
            { label: 'Profit Margin', value: '23.9%', rating: '95%', status: 'excellent' },
            { label: 'Daily Avg', value: '₹12,480', trend: '+12%', status: 'excellent' },
            { label: 'Return Rate', value: '1.2%', trend: '-0.8%', status: 'good' }
        ];

        // Revenue by Category (Fruit Categories) - More categories
        this.vendorPerformance = [
            { vendor: 'Tropical Fruits', orders: 1280, revenue: '₹1,15,200', rating: 4.7, growth: '+22%' },
            { vendor: 'Exotic Fruits', orders: 720, revenue: '₹1,29,600', rating: 4.8, growth: '+28%' },
            { vendor: 'Citrus Fruits', orders: 980, revenue: '₹88,200', rating: 4.5, growth: '+15%' },
            { vendor: 'Berries', orders: 580, revenue: '₹87,000', rating: 4.6, growth: '+18%' },
            { vendor: 'Combos & Packs', orders: 450, revenue: '₹40,500', rating: 4.4, growth: '+12%' },
            { vendor: 'Seasonal Fruits', orders: 380, revenue: '₹34,200', rating: 4.5, growth: '+10%' },
            { vendor: 'Dry Fruits', orders: 290, revenue: '₹52,200', rating: 4.7, growth: '+25%' },
            { vendor: 'Organic Range', orders: 220, revenue: '₹39,600', rating: 4.8, growth: '+30%' }
        ];

        // Hourly Revenue Distribution - More time slots
        this.hourlyDistribution = [
            { hour: '6AM', orders: 12400, percentage: 25 },
            { hour: '8AM', orders: 18500, percentage: 38 },
            { hour: '10AM', orders: 28400, percentage: 58 },
            { hour: '12PM', orders: 42800, percentage: 88 },
            { hour: '2PM', orders: 35600, percentage: 73 },
            { hour: '4PM', orders: 46200, percentage: 95 },
            { hour: '6PM', orders: 48900, percentage: 100 },
            { hour: '8PM', orders: 32400, percentage: 66 },
            { hour: '10PM', orders: 19800, percentage: 40 }
        ];

        // Revenue Trend Chart - Green for profit/growth - More data points
        const greenColor = '#28a745';
        const orangeColor = '#ffc107';

        this.lineChartData = {
            labels: ['Jan 01', 'Jan 03', 'Jan 05', 'Jan 07', 'Jan 09', 'Jan 11', 'Jan 13', 'Jan 15', 'Jan 17', 'Jan 19', 'Jan 21', 'Jan 23', 'Jan 25', 'Jan 27', 'Jan 29', 'Jan 30'],
            datasets: [
                {
                    data: [85000, 87000, 92000, 89000, 88000, 94000, 98000, 96000, 105000, 108000, 112000, 115000, 118000, 120000, 122000, 124000],
                    label: 'Revenue',
                    fill: true,
                    tension: 0.4,
                    borderColor: greenColor,
                    backgroundColor: (ctx: any) => {
                        const chartCtx = ctx.chart.ctx;
                        const gradient = chartCtx.createLinearGradient(0, 0, 0, 300);
                        gradient.addColorStop(0, 'rgba(40, 167, 69, 0.3)');
                        gradient.addColorStop(1, 'rgba(40, 167, 69, 0.01)');
                        return gradient;
                    },
                    pointBackgroundColor: greenColor,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: greenColor,
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 3
                },
                {
                    data: [18000, 19000, 22000, 20000, 19000, 23000, 25000, 24000, 28000, 29000, 32000, 34000, 35000, 36000, 37000, 38000],
                    label: 'Profit',
                    fill: false,
                    tension: 0.4,
                    borderColor: orangeColor,
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: orangeColor,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: orangeColor,
                    pointHoverBorderColor: '#fff'
                }
            ]
        };

        // Area Chart - Weekly Revenue Breakdown - All 4 weeks
        this.areaChartData = {
            labels: ['Week 1 (1-7)', 'Week 2 (8-14)', 'Week 3 (15-21)', 'Week 4 (22-28)', 'Week 5 (29-31)'],
            datasets: [
                {
                    data: [85000, 95400, 92800, 114000, 42000],
                    label: 'Revenue',
                    fill: true,
                    tension: 0.4,
                    borderColor: '#28a745',
                    backgroundColor: (ctx: any) => {
                        const chartCtx = ctx.chart.ctx;
                        const gradient = chartCtx.createLinearGradient(0, 0, 0, 300);
                        gradient.addColorStop(0, 'rgba(40, 167, 69, 0.3)');
                        gradient.addColorStop(1, 'rgba(40, 167, 69, 0.01)');
                        return gradient;
                    },
                    pointBackgroundColor: '#28a745',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        };

        // Bar Chart - Revenue by Fruit Type - More fruits
        this.barChartData = {
            labels: ['Banana', 'Mango', 'Apple', 'Orange', 'Papaya', 'Pineapple', 'Exotic', 'Berries', 'Grapes'],
            datasets: [
                {
                    data: [42500, 38000, 35000, 28000, 25000, 22000, 129600, 29000, 24000],
                    label: 'Revenue',
                    backgroundColor: [
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(253, 126, 20, 0.8)',
                        'rgba(220, 53, 69, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 205, 86, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(111, 66, 193, 0.8)',
                        'rgba(232, 62, 140, 0.8)',
                        'rgba(102, 16, 242, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 193, 7, 1)',
                        'rgba(253, 126, 20, 1)',
                        'rgba(220, 53, 69, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(111, 66, 193, 1)',
                        'rgba(232, 62, 140, 1)',
                        'rgba(102, 16, 242, 1)'
                    ],
                    borderWidth: 1,
                    borderRadius: 8
                }
            ]
        };

        // Radar Chart - Business Performance - More dimensions
        this.radarChartData = {
            labels: ['Revenue Growth', 'Profit Margin', 'Cost Efficiency', 'Order Volume', 'Customer Retention', 'Avg Order Value', 'Inventory Turnover', 'Market Share'],
            datasets: [
                {
                    data: [88, 92, 85, 90, 87, 82, 84, 79],
                    label: 'Current Month',
                    fill: true,
                    backgroundColor: 'rgba(40, 167, 69, 0.2)',
                    borderColor: '#28a745',
                    pointBackgroundColor: '#28a745',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#28a745'
                },
                {
                    data: [78, 82, 88, 85, 80, 79, 81, 72],
                    label: 'Previous Month',
                    fill: true,
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: '#007bff',
                    pointBackgroundColor: '#007bff',
                    pointBorderColor: '#fff'
                }
            ]
        };

        this.doughnutChartData = {
            labels: ['Product Sales', 'Combo Packs', 'Delivery Fees', 'Premium Fruits', 'Other'],
            datasets: [
                {
                    data: [320000, 40500, 18000, 52200, 8500],
                    backgroundColor: ['#28a745', '#ffc107', '#17a2b8', '#6f42c1', '#6c757d'],
                    hoverBackgroundColor: ['#218838', '#e0a800', '#138496', '#5a3dc1', '#5a6268'],
                    borderWidth: 3,
                    borderColor: '#ffffff',
                    hoverOffset: 8
                }
            ]
        };

        // Daily Revenue Table - More days
        this.tableData = [
            { date: 'Jan 30', total: '₹12,400', completed: '₹11,850', cancelled: '₹550', rate: '95.6%', status: 'Excellent' },
            { date: 'Jan 29', total: '₹10,200', completed: '₹9,520', cancelled: '₹680', rate: '93.3%', status: 'Good' },
            { date: 'Jan 28', total: '₹5,800', completed: '₹5,340', cancelled: '₹460', rate: '92.1%', status: 'Good' },
            { date: 'Jan 27', total: '₹9,400', completed: '₹8,930', cancelled: '₹470', rate: '95.0%', status: 'Excellent' },
            { date: 'Jan 26', total: '₹11,200', completed: '₹10,360', cancelled: '₹840', rate: '92.5%', status: 'Good' },
            { date: 'Jan 25', total: '₹8,900', completed: '₹8,280', cancelled: '₹620', rate: '93.0%', status: 'Good' },
            { date: 'Jan 24', total: '₹7,600', completed: '₹7,070', cancelled: '₹530', rate: '93.0%', status: 'Good' },
            { date: 'Jan 23', total: '₹10,800', completed: '₹10,150', cancelled: '₹650', rate: '94.0%', status: 'Excellent' },
            { date: 'Jan 22', total: '₹9,200', completed: '₹8,560', cancelled: '₹640', rate: '93.0%', status: 'Good' },
            { date: 'Jan 21', total: '₹11,500', completed: '₹10,810', cancelled: '₹690', rate: '94.0%', status: 'Excellent' }
        ];

        // Profit Margin Trend Data
        this.profitMargins = [
            { period: 'Week 1', percentage: 21.2 },
            { period: 'Week 2', percentage: 23.1 },
            { period: 'Week 3', percentage: 22.6 },
            { period: 'Week 4', percentage: 25.4 },
            { period: 'Month Avg', percentage: 23.9 }
        ];

        // Operating Cost Breakdown (in thousands)
        this.costBreakdown = [
            { label: 'Procurement Costs', amount: 485, percentage: 39.1, icon: 'bx-cart' },
            { label: 'Cold Storage', amount: 248, percentage: 20.0, icon: 'bx-snowflake' },
            { label: 'Delivery & Logistics', amount: 223, percentage: 18.0, icon: 'bx-truck' },
            { label: 'Packaging', amount: 124, percentage: 10.0, icon: 'bx-package' },
            { label: 'Wastage Loss', amount: 87, percentage: 7.0, icon: 'bx-trash' },
            { label: 'Administrative', amount: 73, percentage: 5.9, icon: 'bx-briefcase' }
        ];

        // Collection Efficiency Stats
        this.collectionStats = [
            { type: 'upi', value: 97.8, label: 'UPI Collections', pathD: 'M18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831' },
            { type: 'card', value: 94.5, label: 'Card Payments', pathD: 'M18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831' },
            { type: 'cash', value: 89.2, label: 'Cash on Delivery', pathD: 'M18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831' },
            { type: 'wallet', value: 92.3, label: 'Wallet Payments', pathD: 'M18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831' }
        ];

        // Revenue Risk Assessment
        this.revenueRisks = [
            { 
                title: 'High Wastage Rate', 
                severity: 'high', 
                icon: 'bx-error-circle',
                description: 'Perishable inventory loss exceeding target threshold',
                impact: 18500
            },
            { 
                title: 'Payment Gateway Failures', 
                severity: 'medium', 
                icon: 'bx-wifi-off',
                description: 'Failed transactions during peak hours affecting collections',
                impact: 8200
            },
            { 
                title: 'Cold Chain Disruption', 
                severity: 'medium', 
                icon: 'bx-thermometer',
                description: 'Temperature fluctuations impacting premium fruit quality',
                impact: 12400
            },
            { 
                title: 'Delivery Delays', 
                severity: 'low', 
                icon: 'bx-time',
                description: 'Late deliveries causing order cancellations',
                impact: 5600
            }
        ];
    }

    loadOrderData() {
        this.title = 'Fruit Delivery Analytics – January 2026';

        // Primary KPIs
        this.kpis = [
            { label: 'Total Orders', value: '4,250', change: '+12%', isPositive: true, icon: 'bx-package' },
            { label: 'Total Revenue', value: '₹3.87L', change: '+18%', isPositive: true, icon: 'bx-rupee' },
            { label: 'Completion Rate', value: '94.2%', change: '+3.1%', isPositive: true, icon: 'bx-check-circle' },
            { label: 'Avg Order Value', value: '₹910', change: '+8%', isPositive: true, icon: 'bx-trending-up' }
        ];

        // Advanced Metrics
        this.advancedKpis = [
            { label: 'Peak Hour', value: '5-7 PM', orders: '1,450', percentage: '34%' },
            { label: 'Top Category', value: 'Tropical', orders: '1,280', percentage: '30%' },
            { label: 'Return Rate', value: '2.1%', trend: '-1.2%', status: 'good' },
            { label: 'Customer Rating', value: '4.6/5', rating: '92%', status: 'excellent' }
        ];

        // Vendor Performance Data (Fruit Categories)
        this.vendorPerformance = [
            { vendor: 'Tropical Fruits', orders: 1280, revenue: '₹1,15,200', rating: 4.7, growth: '+22%' },
            { vendor: 'Citrus Fruits', orders: 980, revenue: '₹88,200', rating: 4.5, growth: '+15%' },
            { vendor: 'Exotic Fruits', orders: 720, revenue: '₹1,29,600', rating: 4.8, growth: '+28%' },
            { vendor: 'Berries', orders: 580, revenue: '₹87,000', rating: 4.6, growth: '+18%' },
            { vendor: 'Combos & Packs', orders: 450, revenue: '₹40,500', rating: 4.4, growth: '+12%' }
        ];

        // Hourly Distribution
        this.hourlyDistribution = [
            { hour: '8AM', orders: 180, percentage: 35 },
            { hour: '10AM', orders: 280, percentage: 55 },
            { hour: '12PM', orders: 420, percentage: 82 },
            { hour: '2PM', orders: 350, percentage: 68 },
            { hour: '4PM', orders: 480, percentage: 94 },
            { hour: '6PM', orders: 510, percentage: 100 },
            { hour: '8PM', orders: 320, percentage: 63 }
        ];

        // Trend Chart Data - Fruit Orders
        const gradientPrimary = '#000000';
        const cancelColor = '#aaaaaa';

        this.lineChartData = {
            labels: ['Jan 01', 'Jan 05', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'],
            datasets: [
                {
                    data: [120, 150, 110, 180, 220, 190, 250],
                    label: 'Completed Orders',
                    fill: true,
                    tension: 0.4,
                    borderColor: gradientPrimary,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    pointBackgroundColor: gradientPrimary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: gradientPrimary,
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 3
                },
                {
                    data: [20, 30, 15, 25, 40, 35, 20],
                    label: 'Cancelled Orders',
                    fill: false,
                    tension: 0.4,
                    borderColor: cancelColor,
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: cancelColor,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: cancelColor,
                    pointHoverBorderColor: '#fff'
                }
            ]
        };

        // Area Chart - Revenue Trend
        this.areaChartData = {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    data: [85000, 95400, 92800, 114000],
                    label: 'Revenue',
                    fill: true,
                    tension: 0.4,
                    borderColor: '#28a745',
                    backgroundColor: (ctx: any) => {
                        const chartCtx = ctx.chart.ctx;
                        const gradient = chartCtx.createLinearGradient(0, 0, 0, 300);
                        gradient.addColorStop(0, 'rgba(40, 167, 69, 0.3)');
                        gradient.addColorStop(1, 'rgba(40, 167, 69, 0.01)');
                        return gradient;
                    },
                    pointBackgroundColor: '#28a745',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        };

        // Bar Chart - Top Selling Fruits
        this.barChartData = {
            labels: ['Banana', 'Apple', 'Mango', 'Orange', 'Papaya', 'Pineapple', 'Grapes'],
            datasets: [
                {
                    data: [850, 720, 680, 620, 580, 520, 480],
                    label: 'Orders',
                    backgroundColor: [
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(220, 53, 69, 0.8)',
                        'rgba(253, 126, 20, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 205, 86, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(111, 66, 193, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 193, 7, 1)',
                        'rgba(220, 53, 69, 1)',
                        'rgba(253, 126, 20, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(111, 66, 193, 1)'
                    ],
                    borderWidth: 1,
                    borderRadius: 8
                }
            ]
        };

        // Radar Chart - Performance Metrics
        this.radarChartData = {
            labels: ['Delivery Speed', 'Fruit Quality', 'Packaging', 'Pricing', 'Freshness', 'Customer Service'],
            datasets: [
                {
                    data: [94, 92, 88, 85, 93, 91],
                    label: 'Current Month',
                    fill: true,
                    backgroundColor: 'rgba(40, 167, 69, 0.2)',
                    borderColor: '#28a745',
                    pointBackgroundColor: '#28a745',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#28a745'
                },
                {
                    data: [88, 87, 85, 88, 89, 87],
                    label: 'Previous Month',
                    fill: true,
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: '#007bff',
                    pointBackgroundColor: '#007bff',
                    pointBorderColor: '#fff'
                }
            ]
        };

        this.doughnutChartData = {
            labels: ['Delivered', 'Cancelled', 'Pending'],
            datasets: [
                {
                    data: [4005, 85, 160],
                    backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
                    hoverBackgroundColor: ['#218838', '#c82333', '#e0a800'],
                    borderWidth: 3,
                    borderColor: '#ffffff',
                    hoverOffset: 8
                }
            ]
        };

        this.tableData = [
            { date: 'Jan 30', total: 270, completed: 258, cancelled: 12, rate: '95.6%', status: 'Excellent' },
            { date: 'Jan 29', total: 225, completed: 210, cancelled: 15, rate: '93.3%', status: 'Good' },
            { date: 'Jan 28', total: 125, completed: 115, cancelled: 10, rate: '92.0%', status: 'Good' },
            { date: 'Jan 27', total: 205, completed: 195, cancelled: 10, rate: '95.1%', status: 'Excellent' },
            { date: 'Jan 26', total: 260, completed: 240, cancelled: 20, rate: '92.3%', status: 'Good' },
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

    getStars(rating: number): number[] {
        const fullStars = Math.floor(rating);
        return Array(fullStars).fill(0);
    }

    parseFloat(value: string): number {
        return parseFloat(value);
    }

    getDoughnutColor(index: number): string {
        const colors = ['#28a745', '#ffc107', '#17a2b8', '#6c757d'];
        return colors[index] || '#cccccc';
    }

    getDoughnutData(index: number): number {
        const data = [320000, 40500, 18000, 8500];
        return data[index] || 0;
    }

    getGradientForIndex(index: number): string {
        const gradients = [
            'background: linear-gradient(135deg, #28a745 0%, #20c997 100%)',
            'background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%)',
            'background: linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)',
            'background: linear-gradient(135deg, #17a2b8 0%, #138496 100)'
        ];
        return gradients[index] || gradients[0];
    }

    getGradientForVendor(vendorName: string): string {
        const vendorGradients: { [key: string]: string } = {
            'Tropical Fruits': 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
            'Exotic Fruits': 'linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%)',
            'Citrus Fruits': 'linear-gradient(135deg, #fd7e14 0%, #ffc107 100%)',
            'Berries': 'linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)',
            'Combos & Packs': 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)'
        };
        return vendorGradients[vendorName] || 'linear-gradient(135deg, #6c757d 0%, #495057 100%)';
    }

    getMarketSharePercentage(revenue: string): number {
        const totalRevenue = 387000; // Total from all categories
        const revenueNum = parseFloat(revenue.replace(/[^0-9.-]+/g, ''));
        return (revenueNum / totalRevenue) * 100;
    }

    calculateAvgOrderValue(revenue: string, orders: number): number {
        const revenueNum = parseFloat(revenue.replace(/[^0-9.-]+/g, ''));
        return revenueNum / orders;
    }

    getCostColor(index: number): string {
        const colors = [
            'background: linear-gradient(135deg, #28a745 0%, #20c997 100%)',
            'background: linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
            'background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%)',
            'background: linear-gradient(135deg, #fd7e14 0%, #e83e8c 100%)',
            'background: linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
            'background: linear-gradient(135deg, #6f42c1 0%, #5a3dc1 100)'
        ];
        return colors[index] || colors[0];
    }

    getRingGradient(type: string): string {
        const gradients: { [key: string]: string } = {
            'upi': 'background: linear-gradient(135deg, #28a745 0%, #20c997 100%)',
            'card': 'background: linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
            'cash': 'background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%)',
            'wallet': 'background: linear-gradient(135deg, #6f42c1 0%, #5a3dc1 100)'
        };
        return gradients[type] || gradients['upi'];
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }
}
