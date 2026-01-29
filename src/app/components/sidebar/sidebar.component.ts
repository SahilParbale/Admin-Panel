import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent {
    menuItems = [
        { label: 'Dashboard', icon: 'bx-grid-alt', active: true },
        { label: 'Orders', icon: 'bx-calendar', hasSubmenu: true },
        { label: 'Food Menu', icon: 'bx-food-menu' },
        { label: 'Riders', icon: 'bx-cycling' },
        { label: 'Restaurant', icon: 'bx-store', hasSubmenu: true },
        { label: 'Report', icon: 'bx-bar-chart-alt-2' },
        { label: 'Message', icon: 'bx-message-dots' }
    ];

    otherItems = [
        { label: 'Marketing', icon: 'bx-target-lock', hasSubmenu: true },
        { label: 'Support', icon: 'bx-headphone' },
        { label: 'Settings', icon: 'bx-cog' }
    ];
}
