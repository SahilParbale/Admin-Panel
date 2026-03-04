import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-order-cancellation-modal',
    standalone: true,
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './order-cancellation-modal.component.html',
    styleUrls: ['./order-cancellation-modal.component.scss']
})
export class OrderCancellationModalComponent {
    @Input() isOpen: boolean = false;
    @Input() period: string = '';
    @Input() rate: number = 0;
    @Output() close = new EventEmitter<void>();

    public reasonData: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['Buyer Cancelled', 'Restaurant Rejected', 'Technical Issue', 'Delivery Partner Issue'],
        datasets: [{
            data: [65, 20, 10, 5],
            backgroundColor: ['#f43f5e', '#fb7185', '#fda4af', '#fff1f2'],
            borderWidth: 0,
            hoverOffset: 12
        }]
    };

    public reasonOptions: ChartOptions<'doughnut'> = {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
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
