import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-availability-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-availability-modal.component.html',
    styleUrl: './product-availability-modal.component.scss'
})
export class ProductAvailabilityModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() activeCount = 0;
    @Input() inactiveCount = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    categoryHealth: any[] = [];
    stockStatusData: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        const total = this.activeCount + this.inactiveCount;
        const activePct = total > 0 ? Math.round((this.activeCount / total) * 100) : 0;

        this.kpis = [
            { label: 'Active Inventory', value: this.activeCount, change: activePct + '% Ratio', isPositive: activePct > 80, icon: 'bx-check-shield' },
            { label: 'Inactive Items', value: this.inactiveCount, change: (100 - activePct) + '% Ratio', isPositive: false, icon: 'bx-error' },
            { label: 'Stock Health', value: activePct + '%', change: 'Good', isPositive: true, icon: 'bx-heart' },
            { label: 'Low Stock Alerts', value: '5 Items', change: 'Needs Restock', isPositive: false, icon: 'bx-notification' },
            { label: 'Out of Stock', value: '3 Items', change: 'Priority', isPositive: false, icon: 'bx-x-circle' },
            { label: 'Lead Time Avg', value: '2.4 Days', change: '-0.5 days', isPositive: true, icon: 'bx-timer' },
        ];

        this.categoryHealth = [
            { name: 'Tropical Fruits', active: 12, inactive: 2, pct: '85%', status: 'Healthy' },
            { name: 'Exotic Fruits',   active: 8,  inactive: 1, pct: '88%', status: 'Excellent' },
            { name: 'Berries',         active: 10, inactive: 3, pct: '76%', status: 'Watchlist' },
            { name: 'Citrus Fruits',   active: 15, inactive: 0, pct: '100%', status: 'Optimal' },
            { name: 'Dry Fruits',      active: 5,  inactive: 2, pct: '71%', status: 'Low' },
        ];

        this.stockStatusData = [
            { product: 'Alphonso Mango', category: 'Tropical', stock: 450, status: 'In Stock', health: '98%' },
            { product: 'Kashmir Apple', category: 'Fruits', stock: 120, status: 'Low Stock', health: '65%' },
            { product: 'Dragon Fruit', category: 'Exotic', stock: 85, status: 'In Stock', health: '92%' },
            { product: 'Organic Banana', category: 'Tropical', stock: 0, status: 'Out of Stock', health: '0%' },
            { product: 'Strawberry', category: 'Berries', stock: 210, status: 'In Stock', health: '88%' },
            { product: 'Pineapple', category: 'Tropical', stock: 15, status: 'Low Stock', health: '42%' },
        ];
    }

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('perf-modal-overlay')) {
            this.closeModal();
        }
    }
}
