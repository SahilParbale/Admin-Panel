import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent {
    menuItems = [
        { label: 'Dashboard', icon: 'bx-grid-alt', active: true, hasSubmenu: false, route: '/' },
        { label: 'Product Management', icon: 'bx-box', hasSubmenu: false, route: '/product-management' },
        { label: 'Order Management', icon: 'bx-cart', hasSubmenu: false, route: '/order-management' },
        { label: 'Pricing & Offer Management', icon: 'bx-purchase-tag', hasSubmenu: false, route: '/pricing-management' },
        { label: 'Users & Rider Management', icon: 'bx-user', hasSubmenu: false, route: '/user-management' },
        { label: 'Payment & Finance', icon: 'bx-dollar-circle', hasSubmenu: false, route: '/finance' },
        { label: 'Sales & Analytics', icon: 'bx-line-chart', hasSubmenu: false, route: '/sales-analytics' }
    ];

    otherItems = [
        { label: 'Marketing', icon: 'bx-target-lock', hasSubmenu: false, route: '/marketing-management' },
        { label: 'Support', icon: 'bx-headphone', hasSubmenu: false, route: '/support-management' },
        { label: 'Settings', icon: 'bx-cog', hasSubmenu: false, route: '/settings-management' }
    ];
}
