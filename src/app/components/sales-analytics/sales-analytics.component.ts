import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sales-analytics',
    templateUrl: './sales-analytics.component.html',
    styleUrls: ['./sales-analytics.component.scss'],
    standalone: false
})
export class SalesAnalyticsComponent implements OnInit {

  activeTab: 'sales' | 'analytics' = 'sales';

  // Analytics Modal State
  showAnalyticsModal = false;
  activeModalMode: 'sales-order' | 'sales-category' | 'sales-waterfall' | 'sales-cost' | 'sales-zone' = 'sales-order';

  openSalesAnalyticsModal(mode: 'sales-order' | 'sales-category' | 'sales-waterfall' | 'sales-cost' | 'sales-zone') {
      this.activeModalMode = mode;
      this.showAnalyticsModal = true;
  }

  closeSalesAnalyticsModal() {
      this.showAnalyticsModal = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'sales' | 'analytics') {
    this.activeTab = tab;
  }

}
