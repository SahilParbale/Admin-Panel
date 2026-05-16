import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-sales-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-sales-modal.component.html',
    styleUrl: './product-sales-modal.component.scss'
})
export class ProductSalesModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() period = 'Week';
    @Input() selectedLabel = '';
    @Input() data: any = null;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    categorySales: any[] = [];
    productSales: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Total Units Sold', value: '4,850', change: '+12.5%', isPositive: true, icon: 'bx-shopping-bag' },
            { label: 'Avg Sales Velocity', value: '156/day', change: '+8%', isPositive: true, icon: 'bx-bolt-circle' },
            { label: 'Peak Sales Day', value: 'Saturday', change: '850 units', isPositive: true, icon: 'bx-calendar-star' },
            { label: 'New Customers', value: '1,240', change: '+15%', isPositive: true, icon: 'bx-user-plus' },
            { label: 'Return Rate', value: '1.2%', change: '-0.5%', isPositive: true, icon: 'bx-refresh' },
            { label: 'Market Share', value: '32%', change: '+2.4%', isPositive: true, icon: 'bx-pie-chart-alt-2' },
        ];

        this.categorySales = [
            { name: 'Tropical Fruits', units: 1850, growth: '+15%', velocity: 'High', status: 'Excellent' },
            { name: 'Exotic Fruits',   units: 920,  growth: '+22%', velocity: 'Medium', status: 'Good' },
            { name: 'Citrus Fruits',   units: 1100, growth: '+8%',  velocity: 'High', status: 'Healthy' },
            { name: 'Berries',         units: 750,  growth: '+18%', velocity: 'Steady', status: 'Good' },
            { name: 'Combos & Packs',  units: 420,  growth: '+10%', velocity: 'Growing', status: 'Average' },
            { name: 'Dry Fruits',      units: 310,  growth: '+25%', velocity: 'Niche', status: 'Premium' },
        ];

        this.productSales = [
            { category: 'Exotic Fruits',   product: 'Dragon Fruit',   units: 320, velocity: '78%', growth: '+25%', trend: 'Upward' },
            { category: 'Exotic Fruits',   product: 'Passion Fruit',  units: 210, velocity: '65%', growth: '+15%', trend: 'Emerging' },
            { category: 'Tropical Fruits', product: 'Banana',         units: 850, velocity: '92%', growth: '+12%', trend: 'Upward' },
            { category: 'Tropical Fruits', product: 'Mango',          units: 620, velocity: '85%', growth: '+18%', trend: 'Steady' },
            { category: 'Tropical Fruits', product: 'Pineapple',      units: 380, velocity: '74%', growth: '+8%',  trend: 'Steady' },
            { category: 'Citrus Fruits',   product: 'Orange',         units: 520, velocity: '82%', growth: '+5%',  trend: 'Steady' },
            { category: 'Citrus Fruits',   product: 'Lemon',          units: 480, velocity: '80%', growth: '+8%',  trend: 'Steady' },
            { category: 'Berries',         product: 'Strawberry',     units: 410, velocity: '88%', growth: '+20%', trend: 'Seasonal' },
            { category: 'Berries',         product: 'Blueberry',      units: 240, velocity: '70%', growth: '+22%', trend: 'Upward' },
            { category: 'Dry Fruits',      product: 'Cashews',        units: 155, velocity: '68%', growth: '+30%', trend: 'Upward' },
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
