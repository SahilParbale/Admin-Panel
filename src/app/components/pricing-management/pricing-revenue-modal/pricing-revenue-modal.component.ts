import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-revenue-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-revenue-modal.component.html',
    styleUrl: './pricing-revenue-modal.component.scss'
})
export class PricingRevenueModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() month = 'Current Period';
    @Input() revenueBefore = 0;
    @Input() revenueAfter = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    revenueAnalysis: any[] = [];
    settlementAudit: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        const growth = (((this.revenueAfter || 520000) - (this.revenueBefore || 450000)) / (this.revenueBefore || 450000) * 100).toFixed(1);

        this.kpis = [
            { label: 'Net Revenue Growth', value: growth + '%', change: '+₹' + ((this.revenueAfter || 520000) - (this.revenueBefore || 450000)).toLocaleString(), isPositive: true, icon: 'bx-trending-up' },
            { label: 'Rev Post-Discount', value: '₹' + (this.revenueAfter || '5.2L'), change: 'Actual', isPositive: true, icon: 'bx-money-withdraw' },
            { label: 'Yield per Order', value: '₹142', change: '+₹12', isPositive: true, icon: 'bx-coin-stack' },
            { label: 'Profit Margin Avg', value: '24%', change: 'Healthy', isPositive: true, icon: 'bx-pie-chart-alt-2' },
            { label: 'Discount Burn', value: '₹12,400', change: '-4% of Rev', isPositive: true, icon: 'bx-fire' },
            { label: 'Settlement Ratio', value: '98.2%', change: 'Optimal', isPositive: true, icon: 'bx-check-double' },
        ];

        this.revenueAnalysis = [
            { period: 'Week 1', before: '₹1.1L', after: '₹1.25L', diff: '+13.6%', status: 'Excellent' },
            { period: 'Week 2', before: '₹1.2L', after: '₹1.40L', diff: '+16.7%', status: 'Excellent' },
            { period: 'Week 3', before: '₹1.0L', after: '₹1.15L', diff: '+15.0%', status: 'Stable' },
            { period: 'Week 4', before: '₹1.2L', after: '₹1.40L', diff: '+16.7%', status: 'Excellent' },
        ];

        this.settlementAudit = [
            { id: 'SET-901', category: 'Fruits', gross: '₹1.8L', net: '₹1.65L', margin: '28%', status: 'Audited' },
            { id: 'SET-902', category: 'Exotic', gross: '₹0.9L', net: '₹0.82L', margin: '35%', status: 'Audited' },
            { id: 'SET-903', category: 'Berries', gross: '₹1.2L', net: '₹1.10L', margin: '22%', status: 'Pending' },
            { id: 'SET-904', category: 'Grains',  gross: '₹1.5L', net: '₹1.42L', margin: '18%', status: 'Audited' },
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
