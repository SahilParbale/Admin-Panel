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

    // Enhanced chart data with fruit-specific context
    public miniChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['11AM', '1PM', '3PM', '5PM', '7PM', '9PM', '11PM'],
        datasets: [
            {
                data: [20, 55, 30, 45, 85, 95, 40],
                label: 'Live Orders',
                borderColor: '#28a745',
                backgroundColor: (ctx: any) => {
                    const chartCtx = ctx.chart.ctx;
                    const gradient = chartCtx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(40, 167, 69, 0.3)');
                    gradient.addColorStop(1, 'rgba(40, 167, 69, 0.01)');
                    return gradient;
                },
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#28a745',
                pointBorderWidth: 2,
                pointHoverRadius: 7,
                borderWidth: 3
            }
        ]
    };

    public miniChartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { 
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: { size: 13, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 12,
                cornerRadius: 8,
                displayColors: false
            }
        },
        scales: {
            x: { display: false },
            y: { 
                display: false,
                min: 0,
                max: 100
            }
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
