import { Component, OnInit } from '@angular/core';

interface User {
    id: string;
    name: string;
    phone: string;
    email: string;
    registrationDate: string;
    lastActive: string;
    totalOrders: number;
    totalSpend: number;
    avgOrderValue: number;
    status: 'Active' | 'Inactive';
}

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-master-table',
    templateUrl: './user-master-table.component.html',
    styleUrls: ['./user-master-table.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class UserMasterTableComponent implements OnInit {

    users: User[] = [
        {
            id: 'USR-001',
            name: 'Sahil Parbale',
            phone: '+91 9876543210',
            email: 'sahil@example.com',
            registrationDate: '2025-01-10',
            lastActive: '2026-02-02',
            totalOrders: 15,
            totalSpend: 12500,
            avgOrderValue: 833,
            status: 'Active'
        },
        {
            id: 'USR-002',
            name: 'Rohan Sharma',
            phone: '+91 8765432109',
            email: 'rohan@example.com',
            registrationDate: '2025-01-15',
            lastActive: '2026-02-01',
            totalOrders: 8,
            totalSpend: 6400,
            avgOrderValue: 800,
            status: 'Inactive'
        },
        {
            id: 'USR-003',
            name: 'Priya Singh',
            phone: '+91 7654321098',
            email: 'priya@example.com',
            registrationDate: '2025-01-20',
            lastActive: '2026-02-03',
            totalOrders: 22,
            totalSpend: 18900,
            avgOrderValue: 859,
            status: 'Active'
        },
        {
            id: 'USR-004',
            name: 'Amit Verma',
            phone: '+91 6543210987',
            email: 'amit@example.com',
            registrationDate: '2025-01-25',
            lastActive: '2026-01-30',
            totalOrders: 5,
            totalSpend: 3000,
            avgOrderValue: 600,
            status: 'Active'
        },
        {
            id: 'USR-005',
            name: 'Neha Gupta',
            phone: '+91 5432109876',
            email: 'neha@example.com',
            registrationDate: '2025-02-01',
            lastActive: '2026-02-03',
            totalOrders: 2,
            totalSpend: 1200,
            avgOrderValue: 600,
            status: 'Active'
        },
        {
            id: 'USR-006',
            name: 'Vikram Malhotra',
            phone: '+91 9988776655',
            email: 'vikram.m@example.com',
            registrationDate: '2025-01-05',
            lastActive: '2026-02-01',
            totalOrders: 45,
            totalSpend: 35000,
            avgOrderValue: 777,
            status: 'Active'
        },
        {
            id: 'USR-007',
            name: 'Anjali Desai',
            phone: '+91 8877665544',
            email: 'anjali.desai@example.com',
            registrationDate: '2025-01-22',
            lastActive: '2026-01-28',
            totalOrders: 12,
            totalSpend: 9600,
            avgOrderValue: 800,
            status: 'Inactive'
        },
        {
            id: 'USR-008',
            name: 'Rahul Khanna',
            phone: '+91 7766554433',
            email: 'rahul.k@example.com',
            registrationDate: '2025-01-18',
            lastActive: '2026-02-02',
            totalOrders: 28,
            totalSpend: 21000,
            avgOrderValue: 750,
            status: 'Active'
        },
        {
            id: 'USR-009',
            name: 'Sonia Mehta',
            phone: '+91 6655443322',
            email: 'sonia.m@example.com',
            registrationDate: '2025-01-30',
            lastActive: '2026-02-03',
            totalOrders: 3,
            totalSpend: 2500,
            avgOrderValue: 833,
            status: 'Active'
        },
        {
            id: 'USR-010',
            name: 'Arjun Rampal',
            phone: '+91 5544332211',
            email: 'arjun.r@example.com',
            registrationDate: '2025-01-12',
            lastActive: '2026-01-25',
            totalOrders: 60,
            totalSpend: 54000,
            avgOrderValue: 900,
            status: 'Active'
        },
        {
            id: 'USR-011',
            name: 'Meera Rajput',
            phone: '+91 4433221100',
            email: 'meera.r@example.com',
            registrationDate: '2025-02-02',
            lastActive: '2026-02-02',
            totalOrders: 1,
            totalSpend: 450,
            avgOrderValue: 450,
            status: 'Active'
        },
        {
            id: 'USR-012',
            name: 'Kabir Singh',
            phone: '+91 3322110099',
            email: 'kabir.s@example.com',
            registrationDate: '2025-01-08',
            lastActive: '2026-01-15',
            totalOrders: 0,
            totalSpend: 0,
            avgOrderValue: 0,
            status: 'Inactive'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
