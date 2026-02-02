import { Component, OnInit } from '@angular/core';

interface HeatmapCell {
    day: string;
    hour: number;
    value: number;
}

@Component({
    selector: 'app-peak-order-time-heatmap',
    templateUrl: './peak-order-time-heatmap.component.html',
    styleUrls: ['./peak-order-time-heatmap.component.scss'],
    standalone: false
})
export class PeakOrderTimeHeatmapComponent implements OnInit {
    public days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    public hours = Array.from({ length: 24 }, (_, i) => i);
    public heatmapData: HeatmapCell[] = [];

    constructor() { }

    ngOnInit(): void {
        this.generateDummyData();
    }

    private generateDummyData(): void {
        // Generate dummy density data (0-100)
        // Peaks usually occur in the evening (18:00 - 22:00) and weekends
        for (const day of this.days) {
            for (const hour of this.hours) {
                let value = Math.floor(Math.random() * 40) + 10; // Base noise

                // Evening peak (6 PM - 10 PM)
                if (hour >= 18 && hour <= 22) {
                    value += Math.floor(Math.random() * 50) + 30;
                }

                // Lunch peak (12 PM - 2 PM)
                if (hour >= 12 && hour <= 14) {
                    value += Math.floor(Math.random() * 30) + 20;
                }

                // Weekend boost
                if (day === 'Sat' || day === 'Sun') {
                    value += 20;
                }

                this.heatmapData.push({ day, hour, value: Math.min(value, 100) });
            }
        }
    }

    public getCellColor(day: string, hour: number): string {
        const cell = this.heatmapData.find(d => d.day === day && d.hour === hour);
        if (!cell) return '#f8fafc';

        const opacity = cell.value / 100;
        // Using Emerald color: rgba(16, 185, 129, opacity)
        return `rgba(16, 185, 129, ${opacity})`;
    }

    public getCellValue(day: string, hour: number): number {
        const cell = this.heatmapData.find(d => d.day === day && d.hour === hour);
        return cell ? cell.value : 0;
    }
}
