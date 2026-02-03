import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
    selector: 'app-finance',
    templateUrl: './finance.component.html',
    styleUrls: ['./finance.component.scss'],
    standalone: false
})
export class FinanceComponent implements OnInit {
    public transactions = [
        {
            date: '03 Feb',
            orderId: 'ORD1024',
            customer: 'Rahul S',
            paymentMethod: 'UPI',
            grossAmount: 850,
            discount: 50,
            refund: 0,
            gatewayFee: 18,
            tax: 42,
            riderPayout: 60,
            netRevenue: 680,
            profit: 120,
            status: 'Success'
        },
        {
            date: '03 Feb',
            orderId: 'ORD1025',
            customer: 'Sneha P',
            paymentMethod: 'COD',
            grossAmount: 620,
            discount: 0,
            refund: 100,
            gatewayFee: 0,
            tax: 31,
            riderPayout: 55,
            netRevenue: 434,
            profit: 80,
            status: 'Refunded'
        },
        {
            date: '02 Feb',
            orderId: 'ORD1026',
            customer: 'Amit K',
            paymentMethod: 'Card',
            grossAmount: 1200,
            discount: 100,
            refund: 0,
            gatewayFee: 36,
            tax: 60,
            riderPayout: 80,
            netRevenue: 924,
            profit: 210,
            status: 'Success'
        },
        {
            date: '02 Feb',
            orderId: 'ORD1027',
            customer: 'Priya M',
            paymentMethod: 'UPI',
            grossAmount: 450,
            discount: 20,
            refund: 0,
            gatewayFee: 9,
            tax: 22,
            riderPayout: 45,
            netRevenue: 354,
            profit: 65,
            status: 'Pending'
        },
        {
            date: '02 Feb',
            orderId: 'ORD1028',
            customer: 'Vikram R',
            paymentMethod: 'Wallet',
            grossAmount: 780,
            discount: 0,
            refund: 0,
            gatewayFee: 15,
            tax: 39,
            riderPayout: 65,
            netRevenue: 661,
            profit: 115,
            status: 'Success'
        },
        {
            date: '01 Feb',
            orderId: 'ORD1029',
            customer: 'Sonia G',
            paymentMethod: 'UPI',
            grossAmount: 950,
            discount: 75,
            refund: 0,
            gatewayFee: 20,
            tax: 47,
            riderPayout: 70,
            netRevenue: 738,
            profit: 140,
            status: 'Success'
        },
        {
            date: '01 Feb',
            orderId: 'ORD1030',
            customer: 'Karan J',
            paymentMethod: 'COD',
            grossAmount: 540,
            discount: 0,
            refund: 0,
            gatewayFee: 0,
            tax: 27,
            riderPayout: 50,
            netRevenue: 463,
            profit: 75,
            status: 'Failed'
        },
        {
            date: '01 Feb',
            orderId: 'ORD1031',
            customer: 'Anjali T',
            paymentMethod: 'Card',
            grossAmount: 1100,
            discount: 50,
            refund: 0,
            gatewayFee: 33,
            tax: 55,
            riderPayout: 75,
            netRevenue: 887,
            profit: 180,
            status: 'Success'
        },
        {
            date: '31 Jan',
            orderId: 'ORD1032',
            customer: 'Deepak B',
            paymentMethod: 'UPI',
            grossAmount: 670,
            discount: 0,
            refund: 0,
            gatewayFee: 14,
            tax: 33,
            riderPayout: 55,
            netRevenue: 568,
            profit: 95,
            status: 'Success'
        },
        {
            date: '31 Jan',
            orderId: 'ORD1033',
            customer: 'Meera L',
            paymentMethod: 'Wallet',
            grossAmount: 890,
            discount: 40,
            refund: 0,
            gatewayFee: 18,
            tax: 44,
            riderPayout: 65,
            netRevenue: 723,
            profit: 135,
            status: 'Success'
        }
    ];

    public summaryData = [
        {
            period: 'Today',
            orders: 128,
            revenue: '24,600',
            discounts: '2,400',
            refunds: '600',
            gatewayCharges: '520',
            riderPayouts: '3,200',
            netRevenue: '17,880',
            netProfit: '4,500',
            margin: '25%'
        },
        {
            period: 'This Week',
            orders: 842,
            revenue: '1,58,400',
            discounts: '14,800',
            refunds: '3,200',
            gatewayCharges: '3,900',
            riderPayouts: '21,500',
            netRevenue: '1,14,000',
            netProfit: '28,400',
            margin: '24%'
        },
        {
            period: 'This Month',
            orders: 3410,
            revenue: '6,35,200',
            discounts: '61,000',
            refunds: '12,400',
            gatewayCharges: '15,800',
            riderPayouts: '84,000',
            netRevenue: '4,62,000',
            netProfit: '1,05,000',
            margin: '22%'
        },
        {
            period: 'last 3 Months',
            orders: 10540,
            revenue: '19,45,200',
            discounts: '1,85,000',
            refunds: '42,000',
            gatewayCharges: '48,600',
            riderPayouts: '2,58,000',
            netRevenue: '14,11,600',
            netProfit: '3,25,000',
            margin: '23%'
        },
        {
            period: 'last 6 Months',
            orders: 22180,
            revenue: '41,20,800',
            discounts: '3,92,000',
            refunds: '88,000',
            gatewayCharges: '1,03,000',
            riderPayouts: '5,42,000',
            netRevenue: '29,95,800',
            netProfit: '6,85,000',
            margin: '23%'
        },
        {
            period: 'This Year',
            orders: 45200,
            revenue: '84,50,000',
            discounts: '7,80,000',
            refunds: '1,65,000',
            gatewayCharges: '2,11,000',
            riderPayouts: '11,20,000',
            netRevenue: '61,74,000',
            netProfit: '14,20,000',
            margin: '23%'
        }
    ];

