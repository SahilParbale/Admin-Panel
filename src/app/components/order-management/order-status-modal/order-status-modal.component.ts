import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-status-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-status-modal.component.html',
    styleUrls: ['./order-status-modal.component.scss']
})
export class OrderStatusModalComponent {
    @Input() isOpen: boolean = false;
    @Input() statusName: string = '';
    @Input() orderCount: number = 0;
    @Output() close = new EventEmitter<void>();

    // Mock data for status-specific insights
    avgTimeInStatus: string = '12 mins';
    efficiencyTrend: string = '+8% vs Average';
    bottleneckAlert: string = 'No issues detected';
    recommendation: string = 'Current throughput is optimal for this status.';

    getStatusColor(): string {
        switch (this.statusName.toLowerCase()) {
            case 'new': return '#6366f1';
            case 'packed': return '#f59e0b';
            case 'out for delivery': return '#06b6d4';
            case 'delivered': return '#10b981';
            default: return '#64748b';
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
