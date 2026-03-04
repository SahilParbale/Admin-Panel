import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-aov-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-aov-modal.component.html',
    styleUrls: ['./order-aov-modal.component.scss']
})
export class OrderAovModalComponent {
    @Input() isOpen: boolean = false;
    @Input() period: string = '';
    @Input() aovValue: number = 0;
    @Output() close = new EventEmitter<void>();

    // Mock data for AOV insights
    popularSegment: string = 'Corporate Platters';
    upsellConversion: string = '24%';
    peakTime: string = '12:30 PM - 1:45 PM';
    revenueImpact: string = '+12% vs last week';

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }
}
