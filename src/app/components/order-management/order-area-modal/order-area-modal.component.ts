import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-area-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-area-modal.component.html',
    styleUrls: ['./order-area-modal.component.scss']
})
export class OrderAreaModalComponent {
    @Input() isOpen: boolean = false;
    @Input() areaName: string = '';
    @Input() orderCount: number = 0;
    @Output() close = new EventEmitter<void>();

    // Mock data for area-specific insights
    avgDeliveryTime: string = '28 mins';
    activeRiders: number = 12;
    growthRate: string = '+15%';
    topRestaurant: string = 'Burger King - ' + this.areaName;

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }
}
