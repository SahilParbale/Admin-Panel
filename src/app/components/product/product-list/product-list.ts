import { Component } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  stock: number;
  status: 'Active' | 'Inactive';
  image: string;
}

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent {
  products: Product[] = [
    { id: '1', name: 'Alphonso Mango', category: 'Fruits', sku: 'FRT-001', price: 1200, stock: 50, status: 'Active', image: 'assets/mango.jpg' },
    { id: '2', name: 'Kashmir Apple', category: 'Fruits', sku: 'FRT-002', price: 180, stock: 10, status: 'Active', image: 'assets/apple.jpg' },
    { id: '3', name: 'Organic Banana', category: 'Fruits', sku: 'FRT-003', price: 60, stock: 0, status: 'Inactive', image: 'assets/banana.jpg' },
    { id: '4', name: 'Fresh Strawberry', category: 'Fruits', sku: 'FRT-004', price: 300, stock: 25, status: 'Active', image: 'assets/strawberry.jpg' },
    { id: '5', name: 'Dragon Fruit', category: 'Exotic', sku: 'FRT-005', price: 150, stock: 5, status: 'Active', image: 'assets/dragon.jpg' },
  ];

  filteredProducts: Product[] = [...this.products];
  searchTerm: string = '';
  categoryFilter: string = 'All';

  constructor() { }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.categoryFilter === 'All' || product.category === this.categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }

  getStockStatus(stock: number): string {
    if (stock === 0) return 'Out of Stock';
    if (stock < 20) return 'Low Stock';
    return 'In Stock';
  }

  getStockColor(stock: number): string {
    if (stock === 0) return 'red';
    if (stock < 20) return 'orange';
    return 'green';
  }
}
