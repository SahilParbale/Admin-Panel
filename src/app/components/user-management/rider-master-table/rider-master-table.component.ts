import { Component, OnInit } from '@angular/core';

interface Rider {
    id: string;
    name: string;
    phone: string;
    vehicleType: string;
    assignedZone: string;
    onlineStatus: 'Online' | 'Offline';
    totalDeliveries: number;
    rating: number;
    onTimeDelivery: number;
    status: 'Active' | 'Suspended';
}

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-rider-master-table',
    templateUrl: './rider-master-table.component.html',
    styleUrls: ['./rider-master-table.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class RiderMasterTableComponent implements OnInit {

    riders: Rider[] = [
        {
            id: 'RDR-001',
            name: 'Ramesh Kumar',
            phone: '+91 9876543210',
            vehicleType: 'Bike',
            assignedZone: 'North Mumbai',
            onlineStatus: 'Online',
            totalDeliveries: 1540,
            rating: 4.8,
            onTimeDelivery: 98,
            status: 'Active'
        },
        {
            id: 'RDR-002',
            name: 'Suresh Patil',
            phone: '+91 8765432109',
            vehicleType: 'Scooter',
            assignedZone: 'South Mumbai',
            onlineStatus: 'Offline',
            totalDeliveries: 850,
            rating: 4.5,
            onTimeDelivery: 92,
            status: 'Active'
        },
        {
            id: 'RDR-003',
            name: 'Vijay Singh',
            phone: '+91 7654321098',
            vehicleType: 'Bike',
            assignedZone: 'Navi Mumbai',
            onlineStatus: 'Online',
            totalDeliveries: 2100,
            rating: 4.9,
            onTimeDelivery: 99,
            status: 'Active'
        },
        {
            id: 'RDR-004',
            name: 'Ajay Mehta',
            phone: '+91 6543210987',
            vehicleType: 'Scooter',
            assignedZone: 'Thane',
            onlineStatus: 'Offline',
            totalDeliveries: 320,
            rating: 4.2,
            onTimeDelivery: 85,
            status: 'Suspended'
        },
        {
            id: 'RDR-005',
            name: 'Deepak Sharma',
            phone: '+91 5432109876',
            vehicleType: 'Bike',
            assignedZone: 'Andheri',
            onlineStatus: 'Online',
            totalDeliveries: 1250,
            rating: 4.7,
            onTimeDelivery: 96,
            status: 'Active'
        },
        {
            id: 'RDR-006',
            name: 'Manish Gupta',
            phone: '+91 4321098765',
            vehicleType: 'Bike',
            assignedZone: 'Borivali',
            onlineStatus: 'Online',
            totalDeliveries: 980,
            rating: 4.6,
            onTimeDelivery: 94,
            status: 'Active'
        },
        {
            id: 'RDR-007',
            name: 'Rajesh Verma',
            phone: '+91 3210987654',
            vehicleType: 'Scooter',
            assignedZone: 'Dadar',
            onlineStatus: 'Offline',
            totalDeliveries: 500,
            rating: 4.4,
            onTimeDelivery: 90,
            status: 'Active'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
