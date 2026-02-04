import { Component } from '@angular/core';

@Component({
    selector: 'app-sales-analytics',
    templateUrl: './sales-analytics.component.html',
    styleUrls: ['./sales-analytics.component.scss'],
    standalone: false
})
export class SalesAnalyticsComponent {
    activeTab: 'sales' | 'analytics' = 'sales';

    setActiveTab(tab: 'sales' | 'analytics') {
        this.activeTab = tab;
    }
}
