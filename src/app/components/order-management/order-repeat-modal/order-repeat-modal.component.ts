import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-repeat-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-repeat-modal.component.html',
    styleUrls: ['./order-repeat-modal.component.scss']
})
export class OrderRepeatModalComponent {
    @Input() isOpen: boolean = false;
    @Input() month: string = '';
    @Input() firstTimeOrders: number = 0;
    @Input() repeatOrders: number = 0;
    @Output() close = new EventEmitter<void>();

    // Mock data for retention insights
    retentionRate: string = '42%';
    churnRisk: string = 'Low (12%)';
    loyaltyTierDistribution: string = 'Gold: 15%, Silver: 30%, Bronze: 55%';
    clvGrowth: string = '+15% MoM';

    getTotalOrders(): number {
        return this.firstTimeOrders + this.repeatOrders;
    }

    getRepeatPercentage(): string {
        if (this.getTotalOrders() === 0) return '0%';
        return ((this.repeatOrders / this.getTotalOrders()) * 100).toFixed(1) + '%';
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
