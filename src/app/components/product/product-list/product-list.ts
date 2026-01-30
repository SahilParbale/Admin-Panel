import { Component } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  stock: number;
  status: string; // Changed to string to support "In Stock", "Low Stock", "Out Of Stock"
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
    { id: '6', name: 'Nagpur Orange', category: 'Fruits', sku: 'FRT-006', price: 80, stock: 100, status: 'Active', image: 'assets/orange.jpg' },
    { id: '7', name: 'Green Grapes', category: 'Fruits', sku: 'FRT-007', price: 120, stock: 40, status: 'Active', image: 'assets/grapes.jpg' },
    { id: '8', name: 'Watermelon', category: 'Fruits', sku: 'FRT-008', price: 50, stock: 15, status: 'Active', image: 'assets/watermelon.jpg' },
    { id: '9', name: 'Papaya', category: 'Fruits', sku: 'FRT-009', price: 45, stock: 8, status: 'Active', image: 'assets/papaya.jpg' },
    { id: '10', name: 'Pineapple', category: 'Fruits', sku: 'FRT-010', price: 90, stock: 0, status: 'Inactive', image: 'assets/pineapple.jpg' },
    { id: '11', name: 'Pomegranate', category: 'Fruits', sku: 'FRT-011', price: 160, stock: 30, status: 'Active', image: 'assets/pomegranate.jpg' },
    { id: '12', name: 'Guava', category: 'Fruits', sku: 'FRT-012', price: 60, stock: 50, status: 'Active', image: 'assets/guava.jpg' },
    { id: '13', name: 'Kiwi Fruit', category: 'Exotic', sku: 'FRT-013', price: 40, stock: 12, status: 'Active', image: 'assets/kiwi.jpg' },
    { id: '14', name: 'Avocado', category: 'Exotic', sku: 'FRT-014', price: 350, stock: 20, status: 'Active', image: 'assets/avocado.jpg' },
    { id: '15', name: 'Blueberry', category: 'Berries', sku: 'FRT-015', price: 400, stock: 5, status: 'Active', image: 'assets/blueberry.jpg' },
    { id: '16', name: 'Raspberry', category: 'Berries', sku: 'FRT-016', price: 450, stock: 0, status: 'Inactive', image: 'assets/raspberry.jpg' },
    { id: '17', name: 'Cherry', category: 'Berries', sku: 'FRT-017', price: 300, stock: 18, status: 'Active', image: 'assets/cherry.jpg' },
    { id: '18', name: 'Peach', category: 'Fruits', sku: 'FRT-018', price: 200, stock: 25, status: 'Active', image: 'assets/peach.jpg' },
    { id: '19', name: 'Pear', category: 'Fruits', sku: 'FRT-019', price: 180, stock: 35, status: 'Active', image: 'assets/pear.jpg' },
    { id: '20', name: 'Plum', category: 'Fruits', sku: 'FRT-020', price: 150, stock: 10, status: 'Active', image: 'assets/plum.jpg' },
    { id: '21', name: 'Lychee', category: 'Fruits', sku: 'FRT-021', price: 250, stock: 0, status: 'Inactive', image: 'assets/lychee.jpg' },
    { id: '22', name: 'Muskmelon', category: 'Fruits', sku: 'FRT-022', price: 60, stock: 15, status: 'Active', image: 'assets/muskmelon.jpg' },
    { id: '23', name: 'Coconut', category: 'Fruits', sku: 'FRT-023', price: 40, stock: 60, status: 'Active', image: 'assets/coconut.jpg' },
    { id: '24', name: 'Sitaphal', category: 'Fruits', sku: 'FRT-024', price: 180, stock: 8, status: 'Active', image: 'assets/sitaphal.jpg' },
    { id: '25', name: 'Jackfruit', category: 'Fruits', sku: 'FRT-025', price: 200, stock: 4, status: 'Inactive', image: 'assets/jackfruit.jpg' }
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
  isAddModalOpen = false;
  selectedProduct: Product | null = null; // Store product being edited

  openAddModal() {
    this.selectedProduct = null; // Reset for adding new
    this.isAddModalOpen = true;
  }

  openEditModal(product: Product) {
    this.selectedProduct = product; // Set product to edit
    this.isAddModalOpen = true; // Use same modal
  }

  closeAddModal() {
    this.isAddModalOpen = false;
    this.selectedProduct = null;
  }

  onProductSaved(productData: any) {
    if (productData.id) {
      // Edit Mode: Update existing
      const index = this.products.findIndex(p => p.id === productData.id);
      if (index !== -1) {
        this.products[index] = {
          ...this.products[index],
          name: productData.name,
          category: productData.category,
          price: productData.price,
          stock: productData.stock,
          status: productData.status,
          image: productData.image instanceof File ? this.products[index].image : (productData.image || this.products[index].image)
          // If new file, need upload logic. For now keep old if not handled, or update if we had URL.
          // Since we don't have real upload, we might lose image preview if we don't handle it.
          // The modal emits the File object or null. 
          // If it's a File, we can't display it directly without FileReader.
          // For prototype:
        };

        if (productData.image instanceof File) {
          // Create a fake URL for immediate display
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.products[index].image = e.target.result;
          };
          reader.readAsDataURL(productData.image);
        }
      }
    } else {
      // Add Mode: Create new
      console.log('New Product:', productData);
      const product: Product = {
        id: (this.products.length + 1).toString(),
        name: productData.name,
        category: productData.category,
        sku: 'FRT-00' + (this.products.length + 1), // Simple SKU generation
        price: productData.price,
        stock: productData.stock,
        status: productData.status || 'Active',
        image: ''
      };

      if (productData.image instanceof File) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          product.image = e.target.result; // Update after load
        };
        reader.readAsDataURL(productData.image);
      }
      this.products.push(product);
    }

    this.filterProducts();
    this.closeAddModal();
  }

  // Delete Confirmation Logic
  isDeleteModalOpen = false;
  productToDelete: Product | null = null;

  openDeleteModal(product: Product) {
    this.productToDelete = product;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.productToDelete = null;
  }

  confirmDelete() {
    if (this.productToDelete) {
      this.products = this.products.filter(p => p.id !== this.productToDelete!.id);
      this.bindFilteredProducts(); // Re-bind filtered
      this.closeDeleteModal();
    }
  }

  // Helper to keep ref correct (since filter creates new array)
  bindFilteredProducts() {
    // Re-run filter logic
    this.filterProducts();
  }
}
