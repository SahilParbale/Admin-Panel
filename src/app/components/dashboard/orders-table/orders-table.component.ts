import { Component } from '@angular/core';

@Component({
    selector: 'app-orders-table',
    templateUrl: './orders-table.component.html',
    styleUrls: ['./orders-table.component.scss'],
    standalone: false
})
export class OrdersTableComponent {
    orders = [
        { id: '#26839628288', restaurant: 'Al Baik Fast Food Shop', customer: 'Mohammed Fateh', date: '22 Dec 2024 at 11:20', items: 200, amount: '$5,576.90', status: 'Delivered' },
        { id: '#26839628288', restaurant: 'Taza Bukari House', customer: 'Mukarram Kazi', date: '22 Dec 2024 at 11:30', items: 1050, amount: '$5,576.90', status: 'Delivered' },
        { id: '#26839628288', restaurant: 'Al Tazaz Fast Food Shop', customer: 'Muhammad Khan', date: '22 Dec 2024 at 13:20', items: 2090, amount: '$5,576.90', status: 'Delivered' }
    ];
}
