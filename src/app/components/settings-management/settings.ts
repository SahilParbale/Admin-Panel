import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-settings-management',
    templateUrl: './settings.html',
    styleUrls: ['./settings.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SettingsManagementComponent implements OnInit {

    activeCategory: string = 'business'; // business, payments, delivery, tax, roles, notifications, security, automation, localization, inventory, invoice, maintenance
    showConfirmationModal: boolean = false;
    pendingAction: string = '';

    settingsMenu = [
        { id: 'business', label: 'Business Profile', icon: 'bx-briefcase' },
        { id: 'payments', label: 'Payments', icon: 'bx-credit-card' },
        { id: 'delivery', label: 'Delivery & Logistics', icon: 'bx-truck' },
        { id: 'tax', label: 'Tax & Pricing', icon: 'bx-calculator' },
        { id: 'roles', label: 'Users & Roles', icon: 'bx-user-pin' },
        { id: 'notifications', label: 'Notifications', icon: 'bx-bell' },
        { id: 'security', label: 'Security & Privacy', icon: 'bx-lock-alt' },
        { id: 'automation', label: 'Automation', icon: 'bx-bot' },
        { id: 'localization', label: 'Localization', icon: 'bx-world' },
        { id: 'inventory', label: 'Inventory', icon: 'bx-package' },
        { id: 'invoice', label: 'Invoices', icon: 'bx-file' },
        { id: 'maintenance', label: 'System Maintenance', icon: 'bx-cog' }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    setActiveCategory(cat: string) {
        this.activeCategory = cat;
    }

    confirmAction(action: string) {
        this.pendingAction = action;
        this.showConfirmationModal = true;
    }

    executeAction() {
        console.log('Executing action:', this.pendingAction);
        this.showConfirmationModal = false;
    }

}
