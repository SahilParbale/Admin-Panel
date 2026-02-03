import { Component, OnInit } from '@angular/core';

interface Complaint {
    ticketId: string;
    userName: string;
    issueType: string;
    orderId: string;
    status: 'Open' | 'Resolved';
    resolutionTime: string;
}

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-complaints-table',
    templateUrl: './user-complaints-table.component.html',
    styleUrls: ['./user-complaints-table.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class UserComplaintsTableComponent implements OnInit {

    complaints: Complaint[] = [
        {
            ticketId: 'TCK-2024-001',
            userName: 'Sahil Parbale',
            issueType: 'Late Delivery',
            orderId: 'ORD-12345',
            status: 'Open',
            resolutionTime: '-'
        },
        {
            ticketId: 'TCK-2024-002',
            userName: 'Rohan Sharma',
            issueType: 'Wrong Item',
            orderId: 'ORD-12346',
            status: 'Resolved',
            resolutionTime: '2 hrs'
        },
        {
            ticketId: 'TCK-2024-003',
            userName: 'Priya Singh',
            issueType: 'Refund Not Received',
            orderId: 'ORD-12347',
            status: 'Open',
            resolutionTime: '-'
        },
        {
            ticketId: 'TCK-2024-004',
            userName: 'Amit Verma',
            issueType: 'Quality Issue',
            orderId: 'ORD-12348',
            status: 'Resolved',
            resolutionTime: '1 day'
        },
        {
            ticketId: 'TCK-2024-005',
            userName: 'Neha Gupta',
            issueType: 'Payment Failed',
            orderId: 'ORD-12349',
            status: 'Resolved',
            resolutionTime: '30 mins'
        },
        {
            ticketId: 'TCK-2024-006',
            userName: 'Vikram Malhotra',
            issueType: 'App Crash',
            orderId: 'ORD-12350',
            status: 'Open',
            resolutionTime: '-'
        },
        {
            ticketId: 'TCK-2024-007',
            userName: 'Anjali Desai',
            issueType: 'Coupon Invalid',
            orderId: 'ORD-12351',
            status: 'Resolved',
            resolutionTime: '15 mins'
        },
        {
            ticketId: 'TCK-2024-008',
            userName: 'Rahul Khanna',
            issueType: 'Driver Rude',
            orderId: 'ORD-12352',
            status: 'Open',
            resolutionTime: '-'
        },
        {
            ticketId: 'TCK-2024-009',
            userName: 'Sonia Mehta',
            issueType: 'Wrong Amount Charged',
            orderId: 'ORD-12353',
            status: 'Resolved',
            resolutionTime: '1 hr'
        },
        {
            ticketId: 'TCK-2024-010',
            userName: 'Arjun Rampal',
            issueType: 'Item Missing',
            orderId: 'ORD-12354',
            status: 'Resolved',
            resolutionTime: '4 hrs'
        },
        {
            ticketId: 'TCK-2024-011',
            userName: 'Meera Rajput',
            issueType: 'Order Delayed',
            orderId: 'ORD-12355',
            status: 'Open',
            resolutionTime: '-'
        },
        {
            ticketId: 'TCK-2024-012',
            userName: 'Kabir Singh',
            issueType: 'Quality Issue',
            orderId: 'ORD-12356',
            status: 'Resolved',
            resolutionTime: '2 days'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
