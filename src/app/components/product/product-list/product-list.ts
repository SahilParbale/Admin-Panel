import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvailabilityChartComponent } from '../availability-chart/availability-chart.component';
import { DemandForecastChartComponent } from '../demand-forecast-chart/demand-forecast-chart.component';
import { AddProductModal } from '../add-product-modal/add-product-modal';
import { CategoryDistributionChartComponent } from '../category-distribution-chart/category-distribution-chart.component';
import { ProductRevenueModalComponent } from '../product-revenue-modal/product-revenue-modal.component';
import { ProductSalesModalComponent } from '../product-sales-modal/product-sales-modal.component';
import { ProductTopSellingModalComponent } from '../product-top-selling-modal/product-top-selling-modal.component';
import { ProductAvailabilityModalComponent } from '../product-availability-modal/product-availability-modal.component';
import { ProductDemandForecastModalComponent } from '../product-demand-forecast-modal/product-demand-forecast-modal.component';
import { ProductCategoryModalComponent } from '../product-category-modal/product-category-modal.component';

export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  stock: number;
  status: string;
  image: string;
  rating: number; // Added rating property
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective, AvailabilityChartComponent, DemandForecastChartComponent, AddProductModal, CategoryDistributionChartComponent, ProductRevenueModalComponent, ProductSalesModalComponent, ProductTopSellingModalComponent, ProductAvailabilityModalComponent, ProductDemandForecastModalComponent, ProductCategoryModalComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products: Product[] = [
    { id: '1', name: 'Alphonso Mango', category: 'Fruits', sku: 'FRT-001', price: 1200, stock: 50, status: 'Active', image: 'assets/mango.png', rating: 4.8 },
    { id: '2', name: 'Kashmir Apple', category: 'Fruits', sku: 'FRT-002', price: 180, stock: 10, status: 'Active', image: 'assets/apple.png', rating: 4.5 },
    { id: '3', name: 'Organic Banana', category: 'Fruits', sku: 'FRT-003', price: 60, stock: 0, status: 'Inactive', image: 'assets/banana.png', rating: 4.2 },
    { id: '4', name: 'Fresh Strawberry', category: 'Fruits', sku: 'FRT-004', price: 300, stock: 25, status: 'Active', image: 'assets/strawberry.png', rating: 4.7 },
    { id: '5', name: 'Dragon Fruit', category: 'Exotic', sku: 'FRT-005', price: 150, stock: 5, status: 'Active', image: 'assets/dragonfruit.png', rating: 4.9 },
    { id: '6', name: 'Nagpur Orange', category: 'Fruits', sku: 'FRT-006', price: 80, stock: 100, status: 'Active', image: 'assets/orange.png', rating: 4.3 },
    { id: '7', name: 'Green Grapes', category: 'Fruits', sku: 'FRT-007', price: 120, stock: 40, status: 'Active', image: 'assets/grapes.jpg', rating: 4.4 },
    { id: '8', name: 'Watermelon', category: 'Fruits', sku: 'FRT-008', price: 50, stock: 15, status: 'Active', image: 'assets/watermelon.jpg', rating: 4.1 },
    // Keeping other assets as placeholders or previous
    { id: '9', name: 'Papaya', category: 'Fruits', sku: 'FRT-009', price: 45, stock: 8, status: 'Active', image: 'assets/mango.png', rating: 4.0 },
    { id: '10', name: 'Pineapple', category: 'Fruits', sku: 'FRT-010', price: 90, stock: 0, status: 'Inactive', image: 'assets/dragonfruit.png', rating: 3.8 },
    { id: '11', name: 'Pomegranate', category: 'Fruits', sku: 'FRT-011', price: 160, stock: 30, status: 'Active', image: 'assets/apple.png', rating: 4.6 },
    { id: '12', name: 'Guava', category: 'Fruits', sku: 'FRT-012', price: 60, stock: 50, status: 'Active', image: 'assets/apple.png', rating: 4.2 },
    { id: '13', name: 'Kiwi Fruit', category: 'Exotic', sku: 'FRT-013', price: 40, stock: 12, status: 'Active', image: 'assets/strawberry.png', rating: 4.5 },
    { id: '14', name: 'Avocado', category: 'Exotic', sku: 'FRT-014', price: 350, stock: 20, status: 'Active', image: 'assets/mango.png', rating: 4.8 },
    { id: '15', name: 'Blueberry', category: 'Berries', sku: 'FRT-015', price: 400, stock: 5, status: 'Active', image: 'assets/grapes.jpg', rating: 4.9 },
    { id: '16', name: 'Raspberry', category: 'Berries', sku: 'FRT-016', price: 450, stock: 0, status: 'Inactive', image: 'assets/strawberry.png', rating: 4.3 },
    { id: '17', name: 'Cherry', category: 'Berries', sku: 'FRT-017', price: 300, stock: 18, status: 'Active', image: 'assets/strawberry.png', rating: 4.6 },
    { id: '18', name: 'Peach', category: 'Fruits', sku: 'FRT-018', price: 200, stock: 25, status: 'Active', image: 'assets/apple.png', rating: 4.4 },
    { id: '19', name: 'Pear', category: 'Fruits', sku: 'FRT-019', price: 180, stock: 35, status: 'Active', image: 'assets/apple.png', rating: 4.1 },
    { id: '20', name: 'Plum', category: 'Fruits', sku: 'FRT-020', price: 150, stock: 10, status: 'Active', image: 'assets/apple.png', rating: 3.9 },
    { id: '21', name: 'Lychee', category: 'Fruits', sku: 'FRT-021', price: 250, stock: 0, status: 'Inactive', image: 'assets/strawberry.png', rating: 4.7 },
    { id: '22', name: 'Muskmelon', category: 'Fruits', sku: 'FRT-022', price: 60, stock: 15, status: 'Active', image: 'assets/orange.png', rating: 4.0 },
    { id: '23', name: 'Coconut', category: 'Fruits', sku: 'FRT-023', price: 40, stock: 60, status: 'Active', image: 'assets/mango.png', rating: 4.5 },
    { id: '24', name: 'Sitaphal', category: 'Fruits', sku: 'FRT-024', price: 180, stock: 8, status: 'Active', image: 'assets/apple.png', rating: 4.8 },
    { id: '25', name: 'Jackfruit', category: 'Fruits', sku: 'FRT-025', price: 200, stock: 4, status: 'Inactive', image: 'assets/mango.png', rating: 4.2 }
  ];

  filteredProducts: Product[] = [...this.products];
  searchTerm: string = '';
  categoryFilter: string = 'All';

  constructor() { }

  public topSellingChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public availabilityData = { active: 0, inactive: 0 };

  public topSellingChartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y', // Horizontal Layout
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#e5e7eb',
        padding: 10,
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 10, family: "'Inter', sans-serif" },
          color: '#6b7280'
        }
      },
      y: {
        grid: { display: false },
        ticks: {
          font: { size: 11, family: "'Inter', sans-serif" },
          color: '#374151',
          autoSkip: false
        },
        border: { display: false }
      }
    },
    onHover: (event: any, activeElements: any[]) => {
      if (event.native && event.native.target) {
        event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      }
    }
  };

  ngOnInit() {
    this.updateTrendChart('Week');
    this.initRevenueChart();
    this.initTopSellingChart();
    this.calculateAvailability();
  }

  calculateAvailability() {
    const active = this.products.filter(p => p.status === 'Active').length;
    const inactive = this.products.filter(p => p.status === 'Inactive').length;
    this.availabilityData = { active, inactive };
  }

  initTopSellingChart() {
    // Clone and sort products by "sold" quantity (mocked by stock/random for now, or just random)
    // Let's create a derived dataset
    const productsWithSales = this.products.map(p => ({
      name: p.name,
      sold: Math.floor(Math.random() * 800 + 100) // Mock sales 100-900
    }));

    // Sort descending
    productsWithSales.sort((a, b) => b.sold - a.sold);

    // Take Top 5
    const top5 = productsWithSales.slice(0, 5);

    const labels = top5.map(p => p.name);
    const data = top5.map(p => p.sold);

    const backgroundColors = data.map((_, i) => i % 2 === 0 ? '#06b6d4' : '#6366f1'); // Cyan & Indigo
    const hoverColors = data.map((_, i) => i % 2 === 0 ? '#0891b2' : '#4f46e5');

    this.topSellingChartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          label: 'Quantity Sold',
          backgroundColor: backgroundColors,
          hoverBackgroundColor: hoverColors,
          borderRadius: 4,
          barThickness: 20,
        }
      ]
    };
  }

  initRevenueChart() {
    const labels = this.products.map(p => p.name);
    // Mock Revenue: Price * Random Sales (50-500)
    const data = this.products.map(p => p.price * Math.floor(Math.random() * 450 + 50));

    const backgroundColors = data.map((_, i) => i % 2 === 0 ? '#6366f1' : '#8b5cf6'); // Indigo & Violet
    const hoverColors = data.map((_, i) => i % 2 === 0 ? '#4f46e5' : '#7c3aed');

    this.barChartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          label: 'Revenue',
          backgroundColor: backgroundColors,
          hoverBackgroundColor: hoverColors,
          borderRadius: 4,
          barThickness: 'flex',
          maxBarThickness: 30,
          minBarLength: 5
        }
      ]
    };
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.categoryFilter === 'All' || product.category === this.categoryFilter;

      // Stock Filter
      let matchesStock = true;
      if (this.filterStockOption !== 'All') {
        const status = this.getStockStatus(product.stock); // Reuse helper
        matchesStock = status === this.filterStockOption;
      }

      // Status Filter
      let matchesStatus = true;
      if (this.filterStatusOption !== 'All') {
        matchesStatus = product.status === this.filterStatusOption;
      }

      return matchesSearch && matchesCategory && matchesStock && matchesStatus;
    });
  }

  // Filter Modal Logic
  isFilterModalOpen = false;
  filterStockOption = 'All';
  filterStatusOption = 'All';

  // Temporary values for the modal inputs (before applying)
  tempFilterCategory = 'All';
  tempFilterStock = 'All';
  tempFilterStatus = 'All';

  categoryOptions = ['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports', 'Toys', 'Automotive', 'Books', 'Health', 'Grocery', 'Furniture', 'Jewelry', 'Pet Supplies', 'Office Products', 'Garden', 'Music', 'Video Games', 'Fruits', 'Exotic', 'Berries'];
  
  // Filtered category options for graphs (only fruit-related)
  get graphCategoryOptions() {
    return this.categoryOptions.filter(cat => 
      cat === 'All' || cat === 'Fruits' || cat === 'Exotic' || cat === 'Berries'
    );
  }
  
  stockOptions = ['All', 'In Stock', 'Low Stock', 'Out of Stock'];
  statusOptions = ['All', 'Active', 'Inactive'];

  // Revenue Modal State
  isRevenueModalOpen = false;
  selectedRevenueProduct: any = null;

  // Sales Trend Modal State
  isSalesModalOpen = false;
  selectedSalesTrendData: any = null;
  selectedLabel: string = '';

  // Top Selling Modal State
  isTopSellingModalOpen = false;
  selectedTopSellingProduct: any = null;

  // Availability Modal State
  isAvailabilityModalOpen = false;

  // Demand Forecast Modal State
  isDemandForecastModalOpen = false;
  selectedForecastDate: string = '';
  selectedForecastValue: number = 0;

  // Graph Filter Properties - 2 filters per graph
  // Revenue Chart Filters
  revenueCategoryFilter = 'All';
  revenueStockFilter = 'All';
  
  // Sales Trend Chart Filters
  trendCategoryFilter = 'All';
  trendStatusFilter = 'All';
  
  // Top Selling Chart Filters
  topSellingCategoryFilter = 'All';
  topSellingPriceFilter = 'All';
  
  // Availability Chart Filters
  availabilityCategoryFilter = 'All';
  availabilityRatingFilter = 'All';
  
  // Demand Forecast Chart Filters
  forecastCategoryFilter = 'All';
  forecastPeriodFilter = '7';
  
  // Category Distribution Chart Filters
  categoryDistStatusFilter = 'All';
  categoryDistStockFilter = 'All';

  // Dropdown States
  showRevenueCategoryDropdown = false;
  showRevenueStockDropdown = false;
  showTopSellingCategoryDropdown = false;
  showTopSellingPriceDropdown = false;
  showAvailabilityCategoryDropdown = false;
  showAvailabilityRatingDropdown = false;
  showForecastCategoryDropdown = false;
  showForecastPeriodDropdown = false;
  showCategoryDistStatusDropdown = false;
  showCategoryDistStockDropdown = false;

  // Options Arrays
  stockFilterOptions = [
    {label: 'All Stock', value: 'All'}, 
    {label: 'In Stock', value: 'In Stock'}, 
    {label: 'Low Stock', value: 'Low Stock'}, 
    {label: 'Out of Stock', value: 'Out of Stock'}
  ];
  
  statusFilterOptions = [
    {label: 'All Status', value: 'All'}, 
    {label: 'Active', value: 'Active'}, 
    {label: 'Inactive', value: 'Inactive'}
  ];
  
  categoryStockFilterOptions = [
    {label: 'All Stock Levels', value: 'All'}, 
    {label: 'In Stock (>10)', value: 'in-stock'}, 
    {label: 'Low Stock (1-10)', value: 'low-stock'}, 
    {label: 'Out of Stock (0)', value: 'out-stock'}
  ];
  
  priceFilterOptions = [
    {label: 'All Prices', value: 'All'}, 
    {label: 'Under ₹100', value: 'low'}, 
    {label: '₹100-₹500', value: 'medium'}, 
    {label: 'Above ₹500', value: 'high'}
  ];
  
  ratingFilterOptions = [
    {label: 'All Ratings', value: 'All'}, 
    {label: '4+ Stars', value: 'high'}, 
    {label: '3-4 Stars', value: 'medium'}, 
    {label: 'Below 3 Stars', value: 'low'}
  ];
  
  periodFilterOptions = [
    {label: 'Next 7 Days', value: '7'}, 
    {label: 'Next 14 Days', value: '14'}, 
    {label: 'Next 30 Days', value: '30'}
  ];

  toggleDropdown(dropdownName: string) {
    this.showRevenueCategoryDropdown = dropdownName === 'revenueCategory' ? !this.showRevenueCategoryDropdown : false;
    this.showRevenueStockDropdown = dropdownName === 'revenueStock' ? !this.showRevenueStockDropdown : false;
    this.showTopSellingCategoryDropdown = dropdownName === 'topSellingCategory' ? !this.showTopSellingCategoryDropdown : false;
    this.showTopSellingPriceDropdown = dropdownName === 'topSellingPrice' ? !this.showTopSellingPriceDropdown : false;
    this.showAvailabilityCategoryDropdown = dropdownName === 'availabilityCategory' ? !this.showAvailabilityCategoryDropdown : false;
    this.showAvailabilityRatingDropdown = dropdownName === 'availabilityRating' ? !this.showAvailabilityRatingDropdown : false;
    this.showForecastCategoryDropdown = dropdownName === 'forecastCategory' ? !this.showForecastCategoryDropdown : false;
    this.showForecastPeriodDropdown = dropdownName === 'forecastPeriod' ? !this.showForecastPeriodDropdown : false;
    this.showCategoryDistStatusDropdown = dropdownName === 'categoryDistStatus' ? !this.showCategoryDistStatusDropdown : false;
    this.showCategoryDistStockDropdown = dropdownName === 'categoryDistStock' ? !this.showCategoryDistStockDropdown : false;
    this.showTrendDropdown = dropdownName === 'trend' ? !this.showTrendDropdown : false;
  }

  getLabel(value: string, options: any[]): string {
    const option = options.find(o => o.value === value);
    return option ? option.label : value;
  }

  setFilter(filterName: string, value: string) {
    (this as any)[filterName] = value;
    if (filterName.startsWith('revenue')) this.updateRevenueChart();
    if (filterName.startsWith('topSelling')) this.updateTopSellingChart();
    if (filterName.startsWith('availability')) this.updateAvailabilityChart();
    if (filterName.startsWith('forecast')) this.updateForecastChart();
    if (filterName.startsWith('categoryDist')) this.updateCategoryChart();
    
    this.showRevenueCategoryDropdown = false;
    this.showRevenueStockDropdown = false;
    this.showTopSellingCategoryDropdown = false;
    this.showTopSellingPriceDropdown = false;
    this.showAvailabilityCategoryDropdown = false;
    this.showAvailabilityRatingDropdown = false;
    this.showForecastCategoryDropdown = false;
    this.showForecastPeriodDropdown = false;
    this.showCategoryDistStatusDropdown = false;
    this.showCategoryDistStockDropdown = false;
  }

  // Update Revenue Chart with filters
  updateRevenueChart() {
    const filtered = this.products.filter(product => {
      const matchesCategory = this.revenueCategoryFilter === 'All' || product.category === this.revenueCategoryFilter;
      let matchesStock = true;
      if (this.revenueStockFilter !== 'All') {
        const status = this.getStockStatus(product.stock);
        matchesStock = status === this.revenueStockFilter;
      }
      return matchesCategory && matchesStock;
    });

    const labels = filtered.map(p => p.name);
    const data = filtered.map(p => p.price * p.stock);

    const backgroundColors = data.map((_, i) => i % 2 === 0 ? '#6366f1' : '#8b5cf6');
    const hoverColors = data.map((_, i) => i % 2 === 0 ? '#4f46e5' : '#7c3aed');

    this.barChartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          label: 'Revenue',
          backgroundColor: backgroundColors,
          hoverBackgroundColor: hoverColors,
          borderRadius: 4,
          barThickness: 'flex',
          maxBarThickness: 30,
          minBarLength: 5
        }
      ]
    };
  }

  // Update Top Selling Chart with filters
  updateTopSellingChart() {
    let filtered = this.products.filter(product => {
      const matchesCategory = this.topSellingCategoryFilter === 'All' || product.category === this.topSellingCategoryFilter;
      let matchesPrice = true;
      if (this.topSellingPriceFilter !== 'All') {
        if (this.topSellingPriceFilter === 'low') matchesPrice = product.price < 100;
        else if (this.topSellingPriceFilter === 'medium') matchesPrice = product.price >= 100 && product.price <= 500;
        else if (this.topSellingPriceFilter === 'high') matchesPrice = product.price > 500;
      }
      return matchesCategory && matchesPrice;
    });

    // Sort by rating (as proxy for popularity) and take top 5
    filtered.sort((a, b) => b.rating - a.rating);
    filtered = filtered.slice(0, 5);

    const labels = filtered.map(p => p.name);
    const data = filtered.map(p => Math.floor(p.rating * 10));

    this.topSellingChartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          label: 'Units Sold',
          backgroundColor: ['#28a745', '#20c997', '#17a2b8', '#007bff', '#0056b3'],
          hoverBackgroundColor: ['#218838', '#1ea87a', '#138496', '#0069d9', '#004494'],
          borderRadius: 4,
          borderWidth: 0
        }
      ]
    };
  }

  // Update Availability Chart with filters
  updateAvailabilityChart() {
    const filtered = this.products.filter(product => {
      const matchesCategory = this.availabilityCategoryFilter === 'All' || product.category === this.availabilityCategoryFilter;
      let matchesRating = true;
      if (this.availabilityRatingFilter !== 'All') {
        if (this.availabilityRatingFilter === 'high') matchesRating = product.rating >= 4;
        else if (this.availabilityRatingFilter === 'medium') matchesRating = product.rating >= 3 && product.rating < 4;
        else if (this.availabilityRatingFilter === 'low') matchesRating = product.rating < 3;
      }
      return matchesCategory && matchesRating;
    });

    const active = filtered.filter(p => p.status === 'Active').length;
    const inactive = filtered.filter(p => p.status === 'Inactive').length;

    this.availabilityData = { active, inactive };
  }

  // Update Forecast Chart with filters (placeholder - would need actual forecast component integration)
  updateForecastChart() {
    // This would integrate with the demand-forecast-chart component
    // For now, just log the filter changes
    console.log('Forecast filters:', this.forecastCategoryFilter, this.forecastPeriodFilter);
  }

  // Update Category Chart with filters (placeholder - would need actual category component integration)
  updateCategoryChart() {
    // This would integrate with the category-distribution-chart component
    // For now, just log the filter changes
    console.log('Category filters:', this.categoryDistStatusFilter, this.categoryDistStockFilter);
  }

  // Category Modal State
  isCategoryModalOpen = false;
  selectedCategoryName: string = '';
  selectedCategoryInStock: number = 0;
  selectedCategoryLowStock: number = 0;
  selectedCategoryOutOfStock: number = 0;

  viewProducts() {
    // Open Filter Modal
    this.tempFilterCategory = this.categoryFilter;
    this.tempFilterStock = this.filterStockOption;
    this.tempFilterStatus = this.filterStatusOption;
    this.isFilterModalOpen = true;
  }

  closeFilterModal() {
    this.isFilterModalOpen = false;
    // Rule: "once the pop up is closed the products should restore"
    // Interpretation: If we just close without "Show", we effectively don't apply.
    // BUT the user might mean: "Any filter applied BY the popup should be cleared when it closes?"
    // That would prevent ever seeing the result if "Show" closes it.
    // We will assume "Restore" means "Don't apply changes" (Cancel behavior).

    // However, if the user requested "restore to how they were before",
    // and if we strictly follow "Show" -> Apply, "Close" -> Restore...
    // Let's stick to standard "Cancel" behavior here.
  }

  applyFilters() {
    this.categoryFilter = this.tempFilterCategory;
    this.filterStockOption = this.tempFilterStock;
    this.filterStatusOption = this.tempFilterStatus;
    this.filterProducts();
    this.isFilterModalOpen = false;
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
          rating: this.products[index].rating, // Preserve existing rating
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
        image: '',
        rating: 0 // Default rating for new products
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

  // Chart Logic - ng2-charts
  @ViewChildren(BaseChartDirective) charts?: QueryList<BaseChartDirective>;

  // Revenue Bar Chart
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#e5e7eb',
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return 'Revenue: ₹' + new Intl.NumberFormat('en-IN').format(context.parsed.y as number);
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { // Hide X labels if too crowded, or auto-skip
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
          font: { size: 10, family: "'Inter', sans-serif" },
          color: '#6b7280'
        }
      },
      y: {
        beginAtZero: true,
        grid: { color: '#f3f4f6' },
        ticks: {
          font: { size: 10, family: "'Inter', sans-serif" },
          color: '#9ca3af',
          callback: function (value) {
            return '₹' + (Number(value) / 1000) + 'k';
          }
        },
        border: { display: false }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    onHover: (event: any, activeElements: any[]) => {
      if (event.native && event.native.target) {
        event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      }
    }
  };

  onChartClick({ active }: { active?: any[] }): void {
    if (active && active.length > 0) {
      const index = active[0].index;
      const label = this.barChartData.labels?.[index] as string;
      const value = this.barChartData.datasets[0].data[index] as number;
      this.openRevenueDetail(label, value);
    }
  }

  openRevenueDetail(productName: string, revenue: number) {
    this.selectedRevenueProduct = { name: productName, revenue: revenue };
    this.isRevenueModalOpen = true;
  }

  closeRevenueModal() {
    this.isRevenueModalOpen = false;
    this.selectedRevenueProduct = null;
  }

  openSalesTrendDetail() {
    this.isSalesModalOpen = true;
  }

  selectedTrendPeriod: string = 'Week';
  showTrendDropdown = false;
  trendOptions = ['Day', 'Week', 'Month'];

  toggleTrendDropdown() {
    this.showTrendDropdown = !this.showTrendDropdown;
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: 12, family: "'Inter', sans-serif" }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#e5e7eb',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.parsed.y + ' units';
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 11, family: "'Inter', sans-serif" },
          color: '#6b7280'
        }
      },
      y: {
        beginAtZero: true,
        grid: { color: '#f3f4f6' },
        ticks: {
          font: { size: 11, family: "'Inter', sans-serif" },
          color: '#6b7280',
          stepSize: 50
        },
        border: { display: false }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    elements: {
      line: { tension: 0.4 },
      point: { radius: 0, hoverRadius: 6 }
    },
    onHover: (event: any, activeElements: any[]) => {
      if (event.native && event.native.target) {
        event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      }
    }
  };

  onTrendChartClick({ active }: { active?: any[] }): void {
    if (active && active.length > 0) {
      const index = active[0].index;
      this.selectedLabel = this.lineChartData.labels?.[index] as string;
      this.isSalesModalOpen = true;
    }
  }

  onTopSellingChartClick({ active }: { active?: any[] }): void {
    if (active && active.length > 0) {
      const index = active[0].index;
      const label = this.topSellingChartData.labels?.[index] as string;
      const value = this.topSellingChartData.datasets[0].data[index] as number;
      this.selectedTopSellingProduct = { name: label, sold: value };
      this.isTopSellingModalOpen = true;
    }
  }

  openTopSellingDetail() {
    this.selectedTopSellingProduct = null; // Shows overall report
    this.isTopSellingModalOpen = true;
  }

  openAvailabilityModal() {
    this.isAvailabilityModalOpen = true;
  }

  openDemandForecastModal() {
    this.isDemandForecastModalOpen = true;
  }

  openCategoryModal() {
    this.isCategoryModalOpen = true;
  }

  closeSalesModal() {
    this.isSalesModalOpen = false;
  }

  closeTopSellingModal() {
    this.isTopSellingModalOpen = false;
  }

  onAvailabilityChartClick(event: any): void {
    this.isAvailabilityModalOpen = true;
  }

  closeAvailabilityModal() {
    this.isAvailabilityModalOpen = false;
  }

  onDemandForecastChartClick(event: any): void {
    this.selectedForecastDate = event.label;
    this.selectedForecastValue = event.value;
    this.isDemandForecastModalOpen = true;
  }

  closeDemandForecastModal() {
    this.isDemandForecastModalOpen = false;
  }

  onCategoryChartClick(event: any): void {
    this.selectedCategoryName = event.category;
    this.selectedCategoryInStock = event.inStock;
    this.selectedCategoryLowStock = event.lowStock;
    this.selectedCategoryOutOfStock = event.outOfStock;
    this.isCategoryModalOpen = true;
  }

  closeCategoryModal() {
    this.isCategoryModalOpen = false;
  }

  ngAfterViewInit() {
    // Charts initialized in ngOnInit via data binding
    // View updates handled automatically by ng2-charts input changes
  }

  updateTrendChart(period: string) {
    this.selectedTrendPeriod = period;
    this.showTrendDropdown = false;
    const chartData = this.getChartData(period);

    this.lineChartData = {
      labels: chartData.labels,
      datasets: chartData.datasets
    };

    this.charts?.forEach(child => child.update());
  }

  getChartData(period: string): any {
    let labels: string[] = [];
    let dataSold: number[] = [];

    if (period === 'Day') {
      labels = ['9AM', '11AM', '1PM', '3PM', '5PM', '7PM', '9PM'];
      dataSold = [12, 19, 15, 25, 32, 28, 20];
    } else if (period === 'Week') {
      labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      dataSold = [150, 230, 180, 320, 290, 450, 380];
    } else if (period === 'Month') {
      labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      dataSold = [1200, 1500, 1100, 1800];
    }

    return {
      labels: labels,
      datasets: [
        {
          label: 'Units Sold',
          data: dataSold,
          borderColor: '#06b6d4', // Cyan
          backgroundColor: (context: any) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
            gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
            return gradient;
          },
          borderWidth: 2,
          fill: true,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#06b6d4',
          pointBorderWidth: 2
        }
      ]
    };
  }
}
