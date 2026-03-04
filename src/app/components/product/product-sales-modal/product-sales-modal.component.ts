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

    public miniChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'],
        datasets: [
            {
                data: [10, 5, 45, 80, 65, 90],
                label: 'Order Velocity',
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
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
}
