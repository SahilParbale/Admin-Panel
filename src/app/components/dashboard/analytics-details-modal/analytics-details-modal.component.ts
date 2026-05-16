import { Component, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-analytics-details-modal',
    templateUrl: './analytics-details-modal.component.html',
    styleUrls: ['./analytics-details-modal.component.scss'],
    standalone: true,
    imports: [CommonModule, BaseChartDirective]
})
export class AnalyticsDetailsModalComponent implements OnInit, OnChanges {
    // Shared Analytics Modal for Dashboard, Pricing, and User Management
    @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
    @Input() isOpen = false;
    @Input() dummyTrigger = 0;
    @Input() mode: 'orders' | 'performance' | 'revenue' | 'product' | 'user' | 'user-ratio' | 'user-order-freq' | 'user-clv' | 'rider-deliveries' | 'finance-perf' | 'finance-revenue' | 'finance-efficiency' | 'finance-flow' | 'sales-order' | 'sales-category' | 'sales-waterfall' | 'sales-cost' | 'sales-zone' = 'orders';
    @Output() close = new EventEmitter<void>();

    title = 'Order Analytics Dashboard – January 2026';
    dateRange = 'Jan 01 - Jan 31, 2026';

    // Enhanced Data Containers
    kpis: any[] = [];
    advancedKpis: any[] = [];
    tableData: any[] = [];

    // Performance-specific table data
    performanceZoneData: any[] = [];
    performancePeakHours: any[] = [];
    performanceInsights: any[] = [];

    // Revenue-specific data
    profitMargins: any[] = [];
    costBreakdown: any[] = [];
    collectionStats: any[] = [];
    revenueRisks: any[] = [];
    vendorPerformance: any[] = [];
    hourlyDistribution: any[] = [];

    // Product-specific data
    productData: any[] = [];

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
        this.isChartVisible = false; // Trigger re-animation
        
        if (this.mode === 'performance') {
            this.loadPerformanceData();
        } else if (this.mode === 'revenue') {
            this.loadRevenueData();
        } else if (this.mode === 'product') {
            this.loadProductData();
        } else if (this.mode === 'user') {
            this.loadUserData();
        } else if (this.mode === 'user-ratio') {
            this.loadUserRatioData();
        } else if (this.mode === 'user-order-freq') {
            this.loadUserOrderFreqData();
        } else if (this.mode === 'user-clv') {
            this.loadUserClvData();
        } else if (this.mode === 'rider-deliveries') {
            this.loadRiderDeliveriesData();
        } else if (this.mode === 'finance-perf') {
            this.loadFinancePerfData();
        } else if (this.mode === 'finance-revenue') {
            this.loadFinanceRevenueData();
        } else if (this.mode === 'finance-efficiency') {
            this.loadFinanceEfficiencyData();
        } else if (this.mode === 'finance-flow') {
            this.loadFinanceFlowData();
        } else if (this.mode === 'sales-order') {
            this.loadSalesOrderData();
        } else if (this.mode === 'sales-category') {
            this.loadSalesCategoryData();
        } else if (this.mode === 'sales-waterfall') {
            this.loadSalesWaterfallData();
        } else if (this.mode === 'sales-cost') {
            this.loadSalesCostData();
        } else if (this.mode === 'sales-zone') {
            this.loadSalesZoneData();
        } else {
            this.loadOrderData();
        }

