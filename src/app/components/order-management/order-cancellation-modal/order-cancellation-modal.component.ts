import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-cancellation-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-cancellation-modal.component.html',
    styleUrl: './order-cancellation-modal.component.scss'
})
export class OrderCancellationModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() period = 'All Time';
    @Input() rate = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    reasonBreakdown: any[] = [];
    highRiskOrders: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Avg Cancellation Rate', value: (this.rate || 8.4) + '%', change: '-1.2%', isPositive: true, icon: 'bx-trending-down' },
            { label: 'Cancelled Orders', value: '142', change: '+5 vs last week', isPositive: false, icon: 'bx-x-circle' },
            { label: 'Revenue Lost', value: '₹42,500', change: '8.5% of total', isPositive: false, icon: 'bx-money-withdraw' },
            { label: 'Refund Processing', value: '2.1 Days', change: '-0.4 days', isPositive: true, icon: 'bx-time-five' },
            { label: 'Customer Retention', value: '64%', change: 'Low', isPositive: false, icon: 'bx-user-voice' },
            { label: 'Critical Area', value: 'Kothrud', change: '15% rate', isPositive: false, icon: 'bx-map-alt' },
        ];

        this.reasonBreakdown = [
            { reason: 'Customer Changed Mind', count: 45, impact: '₹12,400', trend: 'Steady', status: 'Normal' },
            { reason: 'Delivery Delayed',      count: 38, impact: '₹10,800', trend: 'Increasing', status: 'Warning' },
            { reason: 'Incorrect Address',     count: 22, impact: '₹6,200',  trend: 'Decreasing', status: 'Normal' },
            { reason: 'Item Out of Stock',     count: 15, impact: '₹4,500',  trend: 'Decreasing', status: 'Resolved' },
            { reason: 'App/Payment Glitch',    count: 22, impact: '₹8,600',  trend: 'Increasing', status: 'Critical' },
        ];

        this.highRiskOrders = [
            { id: 'ORD-8821', customer: 'Rahul Sharma', amount: '₹1,200', reason: 'Delayed', status: 'Refunded' },
            { id: 'ORD-8845', customer: 'Sneha Patil',  amount: '₹850',   reason: 'Changed Mind', status: 'Pending' },
            { id: 'ORD-8856', customer: 'Amit Verma',   amount: '₹2,100', reason: 'Stock Issue', status: 'Refunded' },
            { id: 'ORD-8871', customer: 'Priya Dhar',   amount: '₹450',   reason: 'Delayed', status: 'Initiated' },
        ];
    }

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('perf-modal-overlay')) {
            this.closeModal();
        }
    }
}
