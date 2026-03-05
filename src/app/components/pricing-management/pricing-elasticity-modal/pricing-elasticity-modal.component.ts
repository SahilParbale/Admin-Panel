import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-elasticity-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-elasticity-modal.component.html',
    styleUrls: ['./pricing-elasticity-modal.component.scss']
})
export class PricingElasticityModalComponent {
    @Input() isOpen: boolean = false;
    @Input() priceChange: number = 0;
    @Input() demandChange: number = 0;
    @Output() close = new EventEmitter<void>();

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }

    get elasticityRatio(): string {
        if (this.priceChange === 0) return 'N/A';
        return (Math.abs(this.demandChange / this.priceChange)).toFixed(2);
    }

    get elasticityType(): string {
        const ratio = Math.abs(this.demandChange / this.priceChange);
        if (isNaN(ratio) || !isFinite(ratio)) return 'Undefined';
        if (ratio > 1) return 'Elastic';
        if (ratio < 1) return 'Inelastic';
        return 'Unit Elastic';
    }

    get elasticityColor(): string {
        const ratio = Math.abs(this.demandChange / this.priceChange);
        if (isNaN(ratio) || !isFinite(ratio)) return '#64748b';
        if (ratio > 1) return '#ef4444';
        if (ratio < 1) return '#10b981';
        return '#f59e0b';
    }

    get priceSign(): string {
        return this.priceChange >= 0 ? '+' : '';
    }

    get demandSign(): string {
        return this.demandChange >= 0 ? '+' : '';
    }
}