        setTimeout(() => {
            this.isChartVisible = true;
        }, 100);
    }

    loadUserRatioData() {
        this.title = 'New vs Returning User Analysis – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';

        this.kpis = [
            { label: 'Retention Rate', value: '68.4%', change: '+2.4%', isPositive: true, icon: 'bx-refresh' },
            { label: 'Churn Rate', value: '3.2%', change: '-0.5%', isPositive: true, icon: 'bx-trending-down' },
            { label: 'Avg LTV', value: '₹4,850', change: '+15%', isPositive: true, icon: 'bx-diamond' },
            { label: 'CAC', value: '₹210', change: '-12%', isPositive: true, icon: 'bx-target-lock' },
            { label: 'Returning Users', value: '24.4k', change: '+8%', isPositive: true, icon: 'bx-user-voice' },
            { label: 'New Users', value: '18.4k', change: '+18%', isPositive: true, icon: 'bx-user-plus' }
        ];

        this.advancedKpis = [
            { label: 'Repeat Ratio', value: '62.4%', percentage: '62.4%', status: 'excellent' },
            { label: 'Loyalty Score', value: '8.4/10', percentage: '84%', status: 'excellent' },
            { label: 'Referral Rate', value: '12.8%', percentage: '12.8%', status: 'good' },
            { label: 'Reacted Users', value: '1,420', percentage: '14%', status: 'good' }
        ];

        this.tableData = [
            { date: 'Jan 31', total: '42.8k', completed: '24.4k', cancelled: '18.4k', rate: '57.0%', status: 'Stable' },
            { date: 'Jan 24', total: '41.2k', completed: '23.1k', cancelled: '18.1k', rate: '56.1%', status: 'Stable' },
            { date: 'Jan 17', total: '39.8k', completed: '22.0k', cancelled: '17.8k', rate: '55.3%', status: 'Improving' },
            { date: 'Jan 10', total: '38.4k', completed: '21.2k', cancelled: '17.2k', rate: '55.2%', status: 'Stable' },
            { date: 'Jan 03', total: '36.8k', completed: '20.1k', cancelled: '16.7k', rate: '54.6%', status: 'Initial' }
        ];

        this.vendorPerformance = [
            { vendor: 'Returning (Power)', orders: 8400, revenue: '45.7%', rating: 4.9, growth: '+12%' },
            { vendor: 'Returning (Casual)', orders: 16000, revenue: '32.1%', rating: 4.6, growth: '+8%' },
            { vendor: 'New (Referral)', orders: 6800, revenue: '14.2%', rating: 4.8, growth: '+35%' },
            { vendor: 'New (Direct)', orders: 11600, revenue: '8.0%', rating: 4.4, growth: '+12%' }
        ];
    }

    loadUserOrderFreqData() {
        this.title = 'User Order Frequency Analysis – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';

        this.kpis = [
            { label: 'Avg Orders / User', value: '6.8', change: '+1.2', isPositive: true, icon: 'bx-cart-alt' },
            { label: 'Power Users (21+)', value: '980', change: '+18%', isPositive: true, icon: 'bx-crown' },
            { label: 'One-Time Buyers', value: '2,450', change: '-8%', isPositive: true, icon: 'bx-user-x' },
            { label: 'Frequency Score', value: '7.4/10', change: '+0.6', isPositive: true, icon: 'bx-bar-chart' },
            { label: 'Repeat Purchase %', value: '62.4%', change: '+3.1%', isPositive: true, icon: 'bx-refresh' },
            { label: 'Orders This Month', value: '18,420', change: '+14%', isPositive: true, icon: 'bx-package' }
        ];

        this.advancedKpis = [
            { label: 'Most Common Bucket', value: '1–5 Orders', percentage: '46%', status: 'good' },
            { label: 'High-Value Bucket', value: '21+ Orders', percentage: '8%', status: 'excellent' },
            { label: 'Avg Basket Size', value: '₹910', trend: '+8%', status: 'excellent' },
            { label: 'Order Interval', value: '4.2 days', trend: '-0.8d', status: 'good' }
        ];

        this.tableData = [
            { date: '1–5 Orders',   total: 4500, completed: 450,   cancelled: 82500,   rate: '46.0%', status: 'Casual' },
            { date: '6–10 Orders',  total: 3000, completed: 300,   cancelled: 225000,  rate: '30.6%', status: 'Regular' },
            { date: '11–20 Orders', total: 1500, completed: 150,   cancelled: 202500,  rate: '15.3%', status: 'Frequent' },
            { date: '21+ Orders',   total: 980,  completed: 80,    cancelled: 412000,  rate: '10.0%', status: 'Power' }
        ];

        this.vendorPerformance = [
            { vendor: '1–5 Orders (Casual)', orders: 4500, revenue: '₹82,500', rating: 4.2, growth: '+5%' },
            { vendor: '6–10 Orders (Regular)', orders: 3000, revenue: '₹2,25,000', rating: 4.5, growth: '+12%' },
            { vendor: '11–20 Orders (Frequent)', orders: 1500, revenue: '₹2,02,500', rating: 4.7, growth: '+18%' },
            { vendor: '21+ Orders (Power)', orders: 980, revenue: '₹4,12,000', rating: 4.9, growth: '+25%' }
        ];
    }

    loadUserClvData() {
        this.title = 'Customer Lifetime Value Analysis – Jan 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';

        this.kpis = [
            { label: 'Avg CLV', value: '₹4,850', change: '+15%', isPositive: true, icon: 'bx-diamond' },
            { label: 'Top Tier LTV', value: '₹18,400', change: '+22%', isPositive: true, icon: 'bx-crown' },
            { label: 'Payback Period', value: '3.2 months', change: '-0.4m', isPositive: true, icon: 'bx-time-five' },
            { label: 'CAC', value: '₹210', change: '-12%', isPositive: true, icon: 'bx-target-lock' },
            { label: 'LTV : CAC Ratio', value: '23.1x', change: '+2.8x', isPositive: true, icon: 'bx-trending-up' },
            { label: 'Avg Lifespan', value: '14 months', change: '+2m', isPositive: true, icon: 'bx-calendar-check' }
        ];

        this.advancedKpis = [
            { label: 'Platinum Tier (₹10k+)', value: '1,240 users', percentage: '12%', status: 'excellent' },
            { label: 'Gold Tier (₹5–10k)', value: '3,800 users', percentage: '38%', status: 'good' },
            { label: 'Silver Tier (₹2–5k)', value: '4,200 users', percentage: '42%', status: 'good' },
            { label: 'Bronze Tier (<₹2k)', value: '800 users', percentage: '8%', status: 'avg' }
        ];

        this.tableData = [
            { date: 'Jan 2026', total: '₹4,850', completed: '₹18,400', cancelled: '₹1,980', rate: '23.1x', status: 'Excellent' },
            { date: 'Dec 2025', total: '₹4,220', completed: '₹16,800', cancelled: '₹1,820', rate: '20.1x', status: 'Good' },
            { date: 'Nov 2025', total: '₹3,980', completed: '₹15,200', cancelled: '₹1,750', rate: '18.9x', status: 'Good' },
            { date: 'Oct 2025', total: '₹3,740', completed: '₹14,100', cancelled: '₹1,640', rate: '17.8x', status: 'Good' },
            { date: 'Sep 2025', total: '₹3,500', completed: '₹12,800', cancelled: '₹1,580', rate: '16.7x', status: 'Average' }
        ];

        this.vendorPerformance = [
            { vendor: 'Platinum (₹10k+)', orders: 1240, revenue: '₹2,28,16,000', rating: 4.9, growth: '+22%' },
            { vendor: 'Gold (₹5–10k)', orders: 3800, revenue: '₹2,66,00,000', rating: 4.7, growth: '+18%' },
            { vendor: 'Silver (₹2–5k)', orders: 4200, revenue: '₹1,47,00,000', rating: 4.5, growth: '+12%' },
            { vendor: 'Bronze (<₹2k)', orders: 800, revenue: '₹11,20,000', rating: 4.2, growth: '+5%' }
        ];

        this.profitMargins = [
            { period: 'Platinum', percentage: 88 },
            { period: 'Gold', percentage: 72 },
            { period: 'Silver', percentage: 55 },
            { period: 'Bronze', percentage: 32 }
        ];
    }

    loadRiderDeliveriesData() {
        this.title = 'Deliveries Per Rider – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';

        this.kpis = [
            { label: 'Avg Deliveries/Rider', value: '136.4', change: '+14%', isPositive: true, icon: 'bx-cycling' },
            { label: 'Top Performer', value: 'Taylor (180)', change: '+22%', isPositive: true, icon: 'bx-crown' },
            { label: 'Total Deliveries', value: '955', change: '+18%', isPositive: true, icon: 'bx-package' },
            { label: 'On-Time Rate', value: '91.4%', change: '+2.1%', isPositive: true, icon: 'bx-time-five' },
            { label: 'Active Riders', value: '7', change: '+1', isPositive: true, icon: 'bx-user-check' },
            { label: 'Avg Rating', value: '4.6 / 5', change: '+0.2', isPositive: true, icon: 'bx-star' }
        ];

        this.tableData = [
            { date: 'Taylor',  total: 180, completed: 167, cancelled: 13, rate: '92.8%', status: 'Excellent' },
            { date: 'Jordan',  total: 150, completed: 139, cancelled: 11, rate: '92.7%', status: 'Excellent' },
            { date: 'Pat',     total: 165, completed: 150, cancelled: 15, rate: '90.9%', status: 'Good' },
            { date: 'Alex',    total: 120, completed: 108, cancelled: 12, rate: '90.0%', status: 'Good' },
            { date: 'Sam',     total: 140, completed: 124, cancelled: 16, rate: '88.6%', status: 'Good' },
            { date: 'Micky',   total: 110, completed:  96, cancelled: 14, rate: '87.3%', status: 'Average' },
            { date: 'Chris',   total:  90, completed:  76, cancelled: 14, rate: '84.4%', status: 'Average' }
        ];

        this.vendorPerformance = [
            { vendor: 'Taylor',  orders: 180, revenue: '₹1,62,000', rating: 4.9, growth: '+22%' },
            { vendor: 'Jordan',  orders: 150, revenue: '₹1,35,000', rating: 4.8, growth: '+18%' },
            { vendor: 'Pat',     orders: 165, revenue: '₹1,48,500', rating: 4.7, growth: '+15%' },
            { vendor: 'Alex',    orders: 120, revenue: '₹1,08,000', rating: 4.5, growth: '+12%' },
            { vendor: 'Sam',     orders: 140, revenue: '₹1,26,000', rating: 4.5, growth: '+10%' },
            { vendor: 'Micky',   orders: 110, revenue: '₹99,000',   rating: 4.3, growth: '+8%' },
            { vendor: 'Chris',   orders:  90, revenue: '₹81,000',   rating: 4.1, growth: '+5%' }
        ];

        this.advancedKpis = [
            { label: 'Fastest Avg Time', value: 'Taylor – 26m', percentage: '90%', status: 'excellent' },
            { label: 'Most Consistent', value: 'Jordan', percentage: '85%', status: 'excellent' },
            { label: 'Most Improved', value: 'Sam (+14%)', percentage: '70%', status: 'good' },
            { label: 'Needs Support', value: 'Chris (84.4%)', percentage: '40%', status: 'avg' }
        ];
    }

    loadFinancePerfData() {
        this.title = 'Financial Performance Trends – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Avg Daily Revenue', value: '₹22,450', change: '+12%', isPositive: true, icon: 'bx-trending-up' },
            { label: 'Peak Profit Day', value: '₹7,200', change: '03 Feb', isPositive: true, icon: 'bx-diamond' },
            { label: 'Revenue Volatility', value: 'Low', change: '-2%', isPositive: true, icon: 'bx-line-chart' },
            { label: 'Weekly Growth', value: '+8.4%', change: '+1.2%', isPositive: true, icon: 'bx-bar-chart-alt-2' },
            { label: 'Profit Consistency', value: '92%', change: '+4%', isPositive: true, icon: 'bx-check-shield' },
            { label: 'Gross Margins', value: '23%', change: '+1%', isPositive: true, icon: 'bx-wallet' }
        ];
        this.tableData = [
            { date: 'Week 4', total: '₹1,58,400', completed: '₹1,14,000', cancelled: '₹28,400', rate: '24%', status: 'Excellent' },
            { date: 'Week 3', total: '₹1,42,000', completed: '₹1,02,000', cancelled: '₹24,500', rate: '23%', status: 'Good' },
            { date: 'Week 2', total: '₹1,35,000', completed: '₹98,000', cancelled: '₹22,100', rate: '22%', status: 'Good' },
            { date: 'Week 1', total: '₹1,25,000', completed: '₹89,000', cancelled: '₹19,000', rate: '21%', status: 'Average' }
        ];
        this.vendorPerformance = [];
        this.advancedKpis = [
            { label: 'Most Profitable Day', value: 'Sunday', percentage: '35%', status: 'excellent' },
            { label: 'Slowest Day', value: 'Tuesday', percentage: '12%', status: 'avg' },
            { label: 'Weekend Surge', value: '+45%', percentage: '80%', status: 'excellent' },
            { label: 'Target Hit Rate', value: '6/7 days', percentage: '85%', status: 'good' }
        ];
    }

    loadFinanceRevenueData() {
        this.title = 'Revenue Breakdown & Components – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Top Cost Center', value: 'Discounts', change: '18% of Rev', isPositive: false, icon: 'bx-pie-chart' },
            { label: 'Tax Liability', value: '₹31,000', change: '+5%', isPositive: false, icon: 'bx-receipt' },
            { label: 'Avg Rider Payout', value: '₹12,000/wk', change: '+2%', isPositive: true, icon: 'bx-cycling' },
            { label: 'Gateway Fee', value: '2.4%', change: 'Flat', isPositive: true, icon: 'bx-credit-card' },
            { label: 'Net Profit %', value: '16.5%', change: '+1.5%', isPositive: true, icon: 'bx-money' },
            { label: 'Deductions', value: '₹1.73L', change: '-4%', isPositive: true, icon: 'bx-minus-circle' }
        ];
        this.tableData = [];
        this.vendorPerformance = [
            { vendor: 'Net Profit', orders: 3410, revenue: '₹1,05,000', rating: 5.0, growth: '+15%' },
            { vendor: 'Rider Payouts', orders: 3410, revenue: '₹84,000', rating: 4.8, growth: '+10%' },
            { vendor: 'Discounts', orders: 1200, revenue: '₹61,000', rating: 3.5, growth: '-5%' },
            { vendor: 'Taxes', orders: 3410, revenue: '₹31,000', rating: 4.0, growth: '+2%' },
            { vendor: 'Gateway Fees', orders: 3410, revenue: '₹15,800', rating: 4.5, growth: '+8%' }
        ];
        this.advancedKpis = [
            { label: 'Profit Share', value: '₹1.05L', percentage: '45%', status: 'excellent' },
            { label: 'Rider Cost Share', value: '₹84k', percentage: '36%', status: 'good' },
            { label: 'Promo Burden', value: '₹61k', percentage: '26%', status: 'avg' },
            { label: 'Fixed Fees', value: '₹46.8k', percentage: '20%', status: 'good' }
        ];
    }

    loadFinanceEfficiencyData() {
        this.title = 'Operational Efficiency (Volume vs Margin) – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Avg Order Vol', value: '138/day', change: '+12', isPositive: true, icon: 'bx-package' },
            { label: 'Max Margin', value: '28%', change: '03 Feb', isPositive: true, icon: 'bx-crown' },
            { label: 'Volume Efficiency', value: 'High', change: '+5%', isPositive: true, icon: 'bx-bar-chart' },
            { label: 'Avg Profit/Order', value: '₹45', change: '+₹4', isPositive: true, icon: 'bx-coin-stack' },
            { label: 'Optimum Volume', value: '150-160', change: 'Orders/day', isPositive: true, icon: 'bx-target-lock' },
            { label: 'Scale Factor', value: '1.2x', change: '+0.1x', isPositive: true, icon: 'bx-expand' }
        ];
        this.tableData = [
            { date: '03 Feb', total: 162, completed: '₹31,200', cancelled: '₹7,200', rate: '28%', status: 'Excellent' },
            { date: '02 Feb', total: 148, completed: '₹26,800', cancelled: '₹5,800', rate: '26%', status: 'Good' },
            { date: '01 Feb', total: 135, completed: '₹23,500', cancelled: '₹4,900', rate: '23%', status: 'Good' },
            { date: '31 Jan', total: 128, completed: '₹24,600', cancelled: '₹4,500', rate: '25%', status: 'Good' },
            { date: '30 Jan', total: 115, completed: '₹19,800', cancelled: '₹4,100', rate: '24%', status: 'Average' }
        ];
        this.vendorPerformance = [];
        this.advancedKpis = [
            { label: 'High Vol/High Margin', value: '03 Feb', percentage: '95%', status: 'excellent' },
            { label: 'Low Vol/High Margin', value: '31 Jan', percentage: '75%', status: 'good' },
            { label: 'High Vol/Low Margin', value: 'None', percentage: '20%', status: 'avg' },
            { label: 'Overall Efficiency', value: 'B+', percentage: '82%', status: 'good' }
        ];
    }

    loadFinanceFlowData() {
        this.title = 'Money Flow (Revenue to Profit) – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Gross Revenue', value: '₹6.35L', change: '+18%', isPositive: true, icon: 'bx-money' },
            { label: 'Total Deductions', value: '₹5.30L', change: '+12%', isPositive: false, icon: 'bx-minus-circle' },
            { label: 'Net Profit', value: '₹1.05L', change: '+25%', isPositive: true, icon: 'bx-wallet' },
            { label: 'Leakage Rate', value: '11.5%', change: '-2%', isPositive: true, icon: 'bx-water' },
            { label: 'Realization %', value: '16.5%', change: '+1.5%', isPositive: true, icon: 'bx-pie-chart-alt-2' },
            { label: 'Cash Flow', value: 'Healthy', change: 'Surplus', isPositive: true, icon: 'bx-check-shield' }
        ];
        this.tableData = [];
        this.vendorPerformance = [
            { vendor: 'Gross Revenue', orders: '-', revenue: '₹6,35,200', rating: 5.0, growth: 'Baseline' },
            { vendor: 'Discounts', orders: '-', revenue: '-₹61,000', rating: 4.2, growth: 'Leakage' },
            { vendor: 'Refunds', orders: '-', revenue: '-₹12,400', rating: 4.0, growth: 'Leakage' },
            { vendor: 'Gateway Charges', orders: '-', revenue: '-₹15,800', rating: 4.5, growth: 'Cost' },
            { vendor: 'Rider Payouts', orders: '-', revenue: '-₹84,000', rating: 4.8, growth: 'Cost' },
            { vendor: 'Tax', orders: '-', revenue: '-₹31,000', rating: 4.0, growth: 'Compliance' },
            { vendor: 'Net Profit', orders: '-', revenue: '₹1,05,000', rating: 5.0, growth: 'Retained' }
        ];
        this.advancedKpis = [
            { label: 'Value Retained', value: '16.5%', percentage: '16.5%', status: 'excellent' },
            { label: 'Operational Cost', value: '15.7%', percentage: '15.7%', status: 'good' },
            { label: 'Promotional Cost', value: '9.6%', percentage: '9.6%', status: 'avg' },
            { label: 'Tax & Gateway', value: '7.3%', percentage: '7.3%', status: 'good' }
        ];
    }

    loadSalesOrderData() {
        this.title = 'Sales Revenue vs Order Trends – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Total Sales Volume', value: '18,540', change: '+12%', isPositive: true, icon: 'bx-line-chart' },
            { label: 'Avg Order Value (AOV)', value: '₹480', change: '+₹25', isPositive: true, icon: 'bx-cart-alt' },
            { label: 'Highest Sales Day', value: '03 Feb', change: '₹31k Peak', isPositive: true, icon: 'bx-up-arrow-circle' },
            { label: 'Order Conversion', value: '14.2%', change: '+1.5%', isPositive: true, icon: 'bx-target-lock' },
            { label: 'Revenue Growth', value: '+8.4%', change: 'MoM', isPositive: true, icon: 'bx-trending-up' },
            { label: 'Cart Abandonment', value: '28%', change: '-3%', isPositive: true, icon: 'bx-cart' }
        ];
        this.tableData = [
            { date: 'Week 4', total: 4200, completed: '₹20.1L', cancelled: '₹478', rate: '15%', status: 'Excellent' },
            { date: 'Week 3', total: 3800, completed: '₹18.2L', cancelled: '₹479', rate: '14%', status: 'Good' },
            { date: 'Week 2', total: 3500, completed: '₹16.5L', cancelled: '₹471', rate: '13%', status: 'Good' },
            { date: 'Week 1', total: 3100, completed: '₹14.8L', cancelled: '₹477', rate: '12%', status: 'Average' }
        ];
        this.vendorPerformance = [];
        this.advancedKpis = [
            { label: 'AOV Performance', value: '₹480', percentage: '90%', status: 'excellent' },
            { label: 'Conversion Funnel', value: 'Healthy', percentage: '75%', status: 'good' },
            { label: 'Repeat Purchase Rate', value: '42%', percentage: '85%', status: 'excellent' },
            { label: 'Lost Sales', value: '11%', percentage: '30%', status: 'avg' }
        ];
    }

    loadSalesCategoryData() {
        this.title = 'Category Performance Distribution – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Top Category', value: 'Electronics', change: '42% Share', isPositive: true, icon: 'bx-desktop' },
            { label: 'Fastest Growing', value: 'Accessories', change: '+18%', isPositive: true, icon: 'bx-headphone' },
            { label: 'Highest Margin', value: 'Wearables', change: '35%', isPositive: true, icon: 'bx-watch' },
            { label: 'Underperforming', value: 'Home & Audio', change: '-4%', isPositive: false, icon: 'bx-home-alt' },
            { label: 'Category Diversity', value: 'High', change: '+2%', isPositive: true, icon: 'bx-pie-chart-alt' },
            { label: 'Cross-Sell Rate', value: '22%', change: '+4%', isPositive: true, icon: 'bx-transfer' }
        ];
        this.tableData = [];
        this.vendorPerformance = [
            { vendor: 'Electronics', orders: 8540, revenue: '₹48.0L', rating: 4.8, growth: '+15%' },
            { vendor: 'Accessories', orders: 12400, revenue: '₹18.0L', rating: 4.5, growth: '+18%' },
            { vendor: 'Wearables', orders: 3200, revenue: '₹16.0L', rating: 4.7, growth: '+12%' },
            { vendor: 'Home & Audio', orders: 2800, revenue: '₹16.0L', rating: 4.0, growth: '-4%' }
        ];
        this.advancedKpis = [
            { label: 'Electronics Penetration', value: '42%', percentage: '80%', status: 'excellent' },
            { label: 'Accessories Attachment', value: '1.5x', percentage: '70%', status: 'good' },
            { label: 'Wearables Margin', value: '35%', percentage: '90%', status: 'excellent' },
            { label: 'Home Audio Growth', value: '-4%', percentage: '40%', status: 'avg' }
        ];
    }

    loadSalesWaterfallData() {
        this.title = 'Financial Revenue Waterfall – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Gross Merchandise Value', value: '₹1.2Cr', change: '+15%', isPositive: true, icon: 'bx-money' },
            { label: 'Net Revenue', value: '₹98L', change: '+12%', isPositive: true, icon: 'bx-wallet' },
            { label: 'Platform Fees', value: '₹14L', change: '11.6%', isPositive: true, icon: 'bx-briefcase' },
            { label: 'Refund Impact', value: '₹3.5L', change: '-5%', isPositive: true, icon: 'bx-undo' },
            { label: 'Promo Deductions', value: '₹4.5L', change: '-2%', isPositive: true, icon: 'bx-tag' },
            { label: 'Value Retained', value: '81%', change: '+1%', isPositive: true, icon: 'bx-check-shield' }
        ];
        this.tableData = [];
        this.vendorPerformance = [
            { vendor: 'Gross Revenue', orders: '-', revenue: '₹1,20,00,000', rating: 5.0, growth: 'Baseline' },
            { vendor: 'Discounts/Promos', orders: '-', revenue: '-₹4,50,000', rating: 4.5, growth: 'Cost' },
            { vendor: 'Refunds/Returns', orders: '-', revenue: '-₹3,50,000', rating: 4.0, growth: 'Leakage' },
            { vendor: 'Platform Fees', orders: '-', revenue: '₹14,00,000', rating: 4.8, growth: 'Revenue' },
            { vendor: 'Taxes', orders: '-', revenue: '-₹18,00,000', rating: 5.0, growth: 'Compliance' },
            { vendor: 'Net Revenue', orders: '-', revenue: '₹98,00,000', rating: 5.0, growth: 'Retained' }
        ];
        this.advancedKpis = [
            { label: 'Net Realization', value: '81%', percentage: '81%', status: 'excellent' },
            { label: 'Promo Burn', value: '3.7%', percentage: '20%', status: 'excellent' },
            { label: 'Return Leakage', value: '2.9%', percentage: '15%', status: 'good' },
            { label: 'Fee Extraction', value: '11.6%', percentage: '60%', status: 'good' }
        ];
    }

    loadSalesCostData() {
        this.title = 'Cost Structure Analysis – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Logistics Cost', value: '45%', change: '+2%', isPositive: false, icon: 'bx-truck' },
            { label: 'Marketing Spend', value: '22%', change: '-3%', isPositive: true, icon: 'bx-bullseye' },
            { label: 'Server & Infra', value: '12%', change: 'Flat', isPositive: true, icon: 'bx-server' },
            { label: 'Support Ops', value: '8%', change: '-1%', isPositive: true, icon: 'bx-support' },
            { label: 'Payment Gateway', value: '13%', change: 'Flat', isPositive: true, icon: 'bx-credit-card' },
            { label: 'Cost Efficiency', value: 'High', change: '+4%', isPositive: true, icon: 'bx-line-chart' }
        ];
        this.tableData = [];
        this.vendorPerformance = [
            { vendor: 'Logistics & Delivery', orders: '-', revenue: '45%', rating: 4.0, growth: 'High Cost' },
            { vendor: 'Marketing & Promos', orders: '-', revenue: '22%', rating: 4.5, growth: 'Optimized' },
            { vendor: 'Server & Tech', orders: '-', revenue: '12%', rating: 4.8, growth: 'Stable' },
            { vendor: 'Payment Gateways', orders: '-', revenue: '13%', rating: 4.2, growth: 'Stable' },
            { vendor: 'Customer Support', orders: '-', revenue: '8%', rating: 4.5, growth: 'Optimized' }
        ];
        this.advancedKpis = [
            { label: 'Logistics Overhead', value: '45%', percentage: '70%', status: 'avg' },
            { label: 'Marketing ROI', value: '3.5x', percentage: '85%', status: 'excellent' },
            { label: 'Infra Scalability', value: '12%', percentage: '90%', status: 'excellent' },
            { label: 'Support Efficiency', value: '8%', percentage: '80%', status: 'good' }
        ];
    }

    loadSalesZoneData() {
        this.title = 'Zone-Wise Efficiency Metrics – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';
        this.kpis = [
            { label: 'Most Efficient Zone', value: 'North Zone', change: '85% Score', isPositive: true, icon: 'bx-map' },
            { label: 'Highest Volume', value: 'West Zone', change: '1.2M Orders', isPositive: true, icon: 'bx-package' },
            { label: 'Fastest Growth', value: 'South Zone', change: '+22%', isPositive: true, icon: 'bx-trending-up' },
            { label: 'Lowest Cost/Order', value: 'East Zone', change: '₹22/ord', isPositive: true, icon: 'bx-coin' },
            { label: 'Zone Diversity', value: '4 Active', change: 'Balanced', isPositive: true, icon: 'bx-hive' },
            { label: 'Avg Zone Margin', value: '24%', change: '+2%', isPositive: true, icon: 'bx-line-chart' }
        ];
        this.tableData = [
            { date: 'North Zone', total: '8.5L', completed: '₹145', cancelled: '₹28', rate: '85%', status: 'Excellent' },
            { date: 'West Zone', total: '12.2L', completed: '₹160', cancelled: '₹35', rate: '78%', status: 'Good' },
            { date: 'South Zone', total: '6.4L', completed: '₹135', cancelled: '₹32', rate: '82%', status: 'Good' },
            { date: 'East Zone', total: '4.1L', completed: '₹120', cancelled: '₹22', rate: '75%', status: 'Average' }
        ];
        this.vendorPerformance = [];
        this.advancedKpis = [
            { label: 'North Zone ROI', value: 'High', percentage: '85%', status: 'excellent' },
            { label: 'West Zone Scale', value: 'Massive', percentage: '95%', status: 'excellent' },
            { label: 'South Zone Growth', value: 'Rapid', percentage: '82%', status: 'good' },
            { label: 'East Zone Potential', value: 'Emerging', percentage: '65%', status: 'avg' }
        ];
    }

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }

    // Helper for template calculations
    parseFloat(val: string): number {
        return parseFloat(val) || 0;
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
        this.title = 'Order Performance — Deep Dive';
        this.dateRange = 'Jan 01 – Jan 31, 2026';

        // 4 KPI Cards
        this.kpis = [
            { label: 'Total Orders', value: '1,480', change: '+17%', isPositive: true, icon: 'bx-package' },
            { label: 'Completed', value: '1,312', change: '+19%', isPositive: true, icon: 'bx-check-circle' },
            { label: 'Cancelled', value: '168', change: '-8%', isPositive: true, icon: 'bx-x-circle' },
            { label: 'Completion Rate', value: '88.6%', change: '+2.1pp', isPositive: true, icon: 'bx-trending-up' }
        ];

        // Zone-wise performance table
        this.performanceZoneData = [
            { zone: 'North', orders: 380, completed: 346, cancelled: 34, completionRate: 91.1, avgDelivery: '28 min', rating: 4.7, status: 'Excellent' },
            { zone: 'South', orders: 420, completed: 365, cancelled: 55, completionRate: 86.9, avgDelivery: '33 min', rating: 4.4, status: 'Good' },
            { zone: 'East', orders: 310, completed: 260, cancelled: 50, completionRate: 83.9, avgDelivery: '38 min', rating: 4.2, status: 'Average' },
            { zone: 'West', orders: 370, completed: 333, cancelled: 37, completionRate: 90.0, avgDelivery: '30 min', rating: 4.6, status: 'Excellent' },
            { zone: 'Central', orders: 0, completed: 0, cancelled: 0, completionRate: 0, avgDelivery: '—', rating: 0, status: '' }
        ].filter(z => z.orders > 0);

        // Peak hours table
        this.performancePeakHours = [
            { slot: '6 AM – 8 AM',  orders: 62,  completed: 58, cancelled: 4,  rate: 93.5, intensity: 'low' },
            { slot: '8 AM – 10 AM', orders: 115, completed: 105, cancelled: 10, rate: 91.3, intensity: 'medium' },
            { slot: '10 AM – 12 PM',orders: 185, completed: 168, cancelled: 17, rate: 90.8, intensity: 'high' },
            { slot: '12 PM – 2 PM', orders: 280, completed: 248, cancelled: 32, rate: 88.6, intensity: 'peak' },
            { slot: '2 PM – 4 PM',  orders: 210, completed: 185, cancelled: 25, rate: 88.1, intensity: 'high' },
            { slot: '4 PM – 6 PM',  orders: 310, completed: 274, cancelled: 36, rate: 88.4, intensity: 'peak' },
            { slot: '6 PM – 8 PM',  orders: 195, completed: 168, cancelled: 27, rate: 86.2, intensity: 'high' },
            { slot: '8 PM – 10 PM', orders: 123, completed: 106, cancelled: 17, rate: 86.2, intensity: 'medium' }
        ];

        // Daily breakdown table (last 10 days)
        this.tableData = [
            { date: 'Jan 31', total: 58,  completed: 54, cancelled: 4,  rate: '93.1%', status: 'Excellent' },
            { date: 'Jan 30', total: 72,  completed: 64, cancelled: 8,  rate: '88.9%', status: 'Good' },
            { date: 'Jan 29', total: 65,  completed: 56, cancelled: 9,  rate: '86.2%', status: 'Good' },
            { date: 'Jan 28', total: 38,  completed: 32, cancelled: 6,  rate: '84.2%', status: 'Average' },
            { date: 'Jan 27', total: 81,  completed: 74, cancelled: 7,  rate: '91.4%', status: 'Excellent' },
            { date: 'Jan 26', total: 74,  completed: 60, cancelled: 14, rate: '81.1%', status: 'Average' },
            { date: 'Jan 25', total: 69,  completed: 62, cancelled: 7,  rate: '89.9%', status: 'Good' },
            { date: 'Jan 24', total: 55,  completed: 51, cancelled: 4,  rate: '92.7%', status: 'Excellent' },
            { date: 'Jan 23', total: 77,  completed: 63, cancelled: 14, rate: '81.8%', status: 'Average' },
            { date: 'Jan 22', total: 60,  completed: 46, cancelled: 14, rate: '76.7%', status: 'Warning' }
        ];

        // Performance insights
        this.performanceInsights = [
            { type: 'positive', icon: 'bx-trending-up',    text: 'Completion rate improved +2.1pp vs last month — best in 4 months.' },
            { type: 'positive', icon: 'bx-time',           text: 'Avg delivery time dropped to 32 min (was 34 min in Dec 2025).' },
            { type: 'warning',  icon: 'bx-error-circle',   text: 'Zone East cancellation rate at 16.1% — above the 12% alert threshold.' },
            { type: 'warning',  icon: 'bx-calendar-x',     text: 'Jan 22 completion rate 76.7% — flagged for review (weather + rider shortage).' },
            { type: 'positive', icon: 'bx-star',           text: 'Wednesday & Saturday consistently hit 90%+ completion rate.' }
        ];

        // Chart Data for Performance
        const greenColor = '#28a745';
        const redColor = '#dc3545';

        this.lineChartData = {
            labels: ['Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31'],
            datasets: [
                {
                    data: [46, 63, 51, 62, 60, 74, 32, 56, 64, 54],
                    label: 'Completed Orders',
                    fill: true,
                    tension: 0.4,
                    borderColor: greenColor,
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
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
                    data: [14, 14, 4, 7, 14, 7, 6, 9, 8, 4],
                    label: 'Cancelled Orders',
                    fill: false,
                    tension: 0.4,
                    borderColor: redColor,
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: redColor,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: redColor,
                    pointHoverBorderColor: '#fff'
                }
            ]
        };

        this.doughnutChartData = {
            labels: ['Completed', 'Cancelled', 'Returned'],
            datasets: [
                {
                    data: [1312, 168, 45],
                    backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
                    hoverBackgroundColor: ['#218838', '#c82333', '#e0a800'],
                    borderWidth: 3,
                    borderColor: '#ffffff',
                    hoverOffset: 8
                }
            ]
        };
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

    getStars(rating: number): number[] {
        const fullStars = Math.floor(rating);
        return Array(fullStars).fill(0);
    }


    getDoughnutColor(index: number): string {
        const colors = ['#28a745', '#ffc107', '#17a2b8', '#6c757d'];
        return colors[index] || '#cccccc';
    }

    getDoughnutData(index: number): number {
        const data = [320000, 40500, 18000, 8500];
        return data[index] || 0;
    }

    getPerformanceDoughnutColor(index: number): string {
        const colors = ['#28a745', '#dc3545', '#ffc107'];
        return colors[index] || '#cccccc';
    }

    getPerformanceDoughnutData(index: number): number {
        if (this.doughnutChartData && this.doughnutChartData.datasets && this.doughnutChartData.datasets[0] && this.doughnutChartData.datasets[0].data) {
            return this.doughnutChartData.datasets[0].data[index] as number || 0;
        }
        return 0;
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

    loadProductData() {
        this.title = 'Revenue by Product – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';

        this.kpis = [
            { label: 'Total Revenue', value: '₹3.87L', change: '+18%', isPositive: true, icon: 'bx-rupee' },
            { label: 'Top Category', value: 'Exotic', change: '+28%', isPositive: true, icon: 'bx-crown' },
            { label: 'Total Products', value: '48 SKUs', change: '+6', isPositive: true, icon: 'bx-box' },
            { label: 'Avg Margin', value: '23.9%', change: '+2.1%', isPositive: true, icon: 'bx-pie-chart' },
            { label: 'Best Seller', value: 'Banana', change: '₹42,500', isPositive: true, icon: 'bx-star' },
            { label: 'Low Stock', value: '5 Items', change: '-2', isPositive: true, icon: 'bx-error-circle' },
        ];

        this.productData = [
            { category: 'Exotic Fruits',    product: 'Dragon Fruit',   orders: 310, revenue: '₹55,800', margin: '31%', growth: '+34%', stock: 'In Stock',    isPositive: true },
            { category: 'Exotic Fruits',    product: 'Passion Fruit',  orders: 280, revenue: '₹42,000', margin: '29%', growth: '+22%', stock: 'In Stock',    isPositive: true },
            { category: 'Tropical Fruits',  product: 'Banana',         orders: 920, revenue: '₹42,500', margin: '18%', growth: '+12%', stock: 'In Stock',    isPositive: true },
            { category: 'Tropical Fruits',  product: 'Mango',          orders: 680, revenue: '₹61,200', margin: '22%', growth: '+19%', stock: 'In Stock',    isPositive: true },
            { category: 'Tropical Fruits',  product: 'Pineapple',      orders: 420, revenue: '₹37,800', margin: '20%', growth: '+15%', stock: 'Low Stock',   isPositive: true },
            { category: 'Citrus Fruits',    product: 'Orange',         orders: 560, revenue: '₹33,600', margin: '16%', growth: '+10%', stock: 'In Stock',    isPositive: true },
            { category: 'Citrus Fruits',    product: 'Lemon',          orders: 480, revenue: '₹24,000', margin: '14%', growth: '+8%',  stock: 'In Stock',    isPositive: true },
            { category: 'Berries',          product: 'Strawberry',     orders: 390, revenue: '₹58,500', margin: '28%', growth: '+25%', stock: 'In Stock',    isPositive: true },
            { category: 'Berries',          product: 'Blueberry',      orders: 240, revenue: '₹43,200', margin: '30%', growth: '+20%', stock: 'Low Stock',   isPositive: true },
            { category: 'Dry Fruits',       product: 'Cashews',        orders: 185, revenue: '₹37,000', margin: '35%', growth: '+30%', stock: 'In Stock',    isPositive: true },
            { category: 'Dry Fruits',       product: 'Almonds',        orders: 160, revenue: '₹32,000', margin: '33%', growth: '+28%', stock: 'In Stock',    isPositive: true },
            { category: 'Organic Range',    product: 'Organic Apples', orders: 120, revenue: '₹21,600', margin: '26%', growth: '+32%', stock: 'Low Stock',   isPositive: true },
            { category: 'Seasonal',         product: 'Litchi',         orders: 200, revenue: '₹18,000', margin: '19%', growth: '-5%',  stock: 'Out of Stock',isPositive: false },
            { category: 'Combos & Packs',   product: 'Fruit Basket L', orders: 145, revenue: '₹23,200', margin: '22%', growth: '+11%', stock: 'In Stock',    isPositive: true },
        ];
    }

    loadUserData() {
        this.title = 'User Acquisition & Growth Trend – January 2026';
        this.dateRange = 'Jan 01 - Jan 31, 2026';

        this.kpis = [
            { label: 'Total Users', value: '42.8k', change: '+12%', isPositive: true, icon: 'bx-group' },
            { label: 'Active Users', value: '18.4k', change: '+15%', isPositive: true, icon: 'bx-user-check' },
            { label: 'New Signups', value: '3,120', change: '+22%', isPositive: true, icon: 'bx-user-plus' },
            { label: 'Retention Rate', value: '68.4%', change: '+2.4%', isPositive: true, icon: 'bx-refresh' },
            { label: 'Churn Rate', value: '3.2%', change: '-0.5%', isPositive: true, icon: 'bx-trending-down' },
            { label: 'Avg Session', value: '12m 40s', change: '+45s', isPositive: true, icon: 'bx-timer' }
        ];

        this.advancedKpis = [
            { label: 'Top Channel', value: 'Referral', revenue: '₹1.2L', percentage: '45%' },
            { label: 'LTV', value: '₹4,850', trend: '+15%', status: 'excellent' },
            { label: 'CAC', value: '₹210', trend: '-12%', status: 'good' },
            { label: 'DAU / MAU', value: '42.8%', trend: '+3.1%', status: 'excellent' }
        ];

        this.lineChartData = {
            labels: ['Jan 01', 'Jan 05', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 31'],
            datasets: [
                {
                    data: [12000, 15400, 18900, 24500, 31200, 38400, 42800],
                    label: 'Total Users',
                    fill: true,
                    tension: 0.4,
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    pointRadius: 5
                },
                {
                    data: [8500, 10200, 12400, 15600, 18400, 21200, 23500],
                    label: 'Active Users',
                    fill: false,
                    tension: 0.4,
                    borderColor: '#10b981',
                    pointRadius: 4
                }
            ]
        };

        this.tableData = [
            { date: 'Jan 31', total: 428, completed: 380, cancelled: 48, rate: '88.7%', status: 'Good' },
            { date: 'Jan 30', total: 405, completed: 360, cancelled: 45, rate: '88.8%', status: 'Good' },
            { date: 'Jan 29', total: 382, completed: 345, cancelled: 37, rate: '90.3%', status: 'Excellent' },
            { date: 'Jan 28', total: 350, completed: 310, cancelled: 40, rate: '88.5%', status: 'Good' },
            { date: 'Jan 27', total: 320, completed: 290, cancelled: 30, rate: '90.6%', status: 'Excellent' }
        ];

        this.vendorPerformance = [
            { vendor: 'Organic Search', orders: 15400, revenue: '36%', rating: 4.8, growth: '+22%' },
            { vendor: 'Social Media', orders: 12100, revenue: '28%', rating: 4.5, growth: '+15%' },
            { vendor: 'Direct Visit', orders: 8500, revenue: '20%', rating: 4.6, growth: '+10%' },
            { vendor: 'Referral', orders: 6800, revenue: '16%', rating: 4.9, growth: '+35%' }
        ];
    }
}
