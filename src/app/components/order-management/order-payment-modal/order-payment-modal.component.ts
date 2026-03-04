import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-payment-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-payment-modal.component.html',
    styleUrls: ['./order-payment-modal.component.scss']
})
export class OrderPaymentModalComponent {
    @Input() isOpen: boolean = false;
    @Input() paymentMethod: string = '';
    @Input() count: number = 0;
    @Output() close = new EventEmitter<void>();

    // Mock data for payment-specific insights
    successRate: string = '98.2%';
    avgTransactionFee: string = '₹0.00'; // Assuming UPI/COD
    settlementTime: string = 'Instant';
    topGateway: string = 'Razorpay / PhonePe';

    getThemeColor(): string {
        switch (this.paymentMethod.toUpperCase()) {
            case 'UPI': return '#4F46E5'; // Indigo
            case 'COD': return '#06B6D4'; // Cyan
            case 'CREDIT/DEBIT CARD': return '#F43F5E'; // Rose
            case 'WALLET': return '#F59E0B'; // Amber
            default: return '#64748b';
        }
    }

    getIcon(): string {
        switch (this.paymentMethod.toUpperCase()) {
            case 'UPI': return 'bx-mobile-vibration';
            case 'COD': return 'bx-money';
            case 'CREDIT/DEBIT CARD': return 'bx-credit-card';
            case 'WALLET': return 'bx-wallet';
            default: return 'bx-credit-card-front';
        }
    }

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }
}
