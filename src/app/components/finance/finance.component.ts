import { Component, OnInit } from '@angular/core';

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

    constructor() { }

    ngOnInit(): void { }
}
