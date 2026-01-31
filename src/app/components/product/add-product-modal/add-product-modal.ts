import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product-modal.html',
  styleUrl: './add-product-modal.scss',
})
export class AddProductModal {
  @Input() isOpen = false;
  @Input() product: any = null; // Accept product to edit
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  productForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      stockStatus: ['In Stock', Validators.required],
      status: ['Active', Validators.required],
      image: [null]
    });
  }

  showCategoryDropdown = false;
  categoryOptions = [
    'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty',
    'Sports', 'Toys', 'Automotive', 'Books',
    'Health', 'Grocery', 'Furniture', 'Jewelry',
    'Pet Supplies', 'Office Products', 'Garden',
    'Music', 'Video Games'
  ];

  ngOnChanges() {
    if (this.product) {
      // Edit Mode: Populate form
      this.productForm.patchValue({
        name: this.product.name,
        category: this.product.category,
        price: this.product.price,
        stock: this.product.stock,
        stockStatus: this.product.stockStatus || 'In Stock',
        status: this.product.status
      });
      this.imagePreview = this.product.image;
    } else {
      // Add Mode: Reset form (if handled by parent resetting input, otherwise explicit reset might be needed on open)
      // Ideally parent sets product=null when opening for Add.
      if (this.isOpen && !this.productForm.dirty) {
        // Only reset if just opened and not dirty to avoid clearing user input on accidental interactions
        // But simpler: just reset when isOpen becomes true and product is null?
        // Let's stick to simple patch if product exists.
        this.productForm.get('stockStatus')?.setValue('In Stock');
      }
    }
  }

  toggleCategoryDropdown() {
    this.showCategoryDropdown = !this.showCategoryDropdown;
  }

  showStockStatusDropdown = false;
  stockStatusOptions = ['In Stock', 'Low Stock', 'Out of Stock'];

  selectCategory(category: string) {
    this.productForm.get('category')?.setValue(category);
    this.showCategoryDropdown = false;
  }

  setStatus(status: string) {
    this.productForm.get('status')?.setValue(status);
  }

  toggleStockStatusDropdown() {
    this.showStockStatusDropdown = !this.showStockStatusDropdown;
  }

  selectStockStatus(status: string) {
    this.productForm.get('stockStatus')?.setValue(status);
    this.showStockStatusDropdown = false;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.productForm.patchValue({ image: file });
      this.productForm.get('image')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      // If editing, include original ID ? Or let parent handle matching.
      // Easiest is to emit everything.
      this.save.emit({ ...formValue, id: this.product ? this.product.id : null });
      this.closeModal();
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  closeModal() {
    this.isOpen = false;
    this.close.emit();
    this.productForm.reset();
    this.productForm.get('status')?.setValue('Active');
    this.productForm.get('stockStatus')?.setValue('In Stock');
    this.imagePreview = null;
    this.showCategoryDropdown = false;
    this.showStockStatusDropdown = false;
  }
}
