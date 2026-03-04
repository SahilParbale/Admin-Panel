import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-product-category-modal',
    standalone: true,
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './product-category-modal.component.html',
    styleUrls: ['./product-category-modal.component.scss']
})
export class ProductCategoryModalComponent {
    @Input() isOpen: boolean = false;
    @Input() categoryName: string = '';
    @Input() inStock: number = 0;
    @Input() lowStock: number = 0;
    @Input() outOfStock: number = 0;
    @Output() close = new EventEmitter<void>();

    public stockData: ChartConfiguration<'doughnut'>['data'] = {
        labels: ['In Stock', 'Low Stock', 'Out of Stock'],
        datasets: [{
            data: [0, 0, 0],
            backgroundColor: ['#8b5cf6', '#f59e0b', '#f43f5e'],
            borderWidth: 0,
            hoverOffset: 10
        }]
    };

    public stockOptions: ChartOptions<'doughnut'> = {
        cutout: '75%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        }
    };

    ngOnChanges() {
        if (this.isOpen) {
            this.stockData = {
                ...this.stockData,
                datasets: [{
                    ...this.stockData.datasets[0],
                    data: [this.inStock, this.lowStock, this.outOfStock]
                }]
            };
        }
    }

    closeModal() {
        this.close.emit();
    }

    onBackdropClick(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.closeModal();
        }
    }
}
