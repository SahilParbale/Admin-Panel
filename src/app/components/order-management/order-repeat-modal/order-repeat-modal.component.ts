import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-repeat-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-repeat-modal.component.html',
    styleUrl: './order-repeat-modal.component.scss'
})
export class OrderRepeatModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() month = 'Current Period';
    @Input() firstTimeOrders = 0;
    @Input() repeatOrders = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    retentionData: any[] = [];
    loyalCustomers: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        const total = (this.firstTimeOrders || 320) + (this.repeatOrders || 180);
        const repeatRate = ((this.repeatOrders || 180) / total * 100).toFixed(1);

        this.kpis = [
            { label: 'Retention Rate', value: repeatRate + '%', change: '+4.2%', isPositive: true, icon: 'bx-refresh' },
            { label: 'Returning Buyers', value: this.repeatOrders || '180', change: '+22', isPositive: true, icon: 'bx-user-voice' },
            { label: 'Customer LTV', value: '₹4,850', change: '+₹210', isPositive: true, icon: 'bx-trending-up' },
            { label: 'Avg Orders / User', value: '2.8', change: 'Consistent', isPositive: true, icon: 'bx-hash' },
            { label: 'Churn Risk', value: '5.2%', change: '-1.1%', isPositive: true, icon: 'bx-user-minus' },
            { label: 'Loyalty Points', value: '84k', change: 'Active', isPositive: true, icon: 'bx-star' },
        ];

        this.retentionData = [
            { segment: 'New Customers', count: this.firstTimeOrders || 320, revenue: '₹1,44,000', ltv: '₹450', status: 'Acquisition' },
            { segment: 'Repeat (2-3 Times)', count: 120, revenue: '₹84,000',  ltv: '₹700', status: 'Active' },
            { segment: 'Loyal (4-10 Times)', count: 45,  revenue: '₹54,000',  ltv: '₹1,200', status: 'VIP' },
            { segment: 'Elite (10+ Times)',  count: 15,  revenue: '₹28,500',  ltv: '₹1,900', status: 'Elite' },
        ];

        this.loyalCustomers = [
            { id: 'CUST-102', name: 'Aman Deep', totalOrders: 18, totalSpend: '₹12,400', lastOrder: '2 days ago', status: 'Elite' },
            { id: 'CUST-245', name: 'Sana Khan',  totalOrders: 14, totalSpend: '₹9,800',  lastOrder: 'Yesterday',  status: 'VIP' },
            { id: 'CUST-382', name: 'Peter P.',   totalOrders: 12, totalSpend: '₹8,200',  lastOrder: '4 days ago', status: 'VIP' },
            { id: 'CUST-412', name: 'Meera S.',   totalOrders: 9,  totalSpend: '₹6,500',  lastOrder: 'Today',      status: 'Active' },
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
