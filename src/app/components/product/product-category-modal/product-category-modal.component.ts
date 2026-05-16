import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-category-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-category-modal.component.html',
    styleUrl: './product-category-modal.component.scss'
})
export class ProductCategoryModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() categoryName = 'All Categories';
    @Input() inStock = 0;
    @Input() lowStock = 0;
    @Input() outOfStock = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    subCategoryData: any[] = [];
    productPerformance: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        const total = this.inStock + this.lowStock + this.outOfStock || 48;
        const healthy = this.inStock || 35;

        this.kpis = [
            { label: 'Total SKUs', value: total, change: '+4 New', isPositive: true, icon: 'bx-layer' },
            { label: 'Active Items', value: healthy, change: '72% ratio', isPositive: true, icon: 'bx-check-circle' },
            { label: 'Low/Out Items', value: (total - healthy), change: 'Restock Required', isPositive: false, icon: 'bx-error-circle' },
            { label: 'Market Share', value: '28.4%', change: '+2.1%', isPositive: true, icon: 'bx-pie-chart-alt' },
            { label: 'Avg Unit Price', value: '₹145', change: 'Stable', isPositive: true, icon: 'bx-tag' },
            { label: 'Category ROI', value: '4.2x', change: 'Excellent', isPositive: true, icon: 'bx-trending-up' },
        ];

        this.subCategoryData = [
            { name: 'Fresh Fruits', items: 18, revenue: '₹45,200', growth: '+12%', status: 'Primary' },
            { name: 'Organic Range', items: 12, revenue: '₹28,600', growth: '+25%', status: 'Growing' },
            { name: 'Exotic Imports', items: 8,  revenue: '₹52,800', growth: '+18%', status: 'Premium' },
            { name: 'Dry & Packaged', items: 10, revenue: '₹15,400', growth: '+5%',  status: 'Steady' },
        ];

        this.productPerformance = [
            { product: 'Alphonso Mango', stock: 'In Stock', rating: 4.8, margin: '22%', trend: 'Upward' },
            { product: 'Kashmir Apple',  stock: 'Low Stock', rating: 4.5, margin: '18%', trend: 'Steady' },
            { product: 'Dragon Fruit',   stock: 'In Stock', rating: 4.9, margin: '31%', trend: 'Upward' },
            { product: 'Strawberry',     stock: 'In Stock', rating: 4.7, margin: '25%', trend: 'Seasonal' },
            { product: 'Organic Banana', stock: 'Out of Stock', rating: 4.2, margin: '15%', trend: 'Restocking' },
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
