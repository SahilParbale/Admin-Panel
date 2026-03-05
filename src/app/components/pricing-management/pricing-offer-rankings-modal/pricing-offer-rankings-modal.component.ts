import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-offer-rankings-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-offer-rankings-modal.component.html',
    styleUrls: ['./pricing-offer-rankings-modal.component.scss']
})
export class PricingOfferRankingsModalComponent {
    @Input() isOpen: boolean = false;
    @Input() offerName: string = '';
    @Input() redemptions: number = 0;
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
