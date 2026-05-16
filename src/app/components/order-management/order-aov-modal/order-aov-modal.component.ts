import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-aov-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-aov-modal.component.html',
    styleUrl: './order-aov-modal.component.scss'
})
export class OrderAovModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() period = 'Monthly';
    @Input() aovValue = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    orderSizeData: any[] = [];
    highValueOrders: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Average Order Value', value: '₹' + (this.aovValue || 450), change: '+15.2%', isPositive: true, icon: 'bx-wallet' },
            { label: 'Total Revenue', value: '₹5,42,000', change: '+8.4%', isPositive: true, icon: 'bx-money' },
            { label: 'Basket Size Avg', value: '3.4 Items', change: '+0.5', isPositive: true, icon: 'bx-shopping-bag' },
            { label: 'Upsell Success', value: '24%', change: 'Optimal', isPositive: true, icon: 'bx-trending-up' },
            { label: 'Discount Impact', value: '₹12,400', change: '-4%', isPositive: true, icon: 'bx-purchase-tag' },
            { label: 'Premium Users', value: '18%', change: 'Growing', isPositive: true, icon: 'bx-crown' },
        ];

        this.orderSizeData = [
            { range: 'Under ₹200', count: 120, revenue: '₹18,000', margin: '15%', status: 'Low Tier' },
            { range: '₹200 - ₹500', count: 450, revenue: '₹1,57,500', margin: '22%', status: 'Bulk' },
            { range: '₹500 - ₹1000', count: 210, revenue: '₹1,57,500', margin: '28%', status: 'Premium' },
            { range: 'Above ₹1000', count: 85,  revenue: '₹1,10,500', margin: '35%', status: 'Elite' },
        ];

        this.highValueOrders = [
            { id: 'ORD-9012', customer: 'Rajesh Kumar', amount: '₹1,850', items: 12, status: 'Completed' },
            { id: 'ORD-9045', customer: 'Anjali Singh', amount: '₹1,420', items: 8,  status: 'Completed' },
            { id: 'ORD-9078', customer: 'Vikram S.',   amount: '₹2,100', items: 15, status: 'Packed' },
            { id: 'ORD-9102', customer: 'Sita Ram',    amount: '₹1,250', items: 6,  status: 'New' },
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
