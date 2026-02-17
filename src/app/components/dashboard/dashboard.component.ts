import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})
export class DashboardComponent implements OnInit {
    constructor(private apiService: ApiService) { }
    showPerformanceDropdown = false;
    performanceTimeRange = 'Month';
    performanceOptions = ['15 days', 'Month', '3 Month', '6 Month', 'Year'];

    // Default data for 'Month'
    performanceChartData = { completed: 82, return: 10, cancel: 40 };

    // Revenue Dropdown State
    showRevenueDropdown = false;
    revenueTimeRange = 'Month';
    revenueOptions = ['15 days', 'Month', '3 Month', '6 Month', 'Year'];

    // Revenue Data
    revenueAmount = '₹25,843.45';
    revenueBadge = '+11%';
    revenueBadgeClass = 'badge'; // or 'badge down' for negative
    revenueData = { labels: ['Jan 01', 'Jan 07', 'Jan 14', 'Jan 21', 'Jan 28'], data: [0, 5000, 12000, 25000, 45000] };

    // Analytics Dropdown State
    showAnalyticsDropdown = false;
    analyticsTimeRange = 'Month';
    analyticsOptions = ['15 days', 'Month', '3 Month', '6 Month', 'Year'];

    analyticsData: { labels: string[], completed: (number | null)[], pending: (number | null)[] } = {
        labels: ['01', '03', '06', '09', '12', '15', '18', '21', '24', '27', '30'],
        completed: [1000, 1200, 1150, 1700, 1400, 1600, 1500, 1900, 2000, 2500, 2100],
        pending: [500, 600, 550, 600, 900, 500, 800, 1200, 1100, 1300, 1500]
    };

    togglePerformanceDropdown() {
        this.showPerformanceDropdown = !this.showPerformanceDropdown;
        // Close others
        if (this.showPerformanceDropdown) {
            this.showRevenueDropdown = false;
            this.showAnalyticsDropdown = false;
        }
    }

    selectPerformanceTimeRange(option: string) {
        this.performanceTimeRange = option;
        this.showPerformanceDropdown = false;
        this.updatePerformanceData(option);
    }

    toggleRevenueDropdown() {
        this.showRevenueDropdown = !this.showRevenueDropdown;
        // Close others
        if (this.showRevenueDropdown) {
            this.showPerformanceDropdown = false;
            this.showAnalyticsDropdown = false;
        }
    }

    selectRevenueTimeRange(option: string) {
        this.revenueTimeRange = option;
        this.showRevenueDropdown = false;
        this.updateRevenueData(option);
    }

    // Analytics Status Dropdown
    showAnalyticsStatusDropdown = false;
    analyticsStatus = 'All'; // Default
    analyticsStatusOptions = ['All', 'Completed', 'Not Completed'];

    analyticsBaseData: { labels: string[], completed: (number | null)[], pending: (number | null)[] } = { labels: [], completed: [], pending: [] };

    toggleAnalyticsDropdown() {
        this.showAnalyticsDropdown = !this.showAnalyticsDropdown;
        // Close others
        if (this.showAnalyticsDropdown) {
            this.showPerformanceDropdown = false;
            this.showRevenueDropdown = false;
            this.showAnalyticsStatusDropdown = false;
        }
    }

    toggleAnalyticsStatusDropdown() {
        this.showAnalyticsStatusDropdown = !this.showAnalyticsStatusDropdown;
        if (this.showAnalyticsStatusDropdown) {
            this.showPerformanceDropdown = false;
            this.showRevenueDropdown = false;
            this.showAnalyticsDropdown = false;
        }
    }

    selectAnalyticsTimeRange(option: string) {
        this.analyticsTimeRange = option;
        this.showAnalyticsDropdown = false;
        this.updateAnalyticsBaseData(option);
        this.applyAnalyticsFilter();
    }

    selectAnalyticsStatus(option: string) {
        this.analyticsStatus = option;
        this.showAnalyticsStatusDropdown = false;
        this.applyAnalyticsFilter();
    }

