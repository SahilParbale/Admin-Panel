import { Component, OnInit } from '@angular/core';

interface RiderEarnings {
    riderName: string;
    period: string;
    deliveriesCompleted: number;
    earnings: number;
    incentives: number;
    penalties: number;
    netPayout: number;
    payoutStatus: 'Paid' | 'Pending' | 'Processing';
}

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-rider-earnings-table',
    templateUrl: './rider-earnings-table.component.html',
    styleUrls: ['./rider-earnings-table.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class RiderEarningsTableComponent implements OnInit {

    earningsList: RiderEarnings[] = [
        {
            riderName: 'Ramesh Kumar',
            period: 'Day',
            deliveriesCompleted: 15,
            earnings: 1200,
            incentives: 150,
            penalties: 0,
            netPayout: 1350,
            payoutStatus: 'Paid'
        },
        {
            riderName: 'Suresh Patil',
            period: 'Week',
            deliveriesCompleted: 85,
            earnings: 6800,
            incentives: 500,
            penalties: 50,
            netPayout: 7250,
            payoutStatus: 'Processing'
        },
        {
            riderName: 'Vijay Singh',
            period: 'Day',
            deliveriesCompleted: 20,
            earnings: 1600,
            incentives: 200,
            penalties: 0,
            netPayout: 1800,
            payoutStatus: 'Paid'
        },
        {
            riderName: 'Ajay Mehta',
            period: 'Week',
            deliveriesCompleted: 40,
            earnings: 3200,
            incentives: 0,
            penalties: 100,
            netPayout: 3100,
            payoutStatus: 'Pending'
        },
        {
            riderName: 'Deepak Sharma',
            period: 'Day',
            deliveriesCompleted: 18,
            earnings: 1440,
            incentives: 100,
            penalties: 0,
            netPayout: 1540,
            payoutStatus: 'Paid'
        },
        {
            riderName: 'Manish Gupta',
            period: 'Week',
            deliveriesCompleted: 70,
            earnings: 5600,
            incentives: 400,
            penalties: 0,
            netPayout: 6000,
            payoutStatus: 'Paid'
        },
        {
            riderName: 'Rajesh Verma',
            period: 'Day',
            deliveriesCompleted: 12,
            earnings: 960,
            incentives: 50,
            penalties: 20,
            netPayout: 990,
            payoutStatus: 'Processing'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
