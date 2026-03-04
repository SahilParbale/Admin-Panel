import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-product-demand-forecast-modal',
    standalone: true,
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './product-demand-forecast-modal.component.html',
    styleUrls: ['./product-demand-forecast-modal.component.scss']
})
export class ProductDemandForecastModalComponent {
    @Input() isOpen: boolean = false;
    @Input() date: string = '';
    @Input() predictedUnits: number = 0;
    @Output() close = new EventEmitter<void>();

    public confidenceData: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['Confidence', 'Margin'],
        datasets: [{
            data: [92, 8],
            backgroundColor: ['#6366f1', '#e2e8f0'],
            borderWidth: 0,
            hoverBackgroundColor: ['#4f46e5', '#cbd5e1']
        }]
    };

    public confidenceOptions: ChartOptions<'doughnut'> = {
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    };

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }
}
