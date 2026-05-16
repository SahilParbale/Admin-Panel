import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-area-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-area-modal.component.html',
    styleUrl: './order-area-modal.component.scss'
})
export class OrderAreaModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() areaName = 'Selected Zone';
    @Input() orderCount = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    neighborhoodData: any[] = [];
    deliveryPerformance: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Total Regional Orders', value: this.orderCount || '1,240', change: '+12%', isPositive: true, icon: 'bx-map-pin' },
            { label: 'Avg Order Value', value: '₹480', change: '+₹45', isPositive: true, icon: 'bx-wallet' },
            { label: 'Delivery Success', value: '98.2%', change: 'Excellent', isPositive: true, icon: 'bx-check-circle' },
            { label: 'Peak Order Time', value: '7 PM - 9 PM', change: 'Evening Rush', isPositive: true, icon: 'bx-time-five' },
            { label: 'Active Riders', value: '18 Riders', change: 'Optimized', isPositive: true, icon: 'bx-cycling' },
            { label: 'Avg Delivery Time', value: '24 min', change: '-2 min', isPositive: true, icon: 'bx-bolt-circle' },
        ];

        this.neighborhoodData = [
            { name: 'Kothrud Central', orders: 450, revenue: '₹2,16,000', growth: '+15%', status: 'Hotspot' },
            { name: 'Paud Road',       orders: 320, revenue: '₹1,53,600', growth: '+8%',  status: 'Steady' },
            { name: 'Karve Nagar',     orders: 280, revenue: '₹1,34,400', growth: '+22%', status: 'Growing' },
            { name: 'Bavdhan',         orders: 190, revenue: '₹91,200',   growth: '+5%',  status: 'Emerging' },
        ];

        this.deliveryPerformance = [
            { metric: 'First-Attempt Delivery', value: '96%', status: 'Excellent', icon: 'bx-target-lock' },
            { metric: 'Rider Utilization',     value: '88%', status: 'High',      icon: 'bx-user-check' },
            { metric: 'Route Efficiency',      value: '92%', status: 'Excellent', icon: 'bx-trip' },
            { metric: 'Customer Satisfaction', value: '4.8/5', status: 'Top Rated', icon: 'bx-smile' },
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
