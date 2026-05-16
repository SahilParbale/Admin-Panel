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

    // Area Modal State
    isAreaModalOpen = false;
    selectedAreaName: string = '';
    selectedAreaOrderCount: number = 0;

    // Cancellation Modal State
    isCancellationModalOpen = false;
    selectedCancellationPeriod: string = '';
    selectedCancellationRate: number = 0;

    // AOV Modal State
    isAovModalOpen = false;
    selectedAovPeriod: string = '';
    selectedAovValue: number = 0;

    // Status Modal State
    isStatusModalOpen = false;
    selectedStatusName: string = '';
    selectedStatusCount: number = 0;

    // Payment Modal State
    isPaymentModalOpen = false;
    selectedPaymentMethod: string = '';
    selectedPaymentCount: number = 0;

    // Repeat Modal State
    isRepeatModalOpen = false;
    selectedMonth: string = '';
    selectedFirstTimeCount: number = 0;
    selectedRepeatCount: number = 0;

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
                        category: i.product?.category || 'General',
                        quantity: i.quantity,
                        price: `₹${i.price}`
                    }))
                }));
                this.cancelledOrders = this.orders.filter(o => o.status === 'CANCELLED');
            },
            error: (err) => console.error('Error fetching admin orders', err)
        });
    }

    handleAreaDetail(event: { areaName: string, orderCount: number }) {
    this.selectedAreaName = event.areaName;
    this.selectedAreaOrderCount = event.orderCount;
    this.isAreaModalOpen = true;
  }

  handleCancellationDetail(event: { period: string, rate: number }) {
    this.selectedCancellationPeriod = event.period;
    this.selectedCancellationRate = event.rate;
    this.isCancellationModalOpen = true;
  }

  handleAovDetail(event: { period: string, aovValue: number }) {
    this.selectedAovPeriod = event.period;
    this.selectedAovValue = event.aovValue;
    this.isAovModalOpen = true;
  }

  handleStatusDetail(event: { statusName: string, orderCount: number }) {
    this.selectedStatusName = event.statusName;
    this.selectedStatusCount = event.orderCount;
    this.isStatusModalOpen = true;
  }

  handlePaymentDetail(event: { paymentMethod: string, count: number }) {
    this.selectedPaymentMethod = event.paymentMethod;
    this.selectedPaymentCount = event.count;
    this.isPaymentModalOpen = true;
  }

  handleRepeatDetail(event: { month: string, firstTime: number, repeat: number }) {
    this.selectedMonth = event.month;
    this.selectedFirstTimeCount = event.firstTime;
    this.selectedRepeatCount = event.repeat;
    this.isRepeatModalOpen = true;
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

    onAreaChartClick(event: any): void {
        this.selectedAreaName = event.label;
        this.selectedAreaOrderCount = event.value;
        this.isAreaModalOpen = true;
    }

    closeAreaModal() {
        this.isAreaModalOpen = false;
    }

    onCancellationChartClick(event: any): void {
        this.selectedCancellationPeriod = event.label;
        this.selectedCancellationRate = event.value;
        this.isCancellationModalOpen = true;
    }

    closeCancellationModal() {
        this.isCancellationModalOpen = false;
    }

    onAovChartClick(event: any): void {
        this.selectedAovPeriod = event.label;
        this.selectedAovValue = event.value;
        this.isAovModalOpen = true;
    }

    closeAovModal() {
        this.isAovModalOpen = false;
    }

    onStatusChartClick(event: any): void {
        this.selectedStatusName = event.label;
        this.selectedStatusCount = event.value;
        this.isStatusModalOpen = true;
    }

    closeStatusModal() {
        this.isStatusModalOpen = false;
    }

    onPaymentChartClick(event: any): void {
        this.selectedPaymentMethod = event.label;
        this.selectedPaymentCount = event.value;
        this.isPaymentModalOpen = true;
    }

    closePaymentModal() {
        this.isPaymentModalOpen = false;
    }

    onRepeatChartClick(event: any): void {
        this.selectedMonth = event.label;
        this.selectedFirstTimeCount = event.firstTime;
        this.selectedRepeatCount = event.repeat;
        this.isRepeatModalOpen = true;
    }

    closeRepeatModal() {
        this.isRepeatModalOpen = false;
    }
}
