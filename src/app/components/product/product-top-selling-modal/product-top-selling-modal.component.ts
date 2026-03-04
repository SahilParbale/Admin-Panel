import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-product-top-selling-modal',
    standalone: true,
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './product-top-selling-modal.component.html',
    styleUrls: ['./product-top-selling-modal.component.scss']
})
export class ProductTopSellingModalComponent {
    @Input() isOpen: boolean = false;
    @Input() productName: string = '';
    @Input() quantitySold: number = 0;
    @Output() close = new EventEmitter<void>();

    public performanceData: ChartConfiguration<'line'>['data'] = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Daily Demand',
                borderColor: '#f97316', // Orange
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#fff',
                borderWidth: 3
            }
        ]
    };

    public performanceOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        scales: {
            x: { display: false },
            y: { display: false }
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
