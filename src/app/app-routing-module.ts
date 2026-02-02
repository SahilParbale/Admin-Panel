import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'product-management',
    loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'order-management',
    loadChildren: () => import('./components/order-management/order-management.module').then(m => m.OrderManagementModule)
  },
  {
    path: 'pricing-management',
    loadChildren: () => import('./components/pricing-management/pricing-management.module').then(m => m.PricingManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
