import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-deliveries-per-rider-chart',
    templateUrl: './deliveries-per-rider-chart.component.html',
    styleUrls: ['./deliveries-per-rider-chart.component.scss'],
    standalone: true,
    imports: [BaseChartDirective, CommonModule]
})
export class DeliveriesPerRiderChartComponent implements OnInit {

    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Alex', 'Jordan', 'Chris', 'Taylor', 'Sam', 'Micky', 'Pat'],
        datasets: [
            {
                data: [120, 150, 90, 180, 140, 110, 165],
                label: 'Total Deliveries',
                backgroundColor: '#8b5cf6', // Violet-500
                hoverBackgroundColor: '#7c3aed', // Violet-600
                borderRadius: 6,
                barThickness: 35
            }
        ]
    };

    public barChartOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: (context) => {
                        return ` ${context.parsed.y} Deliveries`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#6b7280',
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    color: '#f3f4f6',
                    drawTicks: false
                },
                ticks: {
                    color: '#9ca3af',
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    }
                },
                beginAtZero: true
            }
        }
    };

    constructor() { }

    ngOnInit(): void {
    }

}
