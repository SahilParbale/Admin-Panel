import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-revenue-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-revenue-modal.component.html',
    styleUrl: './product-revenue-modal.component.scss'
})
export class ProductRevenueModalComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() product: any = null;
    @Output() close = new EventEmitter<void>();

    kpis: any[] = [];
    categoryData: any[] = [];
    productData: any[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && this.isOpen) {
            this.loadData();
        }
    }

    loadData() {
        this.kpis = [
            { label: 'Total Revenue',   value: '₹3.87L',   change: '+18%',  isPositive: true,  icon: 'bx-rupee' },
            { label: 'Top Category',    value: 'Exotic',    change: '+28%',  isPositive: true,  icon: 'bx-crown' },
            { label: 'Total Products',  value: '48 SKUs',   change: '+6',    isPositive: true,  icon: 'bx-box' },
            { label: 'Avg Margin',      value: '23.9%',     change: '+2.1%', isPositive: true,  icon: 'bx-pie-chart' },
            { label: 'Best Seller',     value: 'Banana',    change: '₹42,500', isPositive: true, icon: 'bx-star' },
            { label: 'Low Stock Items', value: '5 Items',   change: '-2',    isPositive: true,  icon: 'bx-error-circle' },
        ];

        this.categoryData = [
            { name: 'Tropical Fruits', orders: 1280, revenue: '₹1,15,200', rating: 4.7, growth: '+22%' },
            { name: 'Exotic Fruits',   orders: 720,  revenue: '₹1,29,600', rating: 4.8, growth: '+28%' },
            { name: 'Citrus Fruits',   orders: 980,  revenue: '₹88,200',   rating: 4.5, growth: '+15%' },
            { name: 'Berries',         orders: 580,  revenue: '₹87,000',   rating: 4.6, growth: '+18%' },
            { name: 'Combos & Packs',  orders: 450,  revenue: '₹40,500',   rating: 4.4, growth: '+12%' },
            { name: 'Seasonal Fruits', orders: 380,  revenue: '₹34,200',   rating: 4.5, growth: '+10%' },
            { name: 'Dry Fruits',      orders: 290,  revenue: '₹52,200',   rating: 4.7, growth: '+25%' },
            { name: 'Organic Range',   orders: 220,  revenue: '₹39,600',   rating: 4.8, growth: '+30%' },
        ];

        this.productData = [
            { category: 'Exotic Fruits',   product: 'Dragon Fruit',   orders: 310, revenue: '₹55,800', margin: '31%', growth: '+34%', stock: 'In Stock'     },
            { category: 'Exotic Fruits',   product: 'Passion Fruit',  orders: 280, revenue: '₹42,000', margin: '29%', growth: '+22%', stock: 'In Stock'     },
            { category: 'Tropical Fruits', product: 'Banana',         orders: 920, revenue: '₹42,500', margin: '18%', growth: '+12%', stock: 'In Stock'     },
            { category: 'Tropical Fruits', product: 'Mango',          orders: 680, revenue: '₹61,200', margin: '22%', growth: '+19%', stock: 'In Stock'     },
            { category: 'Tropical Fruits', product: 'Pineapple',      orders: 420, revenue: '₹37,800', margin: '20%', growth: '+15%', stock: 'Low Stock'    },
            { category: 'Citrus Fruits',   product: 'Orange',         orders: 560, revenue: '₹33,600', margin: '16%', growth: '+10%', stock: 'In Stock'     },
            { category: 'Citrus Fruits',   product: 'Lemon',          orders: 480, revenue: '₹24,000', margin: '14%', growth: '+8%',  stock: 'In Stock'     },
            { category: 'Berries',         product: 'Strawberry',     orders: 390, revenue: '₹58,500', margin: '28%', growth: '+25%', stock: 'In Stock'     },
            { category: 'Berries',         product: 'Blueberry',      orders: 240, revenue: '₹43,200', margin: '30%', growth: '+20%', stock: 'Low Stock'    },
            { category: 'Dry Fruits',      product: 'Cashews',        orders: 185, revenue: '₹37,000', margin: '35%', growth: '+30%', stock: 'In Stock'     },
            { category: 'Dry Fruits',      product: 'Almonds',        orders: 160, revenue: '₹32,000', margin: '33%', growth: '+28%', stock: 'In Stock'     },
            { category: 'Organic Range',   product: 'Organic Apples', orders: 120, revenue: '₹21,600', margin: '26%', growth: '+32%', stock: 'Low Stock'    },
            { category: 'Seasonal',        product: 'Litchi',         orders: 200, revenue: '₹18,000', margin: '19%', growth: '-5%',  stock: 'Out of Stock' },
            { category: 'Combos & Packs',  product: 'Fruit Basket L', orders: 145, revenue: '₹23,200', margin: '22%', growth: '+11%', stock: 'In Stock'     },
        ];
    }

    parseMargin(value: string): number {
        return parseFloat(value.replace('%', ''));
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
