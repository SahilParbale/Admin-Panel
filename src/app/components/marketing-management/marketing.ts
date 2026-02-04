import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-marketing-management',
    templateUrl: './marketing.html',
    styleUrls: ['./marketing.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MarketingManagementComponent implements OnInit {

    activeTab: string = 'campaigns';

    constructor() { }

    ngOnInit(): void {
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }

}
