import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-offer-rankings-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-offer-rankings-modal.component.html',
    styleUrl: './pricing-offer-rankings-modal.component.scss'
})
export class PricingOfferRankingsModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() offerName = 'All Offers';
    @Input() redemptions = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    rankingData: any[] = [];
    lifespanAudit: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Avg Conversion', value: '18.4%', change: '+3.2%', isPositive: true, icon: 'bx-refresh' },
            { label: 'Total Redemptions', value: this.redemptions || '2,450', change: 'Live', isPositive: true, icon: 'bx-purchase-tag' },
            { label: 'Revenue Generated', value: '₹4,82,000', change: '+15%', isPositive: true, icon: 'bx-wallet' },
            { label: 'Cost per Action', value: '₹14.2', change: '-₹2', isPositive: true, icon: 'bx-money' },
            { label: 'Unique Users', value: '1,820', change: '+240', isPositive: true, icon: 'bx-user' },
            { label: 'Virality Score', value: '4.2/5', change: 'High', isPositive: true, icon: 'bx-share-alt' },
        ];

        this.rankingData = [
            { name: 'FRUIT50 (Flash)', usage: 850, revenue: '₹1,25,000', conv: '22%', status: 'Best Seller' },
            { name: 'SUMMER20 (Open)', usage: 640, revenue: '₹1,84,000', conv: '15%', status: 'Top Volume' },
            { name: 'BERRYLOVE (Target)', usage: 420, revenue: '₹62,000',  conv: '28%', status: 'High Conv' },
            { name: 'NEWUSER100 (Acq)', usage: 310, revenue: '₹31,000',  conv: '12%', status: 'Acquisition' },
        ];

        this.lifespanAudit = [
            { id: 'OFF-101', name: 'FRUIT50', duration: '4 Hours', velocity: '212/hr', impact: 'High', health: 'Critical' },
            { id: 'OFF-102', name: 'SUMMER20', duration: '7 Days',  velocity: '91/day', impact: 'Stable', health: 'Healthy' },
            { id: 'OFF-103', name: 'BERRYLOVE', duration: '3 Days',  velocity: '140/day', impact: 'Niche', health: 'Healthy' },
            { id: 'OFF-104', name: 'NEWUSER100', duration: 'Active', velocity: '10/day', impact: 'Low', health: 'Healthy' },
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
