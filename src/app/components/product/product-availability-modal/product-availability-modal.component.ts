import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-availability-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-availability-modal.component.html',
    styleUrls: ['./product-availability-modal.component.scss']
})
export class ProductAvailabilityModalComponent {
    @Input() isOpen: boolean = false;
    @Input() activeCount: number = 0;
    @Input() inactiveCount: number = 0;
    @Output() close = new EventEmitter<void>();

    get totalCount() {
        return this.activeCount + this.inactiveCount;
    }

    get activePercentage() {
        return this.totalCount > 0 ? Math.round((this.activeCount / this.totalCount) * 100) : 0;
    }

    get inactivePercentage() {
        return this.totalCount > 0 ? Math.round((this.inactiveCount / this.totalCount) * 100) : 0;
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
