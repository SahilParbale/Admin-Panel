import { Component } from '@angular/core';

@Component({
    selector: 'app-order-management',
    templateUrl: './order-management.component.html',
    styleUrls: ['./order-management.component.scss'],
    standalone: false
})
export class OrderManagementComponent {
    selectedOrder: any = null;

    orders = [
        {
            id: '#ORD-004',
            date: '2024-02-02 12:00 PM',
            customer: 'Sai Krishna',
            zone: 'Hyderabad - Jubilee Hills',
            amount: '₹540.00',
            paymentMethod: 'UPI',
            status: 'New',
            deliveryPartner: 'Porter',
            estimatedTime: '01:45 PM',
            items: [
                { name: 'Chicken Biryani', quantity: 1, price: '₹350.00' },
                { name: 'Double Ka Meetha', quantity: 2, price: '₹190.00' }
            ]
        },
        {
            id: '#ORD-006',
            date: '2024-02-02 12:10 PM',
            customer: 'Rohan Das',
            zone: 'Kolkata - Salt Lake',
            amount: '₹950.00',
            paymentMethod: 'COD',
            status: 'New',
            deliveryPartner: 'Borzo',
            estimatedTime: '02:00 PM',
            items: [
                { name: 'Mutton Kossa', quantity: 1, price: '₹550.00' },
                { name: 'Rumali Roti', quantity: 4, price: '₹100.00' },
                { name: 'Rosogolla (4pcs)', quantity: 1, price: '₹300.00' }
            ]
        },
        {
            id: '#ORD-010',
            date: '2024-02-02 11:30 AM',
            customer: 'Sneha Kapoor',
            zone: 'Bangalore - Whitefield',
            amount: '₹1,500.00',
            paymentMethod: 'COD',
            status: 'New',
            deliveryPartner: 'Swiggy Genie',
            estimatedTime: '02:30 PM',
            items: [
                { name: 'Pizza Margherita (Large)', quantity: 2, price: '₹1,200.00' },
                { name: 'Garlic Bread', quantity: 2, price: '₹300.00' }
            ]
        },
        {
            id: '#ORD-003',
            date: '2024-02-02 11:45 AM',
            customer: 'Aditya Verma',
            zone: 'Bangalore - Indiranagar',
            amount: '₹2,100.00',
            paymentMethod: 'COD',
            status: 'Packed',
            deliveryPartner: 'Swiggy Genie',
            estimatedTime: '01:30 PM',
            items: [
                { name: 'Sushi Platter', quantity: 1, price: '₹1,800.00' },
                { name: 'Miso Soup', quantity: 2, price: '₹300.00' }
            ]
        },
        {
            id: '#ORD-009',
            date: '2024-02-02 12:05 PM',
            customer: 'Vikram Malhotra',
            zone: 'Mumbai - Andheri East',
            amount: '₹600.00',
            paymentMethod: 'UPI',
            status: 'Packed',
            deliveryPartner: 'Dunzo',
            estimatedTime: '01:15 PM',
            items: [
                { name: 'Vada Pav', quantity: 5, price: '₹100.00' },
                { name: 'Pav Bhaji', quantity: 2, price: '₹400.00' },
                { name: 'Lassi', quantity: 2, price: '₹100.00' }
            ]
        },
        {
            id: '#ORD-002',
            date: '2024-02-02 11:15 AM',
            customer: 'Vihaan Patel',
            zone: 'Delhi - CP',
            amount: '₹850.50',
            paymentMethod: 'Card',
            status: 'Out for Delivery',
            deliveryPartner: 'Dunzo',
            estimatedTime: '12:00 PM',
            items: [
                { name: 'Butter Chicken', quantity: 1, price: '₹450.00' },
                { name: 'Butter Naan', quantity: 3, price: '₹150.00' },
                { name: 'Gulab Jamun', quantity: 4, price: '₹250.50' }
            ]
        },
        {
            id: '#ORD-008',
            date: '2024-02-02 10:00 AM',
            customer: 'Anjali Mehta',
            zone: 'Delhi - South Ex',
            amount: '₹4,200.75',
            paymentMethod: 'Card',
            status: 'Out for Delivery',
            deliveryPartner: 'Uber Connect',
            estimatedTime: '12:30 PM',
            items: [
                { name: 'Family Combo Meal', quantity: 2, price: '₹3,500.00' },
                { name: 'Chocolate Cake (1kg)', quantity: 1, price: '₹700.75' }
            ]
        },

        {
            id: '#ORD-001',
            date: '2024-02-02 10:30 AM',
            customer: 'Aarav Sharma',
            zone: 'Mumbai - Bandra West',
            amount: '₹1,250.00',
            paymentMethod: 'UPI',
            status: 'Delivered',
            deliveryPartner: 'Shadowfax',
            estimatedTime: 'Done',
            items: [
                { name: 'Veg Burger', quantity: 2, price: '₹300.00' },
                { name: 'French Fries (L)', quantity: 2, price: '₹200.00' },
                { name: 'Coke', quantity: 2, price: '₹100.00' },
                { name: 'Chicken Wings (6pcs)', quantity: 1, price: '₹650.00' }
            ]
        },
        {
            id: '#ORD-007',
            date: '2024-02-02 09:15 AM',
            customer: 'Priya Singh',
            zone: 'Chennai - Adyar',
            amount: '₹1,800.00',
            paymentMethod: 'UPI',
            status: 'Delivered',
            deliveryPartner: 'Shadowfax',
            estimatedTime: 'Done',
            items: [
                { name: 'Masala Dosa', quantity: 3, price: '₹450.00' },
                { name: 'Idli (2pcs)', quantity: 4, price: '₹200.00' },
                { name: 'Filter Coffee', quantity: 4, price: '₹200.00' },
                { name: 'Kesari Bath', quantity: 2, price: '₹150.00' },
                { name: 'Chicken 65', quantity: 2, price: '₹800.00' }
            ]
        }
    ];

