import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-top-selling-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-top-selling-modal.component.html',
    styleUrl: './product-top-selling-modal.component.scss'
})
export class ProductTopSellingModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() productName = 'Overall Top Products';
    @Input() quantitySold = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    demandHistory: any[] = [];
    performanceMetrics: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Units Sold', value: this.quantitySold || '1,840', change: '+22.3%', isPositive: true, icon: 'bx-cart-alt' },
            { label: 'Customer Rating', value: '4.8 / 5', change: '96% positive', isPositive: true, icon: 'bx-star' },
            { label: 'Avg Prep Time', value: '12 min', change: 'Efficient', isPositive: true, icon: 'bx-time-five' },
            { label: 'Market Position', value: '#1 Seller', change: 'Top Tier', isPositive: true, icon: 'bx-trophy' },
            { label: 'Stock Turnover', value: '8.4x', change: '+1.2x', isPositive: true, icon: 'bx-repost' },
            { label: 'Repeat Purchase', value: '42%', change: '+5%', isPositive: true, icon: 'bx-refresh' },
        ];

        this.demandHistory = [
            { day: 'Monday', units: 145, revenue: '₹17,400', satisfaction: 4.7, growth: '+5%' },
            { day: 'Tuesday', units: 162, revenue: '₹19,440', satisfaction: 4.8, growth: '+12%' },
            { day: 'Wednesday', units: 180, revenue: '₹21,600', satisfaction: 4.9, growth: '+18%' },
            { day: 'Thursday', units: 155, revenue: '₹18,600', satisfaction: 4.7, growth: '-2%' },
            { day: 'Friday', units: 210, revenue: '₹25,200', satisfaction: 4.8, growth: '+15%' },
            { day: 'Saturday', units: 285, revenue: '₹34,200', satisfaction: 4.9, growth: '+25%' },
            { day: 'Sunday', units: 240, revenue: '₹28,800', satisfaction: 4.8, growth: '+10%' },
        ];

        this.performanceMetrics = [
            { metric: 'Sales Velocity', value: '94%', status: 'Excellent', icon: 'bx-trending-up' },
            { metric: 'Inventory Health', value: '88%', status: 'Good', icon: 'bx-pulse' },
            { metric: 'Fulfillment Speed', value: '96%', status: 'Excellent', icon: 'bx-bolt' },
            { metric: 'Quality Rating', value: '4.9/5', status: 'Top Rated', icon: 'bx-award' },
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
