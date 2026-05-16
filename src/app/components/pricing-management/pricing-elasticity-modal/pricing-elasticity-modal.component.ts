import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-elasticity-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-elasticity-modal.component.html',
    styleUrl: './pricing-elasticity-modal.component.scss'
})
export class PricingElasticityModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() priceChange = 0;
    @Input() demandChange = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    elasticityData: any[] = [];
    sensitivityAudit: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        const factor = (Math.abs(this.demandChange || 12) / Math.abs(this.priceChange || 5)).toFixed(2);

        this.kpis = [
            { label: 'Elasticity Factor', value: factor, change: 'Highly Elastic', isPositive: true, icon: 'bx-pulse' },
            { label: 'Optimum Price', value: '₹420', change: 'Market-Match', isPositive: true, icon: 'bx-target-lock' },
            { label: 'Demand Variance', value: (this.demandChange || -12) + '%', change: 'vs Prev Price', isPositive: false, icon: 'bx-trending-down' },
            { label: 'Revenue Pivot', value: '+₹42,000', change: 'Positive', isPositive: true, icon: 'bx-analyse' },
            { label: 'Competitor Gap', value: '-₹20', change: 'Competitive', isPositive: true, icon: 'bx-git-compare' },
            { label: 'Churn Sensitivity', value: 'Low', change: 'Safe Range', isPositive: true, icon: 'bx-user-voice' },
        ];

        this.elasticityData = [
            { price: '₹380', demand: '1,250', revenue: '₹4.75L', impact: '+25%', status: 'Bulk Buy' },
            { price: '₹420', demand: '980',   revenue: '₹4.11L', impact: 'Baseline', status: 'Optimal' },
            { price: '₹460', demand: '710',   revenue: '₹3.26L', impact: '-28%', status: 'Elite' },
            { price: '₹500', demand: '420',   revenue: '₹2.10L', impact: '-55%', status: 'Premium' },
        ];

        this.sensitivityAudit = [
            { id: 'ELA-401', category: 'Fruits', elasticity: '1.8', response: 'High', health: 'Healthy' },
            { id: 'ELA-402', category: 'Berries', elasticity: '0.9', response: 'Low',  health: 'Inelastic' },
            { id: 'ELA-403', category: 'Exotic',  elasticity: '2.4', response: 'Extreme', health: 'Sensitive' },
            { id: 'ELA-404', category: 'Grains',  elasticity: '0.4', response: 'Negligible', health: 'Necessity' },
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