    openDetails(order: any) {
        this.selectedOrder = order;
    }

    closeDetails() {
        this.selectedOrder = null;
    }

    cancelledOrders = [
        {
            id: '#ORD-005',
            reason: 'Customer not available',
            cancelledBy: 'Delivery Partner',
            refundStatus: 'Initiated',
            refundAmount: '₹3,450.00'
        },
        {
            id: '#ORD-011',
            reason: 'Changed mind',
            cancelledBy: 'Customer',
            refundStatus: 'Completed',
            refundAmount: '₹1,200.00'
        },
        {
            id: '#ORD-012',
            reason: 'Item out of stock',
            cancelledBy: 'Restaurant',
            refundStatus: 'Pending',
            refundAmount: '₹850.00'
        },
        {
            id: '#ORD-013',
            reason: 'High delivery time',
            cancelledBy: 'Customer',
            refundStatus: 'Completed',
            refundAmount: '₹450.00'
        },
        {
            id: '#ORD-014',
            reason: 'Address issue',
            cancelledBy: 'Delivery Partner',
            refundStatus: 'Failed',
            refundAmount: '₹2,100.00'
        },
        {
            id: '#ORD-015',
            reason: 'Quality concerns',
            cancelledBy: 'Customer',
            refundStatus: 'Initiated',
            refundAmount: '₹550.00'
        },
        {
            id: '#ORD-016',
            reason: 'Wrong item delivered',
            cancelledBy: 'Customer',
            refundStatus: 'Completed',
            refundAmount: '₹1,500.00'
        },
        {
            id: '#ORD-017',
            reason: 'Payment failed during re-order',
            cancelledBy: 'System',
            refundStatus: 'Pending',
            refundAmount: '₹1,100.00'
        },
        {
            id: '#ORD-018',
            reason: 'Restaurant closed',
            cancelledBy: 'Admin',
            refundStatus: 'Completed',
            refundAmount: '₹920.00'
        }
    ];

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
