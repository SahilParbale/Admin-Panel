import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-discount-impact-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-discount-impact-modal.component.html',
    styleUrls: ['./pricing-discount-impact-modal.component.scss']
})
export class PricingDiscountImpactModalComponent {
    @Input() isOpen: boolean = false;
    @Input() discountTier: string = '';
    @Input() salesVolume: number = 0;
    @Output() close = new EventEmitter<void>();

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }

    formatNumber(value: number) {
        return new Intl.NumberFormat('en-IN').format(value);
    }
}
