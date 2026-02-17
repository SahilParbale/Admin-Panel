import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-order-management',
    templateUrl: './order-management.component.html',
    styleUrls: ['./order-management.component.scss'],
    standalone: false
})
export class OrderManagementComponent implements OnInit {
    constructor(private apiService: ApiService) { }
    selectedOrder: any = null;

    orders: any[] = [];
    cancelledOrders: any[] = []; // Filtered from orders if needed

    ngOnInit() {
        this.fetchOrders();
    }

    fetchOrders() {
        this.apiService.getOrders().subscribe({
            next: (orders) => {
                this.orders = orders.map((o: any) => ({
                    id: `#${o.id.substring(0, 8)}`,
                    date: new Date(o.createdAt).toLocaleString(),
                    customer: o.user?.name || 'Customer',
                    zone: o.user?.address || 'N/A',
                    amount: `₹${o.total}`,
                    paymentMethod: 'UPI', // Default for now
                    status: o.status,
                    deliveryPartner: o.rider?.name || 'Pending',
                    items: o.items.map((i: any) => ({
                        name: i.product?.name,
                        quantity: i.quantity,
                        price: `₹${i.price}`
                    }))
                }));
                this.cancelledOrders = this.orders.filter(o => o.status === 'CANCELLED');
            },
            error: (err) => console.error('Error fetching admin orders', err)
        });
    }

    openDetails(order: any) {
        this.selectedOrder = order;
    }

    closeDetails() {
        this.selectedOrder = null;
    }


    downloadInvoice(orderId: string) {
        console.log(`Downloading invoice for order: ${orderId}`);
        // Simulate download
        const blob = new Blob([`Invoice for Order ${orderId}\n\nDate: ${new Date().toLocaleString()}`], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `invoice-${orderId.replace('#', '')}.txt`;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
