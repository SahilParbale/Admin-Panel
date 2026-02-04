import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
    pageTitle: string = 'Dashboard';

    constructor(private router: Router) {
        // Handle initial title
        this.updateTitle(this.router.url);

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            this.updateTitle(event.urlAfterRedirects || event.url);
        });
    }

    private updateTitle(url: string) {
        if (url.includes('/product-management')) {
            this.pageTitle = 'Product Management';
        } else if (url.includes('/order-management')) {
            this.pageTitle = 'Order Management';
        } else if (url.includes('/pricing-management')) {
            this.pageTitle = 'Pricing & Offer Management';
        } else if (url.includes('/user-management')) {
            this.pageTitle = 'Users & Rider Management';
        } else if (url.includes('/finance')) {
            this.pageTitle = 'Payment & Finance';
        } else if (url.includes('/sales-analytics') || url.includes('/analytics')) {
            this.pageTitle = 'Sales & Analytics';
        } else if (url.includes('/marketing-management')) {
            this.pageTitle = 'Marketing';
        } else if (url.includes('/support-management')) {
            this.pageTitle = 'Support & Resolution Center';
        } else if (url.includes('/settings-management')) {
            this.pageTitle = 'System Settings';
        } else {
            this.pageTitle = 'Dashboard';
        }
    }
}
