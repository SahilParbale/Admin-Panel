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
  },
  {
    path: 'user-management',
    loadChildren: () => import('./components/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./components/finance/finance.module').then(m => m.FinanceModule)
  },
  {
    path: 'sales-analytics',
    loadChildren: () => import('./components/sales-analytics/sales-analytics.module').then(m => m.SalesAnalyticsModule)
  },
  {
    path: 'marketing-management',
    loadChildren: () => import('./components/marketing-management/marketing-management.module').then(m => m.MarketingManagementModule)
  },
  {
    path: 'support-management',
    loadChildren: () => import('./components/support-management/support-management.module').then(m => m.SupportManagementModule)
  },
  {
    path: 'settings-management',
    loadChildren: () => import('./components/settings-management/settings-management.module').then(m => m.SettingsManagementModule)
  }
];
// Trigger rebuild

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
