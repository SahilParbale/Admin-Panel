import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-payment-method-split-chart',
    templateUrl: './payment-method-split-chart.component.html',
    styleUrls: ['./payment-method-split-chart.component.scss'],
    standalone: false
})
export class PaymentMethodSplitChartComponent implements OnInit {
    public pieChartData: ChartConfiguration<'pie'>['data'] = {
        labels: ['UPI', 'COD', 'Credit/Debit Card', 'Wallet'],
        datasets: [
            {
                data: [450, 320, 180, 50],
                backgroundColor: [
                    '#4F46E5', // Indigo (UPI)
                    '#06B6D4', // Cyan (COD)
                    '#F43F5E', // Rose (Card)
                    '#F59E0B'  // Amber (Wallet)
                ],
                hoverBackgroundColor: [
                    '#4338CA',
                    '#0891B2',
                    '#E11D48',
                    '#D97706'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }
        ]
    };

    public pieChartOptions: ChartOptions<'pie'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: { size: 12, weight: 500 }
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                displayColors: true,
                usePointStyle: true,
                callbacks: {
                    label: (context) => {
                        const total = context.dataset.data.reduce((a: any, b: any) => a + b, 0);
                        const value = context.parsed;
                        const percentage = ((value / total) * 100).toFixed(1);
                        return ` ${context.label}: ${percentage}% (${value})`;
                    }
                }
            }
        }
    };

    constructor() { }

    ngOnInit(): void { }
}
