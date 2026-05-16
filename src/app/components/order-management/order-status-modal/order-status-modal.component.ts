import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-status-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-status-modal.component.html',
    styleUrl: './order-status-modal.component.scss'
})
export class OrderStatusModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() statusName = 'All Statuses';
    @Input() orderCount = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    statusVolumeData: any[] = [];
    bottleneckAnalysis: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Fulfillment Rate', value: '94.2%', change: '+2.1%', isPositive: true, icon: 'bx-check-double' },
            { label: 'Active Orders', value: this.orderCount || '482', change: 'Current', isPositive: true, icon: 'bx-package' },
            { label: 'Avg Processing Time', value: '14 min', change: '-3 min', isPositive: true, icon: 'bx-time' },
            { label: 'Pending Dispatch', value: '45', change: 'Warning', isPositive: false, icon: 'bx-loader-circle' },
            { label: 'Rider Assigned', value: '92%', change: 'High', isPositive: true, icon: 'bx-user-check' },
            { label: 'SLA Breaches', value: '12', change: '-4', isPositive: true, icon: 'bx-error-circle' },
        ];

        this.statusVolumeData = [
            { status: 'New Orders',     count: 125, avgTime: '2 min',  revenue: '₹45,200', health: 'Excellent' },
            { status: 'In Processing',  count: 84,  avgTime: '8 min',  revenue: '₹32,800', health: 'Good' },
            { status: 'Ready for Pickup', count: 56,  avgTime: '12 min', revenue: '₹22,100', health: 'Good' },
            { status: 'Out for Delivery', count: 185, avgTime: '24 min', revenue: '₹68,400', health: 'Excellent' },
            { status: 'Delayed',        count: 12,  avgTime: '45 min', revenue: '₹4,800',  health: 'Critical' },
        ];

        this.bottleneckAnalysis = [
            { stage: 'Kitchen/Prep',    delay: '+4 min', impact: 'High', status: 'Warning', icon: 'bx-dish' },
            { stage: 'Packing',         delay: '+1 min', impact: 'Low',  status: 'Healthy', icon: 'bx-box' },
            { stage: 'Rider Pickup',    delay: '+8 min', impact: 'Critical', status: 'Issue', icon: 'bx-cycling' },
            { stage: 'Last Mile',       delay: '+2 min', impact: 'Medium', status: 'Healthy', icon: 'bx-map-pin' },
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
