import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-demand-forecast-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-demand-forecast-modal.component.html',
    styleUrl: './product-demand-forecast-modal.component.scss'
})
export class ProductDemandForecastModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() date = '';
    @Input() predictedUnits = 0;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    categoryForecast: any[] = [];
    replenishmentPlans: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Predicted Demand', value: this.predictedUnits || '2,450 Units', change: '+15.2%', isPositive: true, icon: 'bx-line-chart' },
            { label: 'Forecast Accuracy', value: '94.8%', change: '+1.2%', isPositive: true, icon: 'bx-target-lock' },
            { label: 'Peak Demand Date', value: 'May 20', change: 'Festival Seasonal', isPositive: true, icon: 'bx-calendar-event' },
            { label: 'Supply Gap', value: '120 Units', change: '-45', isPositive: true, icon: 'bx-transfer' },
            { label: 'Production Buffer', value: '12%', change: 'Optimal', isPositive: true, icon: 'bx-layer' },
            { label: 'AI Confidence', value: 'High', change: '98% reliable', isPositive: true, icon: 'bx-brain' },
        ];

        this.categoryForecast = [
            { name: 'Tropical Fruits', current: 1200, predicted: 1450, growth: '+20.8%', risk: 'Low' },
            { name: 'Exotic Fruits',   current: 450,  predicted: 620,  growth: '+37.7%', risk: 'Medium' },
            { name: 'Berries',         current: 380,  predicted: 410,  growth: '+7.8%',  risk: 'Low' },
            { name: 'Citrus Fruits',   current: 920,  predicted: 880,  growth: '-4.3%',  risk: 'High' },
            { name: 'Combos & Packs',  current: 210,  predicted: 350,  growth: '+66.7%', risk: 'Medium' },
        ];

        this.replenishmentPlans = [
            { product: 'Alphonso Mango', stock: 50, required: 150, urgency: 'Critical', action: 'Immediate PO' },
            { product: 'Dragon Fruit', stock: 85, required: 120, urgency: 'High', action: 'Schedule Next Week' },
            { product: 'Nagpur Orange', stock: 120, required: 100, urgency: 'Low', action: 'No Action' },
            { product: 'Kashmir Apple', stock: 10, required: 80, urgency: 'Critical', action: 'Immediate PO' },
            { product: 'Organic Banana', stock: 0, required: 300, urgency: 'Urgent', action: 'Restock Today' },
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
