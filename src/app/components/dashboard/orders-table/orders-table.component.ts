import { Component } from '@angular/core';

@Component({
    selector: 'app-orders-table',
    templateUrl: './orders-table.component.html',
    styleUrls: ['./orders-table.component.scss'],
    standalone: false
})
export class OrdersTableComponent {
    orders = [
        { id: '#26839628288', restaurant: 'Bikanervala Sweets', customer: 'Aarav Sharma', date: '22 Dec 2024 at 11:20', items: 200, amount: '$5,576.90', status: 'Delivered' },
        { id: '#26839628289', restaurant: 'Saravana Bhavan', customer: 'Vihaan Patel', date: '22 Dec 2024 at 11:30', items: 1050, amount: '$5,576.90', status: 'Delivered' },
        { id: '#26839628290', restaurant: 'Haldiram\'s', customer: 'Aditya Verma', date: '22 Dec 2024 at 13:20', items: 2090, amount: '$5,576.90', status: 'Delivered' },
        { id: '#26839628291', restaurant: 'Paradise Biryani', customer: 'Sai Krishna', date: '22 Dec 2024 at 14:15', items: 50, amount: '$1,200.00', status: 'Delivered' },
        { id: '#26839628292', restaurant: 'Punjab Grill', customer: 'Ishaan Gupta', date: '22 Dec 2024 at 15:45', items: 340, amount: '$3,450.50', status: 'Delivered' },
        { id: '#26839628293', restaurant: 'Moti Mahal', customer: 'Rohan Das', date: '22 Dec 2024 at 16:10', items: 120, amount: '$1,850.00', status: 'Pending' },
        { id: '#26839628294', restaurant: 'Karim\'s', customer: 'Priya Singh', date: '22 Dec 2024 at 16:30', items: 450, amount: '$4,200.75', status: 'Delivered' },
        { id: '#26839628295', restaurant: 'Indian Accent', customer: 'Anjali Mehta', date: '22 Dec 2024 at 17:00', items: 85, amount: '$8,900.00', status: 'Cancelled' },
        { id: '#26839628296', restaurant: 'Bukhara', customer: 'Vikram Malhotra', date: '22 Dec 2024 at 17:25', items: 300, amount: '$6,500.25', status: 'Delivered' },
        { id: '#26839628297', restaurant: 'Barbeque Nation', customer: 'Sneha Kapoor', date: '22 Dec 2024 at 17:50', items: 1500, amount: '$25,000.00', status: 'Delivered' },
        { id: '#26839628298', restaurant: 'Mainland China', customer: 'Rahul Sharma', date: '22 Dec 2024 at 18:15', items: 250, amount: '$3,200.50', status: 'On styling' },
        { id: '#26839628299', restaurant: 'Wow! Momo', customer: 'Amit Verma', date: '22 Dec 2024 at 18:40', items: 60, amount: '$850.00', status: 'Delivered' },
        { id: '#26839628300', restaurant: 'Chai Point', customer: 'Pooja Reddy', date: '22 Dec 2024 at 19:00', items: 400, amount: '$1,500.00', status: 'Delivered' },
        { id: '#26839628301', restaurant: 'Cafe Coffee Day', customer: 'Neha Gupta', date: '22 Dec 2024 at 19:20', items: 150, amount: '$2,100.00', status: 'Pending' },
        { id: '#26839628302', restaurant: 'Burger King', customer: 'Arjun Nair', date: '22 Dec 2024 at 19:45', items: 500, amount: '$4,800.00', status: 'Delivered' },
        { id: '#26839628303', restaurant: 'McDonald\'s', customer: 'Kavita Joshi', date: '22 Dec 2024 at 20:10', items: 800, amount: '$6,200.00', status: 'Delivered' },
        { id: '#26839628304', restaurant: 'KFC', customer: 'Manish Tiwari', date: '22 Dec 2024 at 20:30', items: 650, amount: '$5,900.00', status: 'Cancelled' },
        { id: '#26839628305', restaurant: 'Subway', customer: 'Suresh Raina', date: '22 Dec 2024 at 20:55', items: 200, amount: '$2,400.00', status: 'Delivered' },
        { id: '#26839628306', restaurant: 'Taco Bell', customer: 'Deepika Padukone', date: '22 Dec 2024 at 21:15', items: 300, amount: '$3,500.00', status: 'Delivered' },
        { id: '#26839628307', restaurant: 'Pizza Hut', customer: 'Ranveer Singh', date: '22 Dec 2024 at 21:40', items: 450, amount: '$5,100.00', status: 'Delivered' },
        { id: '#26839628308', restaurant: 'Domino\'s', customer: 'Alia Bhatt', date: '22 Dec 2024 at 22:00', items: 600, amount: '$6,800.00', status: 'On styling' },
        { id: '#26839628309', restaurant: 'Chaayos', customer: 'Varun Dhawan', date: '22 Dec 2024 at 22:20', items: 100, amount: '$1,200.00', status: 'Delivered' },
        { id: '#26839628310', restaurant: 'Sagar Ratna', customer: 'Kriti Sanon', date: '22 Dec 2024 at 22:45', items: 350, amount: '$3,900.00', status: 'Delivered' },
        { id: '#26839628311', restaurant: 'Keventers', customer: 'Sidharth Malhotra', date: '22 Dec 2024 at 23:00', items: 120, amount: '$1,500.00', status: 'Pending' },
        { id: '#26839628312', restaurant: 'Goli Vada Pav', customer: 'Kiara Advani', date: '22 Dec 2024 at 23:15', items: 250, amount: '$1,800.00', status: 'Delivered' },
        { id: '#26839628313', restaurant: 'Biryani Blues', customer: 'Vicky Kaushal', date: '22 Dec 2024 at 23:30', items: 500, amount: '$5,600.00', status: 'Delivered' },
        { id: '#26839628314', restaurant: 'Behrouz Biryani', customer: 'Katrina Kaif', date: '22 Dec 2024 at 23:45', items: 400, amount: '$4,900.00', status: 'On styling' },
        { id: '#26839628315', restaurant: 'Faasos', customer: 'Ayushmann Khurrana', date: '23 Dec 2024 at 00:10', items: 150, amount: '$1,600.00', status: 'Delivered' },
        { id: '#26839628316', restaurant: 'Oven Story', customer: 'Rajkummar Rao', date: '23 Dec 2024 at 00:30', items: 280, amount: '$3,100.00', status: 'Delivered' },
        { id: '#26839628317', restaurant: 'Lunchbox', customer: 'Bhumi Pednekar', date: '23 Dec 2024 at 00:50', items: 90, amount: '$950.00', status: 'Cancelled' }
    ];
}