    // Multi-line Trend Chart Configuration
    public lineChartData: ChartConfiguration['data'] = {
        datasets: [
            {
                data: [18500, 21200, 19800, 24600, 23500, 26800, 31200],
                label: 'Gross Revenue (₹)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: '#3b82f6',
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#3b82f6',
                fill: 'origin',
                tension: 0.4
            },
            {
                data: [14200, 16800, 15400, 17880, 18200, 21500, 24800],
                label: 'Net Revenue (₹)',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderColor: '#10b981',
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#10b981',
                fill: 'origin',
                tension: 0.4
            },
            {
                data: [3500, 4800, 4100, 4500, 4900, 5800, 7200],
                label: 'Net Profit (₹)',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderColor: '#f59e0b',
                pointBackgroundColor: '#f59e0b',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#f59e0b',
                fill: 'origin',
                tension: 0.4
            }
        ],
        labels: ['28 Jan', '29 Jan', '30 Jan', '31 Jan', '01 Feb', '02 Feb', '03 Feb']
    };

    public lineChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12,
                        weight: 600
                    }
                }
            },
            tooltip: {
                backgroundColor: '#1e293b',
                padding: 12,
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 13 },
                cornerRadius: 8,
                displayColors: true
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: 'rgba(226, 232, 240, 0.4)'
                },
                ticks: {
                    font: { family: "'Inter', sans-serif", size: 11 },
                    callback: (value) => '₹' + value
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: { family: "'Inter', sans-serif", size: 11 }
                }
            }
        }
    };

    public lineChartType: ChartType = 'line';

    // Stacked Bar Chart Configuration
    public barChartData: ChartConfiguration['data'] = {
        datasets: [
            { data: [3500, 4800, 4100, 4500, 4900, 5800, 7200], label: 'Net Profit', backgroundColor: '#10b981' },
            { data: [3200, 3500, 3100, 3200, 3400, 3800, 4200], label: 'Rider Payouts', backgroundColor: '#3b82f6' },
            { data: [520, 600, 550, 520, 580, 650, 720], label: 'Gateway Charges', backgroundColor: '#f59e0b' },
            { data: [1200, 1400, 1300, 1400, 1450, 1600, 1850], label: 'Taxes', backgroundColor: '#94a3b8' },
            { data: [2400, 2800, 2200, 2400, 2600, 2900, 3100], label: 'Discounts', backgroundColor: '#ef4444' }
        ],
        labels: ['28 Jan', '29 Jan', '30 Jan', '31 Jan', '01 Feb', '02 Feb', '03 Feb']
    };

    public barChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: { usePointStyle: true, padding: 20 }
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            x: { stacked: true },
            y: {
                stacked: true,
                beginAtZero: true,
                ticks: { callback: (value) => '₹' + value }
            }
        }
    };

    public barChartType: ChartType = 'bar';

    // Combo Chart Configuration (Operational Finance Efficiency)
    public comboChartData: ChartConfiguration['data'] = {
        datasets: [
            {
                data: [128, 142, 115, 128, 135, 148, 162],
                label: 'Order Volume',
                type: 'bar',
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderColor: '#3b82f6',
                borderWidth: 1,
                borderRadius: 4,
                yAxisID: 'y'
            },
            {
                data: [25, 22, 24, 25, 23, 26, 28],
                label: 'Profit Margin (%)',
                type: 'line',
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                pointBackgroundColor: '#ef4444',
                fill: false,
                tension: 0.4,
                yAxisID: 'y1'
            }
        ],
        labels: ['28 Jan', '29 Jan', '30 Jan', '31 Jan', '01 Feb', '02 Feb', '03 Feb']
    };

    public comboChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: { usePointStyle: true, padding: 20 }
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
                title: { display: true, text: 'Order Volume' }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                beginAtZero: true,
                grid: { drawOnChartArea: false },
                title: { display: true, text: 'Profit Margin (%)' },
                ticks: { callback: (value) => value + '%' }
            }
        }
    };

    public comboChartType: ChartType = 'bar';

    // Waterfall Chart Configuration (Money Flow)
    public waterfallChartData: ChartConfiguration['data'] = {
        datasets: [
            {
                label: 'Finance Flow',
                data: [
                    [0, 635200],      // Gross Revenue
                    [574200, 635200], // Discounts (61000)
                    [561800, 574200], // Refunds (12400)
                    [546000, 561800], // Gateway (15800)
                    [462000, 546000], // Rider Payouts (84000)
                    [431000, 462000], // Tax (31000)
                    [0, 105000]       // Net Profit (Final)
                ],
                backgroundColor: [
                    '#3b82f6', // blue (Initial)
                    '#ef4444', // red (Deduction)
                    '#ef4444', // red
                    '#ef4444', // red
                    '#ef4444', // red
                    '#ef4444', // red
                    '#10b981'  // green (Final)
                ],
                borderColor: '#1e293b',
                borderWidth: 1,
                borderRadius: 4,
                borderSkipped: false
            }
        ],
        labels: [
            'Gross Revenue',
            'Discounts',
            'Refunds',
            'Gateway Charges',
            'Rider Payouts',
            'Tax',
            'Net Profit'
        ]
    };

    public waterfallChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        const val = context.raw;
                        const diff = Math.abs(val[1] - val[0]);
                        return context.label + ': ₹' + diff.toLocaleString();
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { callback: (value) => '₹' + value.toLocaleString() }
            },
            x: {
                grid: { display: false }
            }
        }
    };

    public waterfallChartType: ChartType = 'bar';

    constructor() { }

    ngOnInit(): void { }
}
