import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-product-sales-modal',
    standalone: true,
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './product-sales-modal.component.html',
    styleUrls: ['./product-sales-modal.component.scss']
})
export class ProductSalesModalComponent {
    @Input() isOpen: boolean = false;
    @Input() period: string = 'Week';
    @Input() selectedLabel: string = '';
    @Input() data: any = null;
    @Output() close = new EventEmitter<void>();

    // Enhanced chart data with fruit-specific context and gradient
    public miniChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'],
        datasets: [
            {
                data: [10, 5, 45, 80, 65, 90],
                label: 'Order Velocity',
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
}
