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

    // Enhanced chart data with fruit-specific context and gradient
    public performanceData: ChartConfiguration<'line'>['data'] = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Daily Demand',
                borderColor: '#28a745', // Green for fruit delivery
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

    public performanceOptions: ChartOptions<'line'> = {
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
