import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-discount-impact-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-discount-impact-modal.component.html',
    styleUrl: './pricing-discount-impact-modal.component.scss'
})
export class PricingDiscountImpactModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() discountTier = 'All Tiers';
    @Input() salesVolume = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    tierImpact: any[] = [];
    campaignAudit: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Sales Lift', value: '+28.5%', change: '+120 Units', isPositive: true, icon: 'bx-rocket' },
            { label: 'Discount Efficiency', value: '82%', change: 'High', isPositive: true, icon: 'bx-target-lock' },
            { label: 'Avg Basket Size', value: '4.2 Items', change: '+0.8', isPositive: true, icon: 'bx-shopping-bag' },
            { label: 'Cannibalization Rate', value: '4.5%', change: '-2%', isPositive: true, icon: 'bx-recycle' },
            { label: 'Customer Acquisition', value: '240', change: '+15%', isPositive: true, icon: 'bx-user-plus' },
            { label: 'Profit Retention', value: '92%', change: 'Stable', isPositive: true, icon: 'bx-shield' },
        ];

        this.tierImpact = [
            { tier: '5% - 10%', sales: 450, growth: '+12%', contribution: '25%', status: 'Stable' },
            { tier: '10% - 20%', sales: 820, growth: '+35%', contribution: '45%', status: 'Excellent' },
            { tier: '20% - 30%', sales: 310, growth: '+18%', contribution: '20%', status: 'Aggressive' },
            { tier: 'Above 30%',  sales: 120, growth: '+5%',  contribution: '10%', status: 'Low Margin' },
        ];

        this.campaignAudit = [
            { name: 'Summer Fresh 20', spend: '₹12,000', return: '₹84,000', roi: '7.0x', status: 'Completed' },
            { name: 'Weekend Berries', spend: '₹4,500',  return: '₹28,000', roi: '6.2x', status: 'Active' },
            { name: 'Flash 40 Sale',   spend: '₹8,000',  return: '₹32,000', roi: '4.0x', status: 'Completed' },
            { name: 'Exotic Monday',   spend: '₹3,200',  return: '₹18,500', roi: '5.8x', status: 'Active' },
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
