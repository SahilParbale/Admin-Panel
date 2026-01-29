import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-stat-card',
    templateUrl: './stat-card.component.html',
    styleUrls: ['./stat-card.component.scss'],
    standalone: false
})
export class StatCardComponent {
    @Input() title: string = '';
    @Input() value: string = '';
    @Input() trend: 'up' | 'down' = 'up';
    @Input() trendValue: string = '';
    @Input() trendLabel: string = '/Month';
}