    updateAnalyticsBaseData(option: string) {
        // Sets the base data for the selected timeframe
        switch (option) {
            case '15 days':
                this.analyticsBaseData = {
                    labels: ['D1', 'D3', 'D5', 'D7', 'D9', 'D11', 'D13', 'D15'],
                    completed: [800, 900, 850, 1000, 1200, 1100, 1300, 1400],
                    pending: [200, 300, 250, 300, 400, 300, 350, 400]
                };
                break;
            case 'Month':
                this.analyticsBaseData = {
                    labels: ['01', '03', '06', '09', '12', '15', '18', '21', '24', '27', '30'],
                    completed: [1000, 1200, 1150, 1700, 1400, 1600, 1500, 1900, 2000, 2500, 2100],
                    pending: [500, 600, 550, 600, 900, 500, 800, 1200, 1100, 1300, 1500]
                };
                break;
            case '3 Month':
                this.analyticsBaseData = {
                    labels: ['W1', 'W3', 'W6', 'W9', 'W12'],
                    completed: [3000, 4000, 5000, 6000, 7000],
                    pending: [1500, 2000, 2500, 3000, 3500]
                };
                break;
            case '6 Month':
                this.analyticsBaseData = {
                    labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
                    completed: [10000, 12000, 15000, 18000, 20000, 22000],
                    pending: [5000, 6000, 7500, 9000, 10000, 11000]
                };
                break;
            case 'Year':
                this.analyticsBaseData = {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    completed: [40000, 50000, 60000, 80000],
                    pending: [20000, 25000, 30000, 40000]
                };
                break;
            default:
                this.analyticsBaseData = {
                    labels: ['01', '03', '06', '09', '12', '15', '18', '21', '24', '27', '30'],
                    completed: [1000, 1200, 1150, 1700, 1400, 1600, 1500, 1900, 2000, 2500, 2100],
                    pending: [500, 600, 550, 600, 900, 500, 800, 1200, 1100, 1300, 1500]
                };
        }
    }

    applyAnalyticsFilter() {
        // Filters the base data based on status selection
        const data = { ...this.analyticsBaseData };

        if (this.analyticsStatus === 'Completed') {
            // Hide pending
            data.pending = new Array(data.labels.length).fill(null);
        } else if (this.analyticsStatus === 'Not Completed') {
            // Hide completed
            data.completed = new Array(data.labels.length).fill(null);
        }
        // If 'All', show both

        this.analyticsData = data;
    }

    // Initialize with live data
    ngOnInit() {
        this.updateAnalyticsBaseData('Month');
        this.applyAnalyticsFilter();
        this.fetchStats();
    }

    fetchStats() {
        this.apiService.getStats().subscribe({
            next: (stats) => {
                this.revenueAmount = `₹${stats.totalRevenue.toLocaleString()}`;
                // Update other cards if present in template
                // Total Orders: stats.totalOrders
                // Total Users: stats.totalUsers
            },
            error: (err) => console.error('Error fetching dashboard stats', err)
        });
    }

    updateRevenueData(option: string) {
        switch (option) {
            case '15 days':
                this.revenueAmount = '₹12,450.00';
                this.revenueBadge = '+5%';
                this.revenueData = {
                    labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15'],
                    data: [2000, 4000, 8000, 12000]
                };
                break;
            case 'Month':
                this.revenueAmount = '₹25,843.45';
                this.revenueBadge = '+11%';
                this.revenueData = {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [5000, 15000, 22000, 25800]
                };
                break;
            case '3 Month':
                this.revenueAmount = '₹78,200.10';
                this.revenueBadge = '+18%';
                this.revenueData = {
                    labels: ['Month 1', 'Month 2', 'Month 3'],
                    data: [25000, 50000, 78000]
                };
                break;
            case '6 Month':
                this.revenueAmount = '₹150,900.50';
                this.revenueBadge = '+22%';
                this.revenueData = {
                    labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
                    data: [25000, 50000, 75000, 100000, 125000, 150000]
                };
                break;
            case 'Year':
                this.revenueAmount = '₹320,500.00';
                this.revenueBadge = '+30%';
                this.revenueData = {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    data: [80000, 160000, 240000, 320000]
                };
                break;
            default:
                this.revenueAmount = '₹25,843.45';
                this.revenueBadge = '+11%';
                this.revenueData = { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], data: [5000, 15000, 22000, 25800] };
        }
    }

    updatePerformanceData(option: string) {
        // Dummy data logic based on selection
        switch (option) {
            case '15 days':
                this.performanceChartData = { completed: 65, return: 5, cancel: 15 };
                break;
            case 'Month':
                this.performanceChartData = { completed: 82, return: 10, cancel: 40 };
                break;
            case '3 Month':
                this.performanceChartData = { completed: 90, return: 15, cancel: 25 };
                break;
            case '6 Month':
                this.performanceChartData = { completed: 88, return: 20, cancel: 30 };
                break;
            case 'Year':
                this.performanceChartData = { completed: 95, return: 25, cancel: 50 };
                break;
            default:
                this.performanceChartData = { completed: 82, return: 10, cancel: 40 };
        }
    }
    // Analytics Details Modal
    showAnalyticsModal = false;
    activeModalMode: 'orders' | 'performance' | 'revenue' = 'orders';

    openAnalyticsModal() {
        this.activeModalMode = 'orders';
        this.showAnalyticsModal = true;
    }

    openPerformanceModal() {
        this.activeModalMode = 'performance';
        this.showAnalyticsModal = true;
    }

    openRevenueModal() {
        this.activeModalMode = 'revenue';
        this.showAnalyticsModal = true;
    }

    closeAnalyticsModal() {
        this.showAnalyticsModal = false;
    }
}
