import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-payment-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-payment-modal.component.html',
    styleUrl: './order-payment-modal.component.scss'
})
export class OrderPaymentModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() paymentMethod = 'All Methods';
    @Input() count = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    gatewayData: any[] = [];
    transactionLog: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Payment Success', value: '99.4%', change: '+0.2%', isPositive: true, icon: 'bx-check-shield' },
            { label: 'Total Transaction', value: this.count || '1,250', change: 'Current', isPositive: true, icon: 'bx-credit-card' },
            { label: 'Avg Payout Time', value: '24 Hrs', change: 'Standard', isPositive: true, icon: 'bx-timer' },
            { label: 'Failed Payments', value: '8', change: '-12%', isPositive: true, icon: 'bx-error-alt' },
            { label: 'Refund Volume', value: '₹4,200', change: '0.8% of Rev', isPositive: true, icon: 'bx-reset' },
            { label: 'Chargebacks', value: '0', change: 'Excellent', isPositive: true, icon: 'bx-shield-quarter' },
        ];

        this.gatewayData = [
            { gateway: 'Razorpay (UPI)', volume: 640, revenue: '₹2,88,000', fee: '₹5,760', status: 'Stable' },
            { gateway: 'Stripe (Cards)',  volume: 320, revenue: '₹1,92,000', fee: '₹5,760', status: 'Stable' },
            { gateway: 'COD (Manual)',    volume: 180, revenue: '₹45,000',  fee: '₹0',     status: 'Warning' },
            { gateway: 'Paytm Wallet',    volume: 110, revenue: '₹22,000',  fee: '₹440',   status: 'Stable' },
        ];

        this.transactionLog = [
            { id: 'TXN-4421', customer: 'Rohan Mehra', amount: '₹1,250', method: 'UPI', status: 'Success' },
            { id: 'TXN-4456', customer: 'Simran J.',   amount: '₹850',   method: 'Card', status: 'Success' },
            { id: 'TXN-4478', customer: 'John Doe',    amount: '₹2,100', method: 'COD',  status: 'Pending' },
            { id: 'TXN-4502', customer: 'Alice W.',    amount: '₹450',   method: 'UPI', status: 'Success' },
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
