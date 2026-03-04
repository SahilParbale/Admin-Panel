import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-product-revenue-modal',
    standalone: true,
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './product-revenue-modal.component.html',
    styleUrl: './product-revenue-modal.component.scss'
})
export class ProductRevenueModalComponent {
    @Input() isOpen = false;
    @Input() product: any = null;
    @Output() close = new EventEmitter<void>();

    public miniChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['11AM', '1PM', '3PM', '5PM', '7PM', '9PM', '11PM'],
        datasets: [
            {
                data: [20, 55, 30, 45, 85, 95, 40],
                label: 'Live Orders',
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#fff',
                borderWidth: 3
            }
        ]
    };

    public miniChartOptions: ChartOptions<'line'> = {
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

    formatCurrency(value: number) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    }
}
