import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:3003/api';

    constructor(private http: HttpClient) { }

    private getHeaders() {
        const token = localStorage.getItem('admin_token');
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
    }

    // Dashboard Stats
    getStats(): Observable<any> {
        return this.http.get(`${this.baseUrl}/orders/stats`, { headers: this.getHeaders() });
    }

    // Orders
    getOrders(): Observable<any> {
        return this.http.get(`${this.baseUrl}/orders`, { headers: this.getHeaders() });
    }

    updateOrderStatus(id: string, status: string): Observable<any> {
        return this.http.put(`${this.baseUrl}/orders/${id}`, { status }, { headers: this.getHeaders() });
    }

    // Products
    getProducts(): Observable<any> {
        return this.http.get(`${this.baseUrl}/products`, { headers: this.getHeaders() });
    }

    createProduct(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/products`, data, { headers: this.getHeaders() });
    }

    // Management
    getUsers(): Observable<any> {
        return this.http.get(`${this.baseUrl}/management/users`, { headers: this.getHeaders() });
    }

    getRiders(): Observable<any> {
        return this.http.get(`${this.baseUrl}/management/riders`, { headers: this.getHeaders() });
    }
}
