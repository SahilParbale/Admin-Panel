import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-revenue-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-revenue-modal.component.html',
    styleUrls: ['./pricing-revenue-modal.component.scss']
})
export class PricingRevenueModalComponent {
    @Input() isOpen: boolean = false;
    @Input() month: string = '';
    @Input() revenueBefore: number = 0;
    @Input() revenueAfter: number = 0;
    @Output() close = new EventEmitter<void>();

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }

    formatCurrency(value: number) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    }
}
