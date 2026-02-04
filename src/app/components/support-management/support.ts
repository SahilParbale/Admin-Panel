import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-support-management',
    templateUrl: './support.html',
    styleUrls: ['./support.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class SupportManagementComponent implements OnInit {

    activeTab: string = 'tickets'; // tickets, chat, resolution, refund, agents, rules, knowledge, emergency, risk, ai
    selectedTicket: any = null;
    agentStatus: 'Online' | 'Offline' = 'Online';

    tickets = [
        {
            id: 'TKT-8842',
            orderId: 'ORD-5521',
            customer: 'Anjali Sharma',
            issue: 'Damaged Fruit',
            priority: 'Critical',
            status: 'Escalated',
            agent: 'Rahul K.',
            time: '12m ago',
            sla: '05:00',
            zone: 'Bandra West',
            value: '₹840'
        },
        {
            id: 'TKT-8845',
            orderId: 'ORD-5529',
            customer: 'Vikram Singh',
            issue: 'Late Delivery',
            priority: 'High',
            status: 'In Progress',
            agent: 'Priya M.',
            time: '45m ago',
            sla: '15:00',
            zone: 'Andheri East',
            value: '₹1,250'
        },
        {
            id: 'TKT-8850',
            orderId: 'ORD-5540',
            customer: 'Suresh Raina',
            issue: 'Refund Request',
            priority: 'Medium',
            status: 'Open',
            agent: 'Unassigned',
            time: '2m ago',
            sla: '58:00',
            zone: 'Powai',
            value: '₹450'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }

    selectTicket(ticket: any) {
        this.selectedTicket = ticket;
        this.activeTab = 'resolution';
    }

    toggleAgentStatus() {
        this.agentStatus = this.agentStatus === 'Online' ? 'Offline' : 'Online';
    }

}
