import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
    ChartConfiguration,
    ChartOptions
} from 'chart.js';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { PricingRevenueModalComponent } from './pricing-revenue-modal/pricing-revenue-modal.component';
import { PricingDiscountImpactModalComponent } from './pricing-discount-impact-modal/pricing-discount-impact-modal.component';
import { PricingOfferRankingsModalComponent } from './pricing-offer-rankings-modal/pricing-offer-rankings-modal.component';
import { PricingElasticityModalComponent } from './pricing-elasticity-modal/pricing-elasticity-modal.component';

interface PricingItem {
    id: number;
    productName: string;
    variant: string;
    oldPrice: number;
    basePrice: number;
    sellingPrice: number;
    discount: number;
    gst: string;
    effectiveFrom: string;
    change: number;
    dateTime: string;
}

@Component({
    selector: 'app-pricing-management',
    templateUrl: './pricing-management.component.html',
    styleUrls: ['./pricing-management.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, BaseChartDirective, PricingRevenueModalComponent, PricingDiscountImpactModalComponent, PricingOfferRankingsModalComponent, PricingElasticityModalComponent],
    providers: [provideCharts(withDefaultRegisterables())]
})
export class PricingManagementComponent implements OnInit {
    pricingData: PricingItem[] = [];
    offersData: OfferItem[] = [];
    isUpdateModalOpen = false;
    isOfferModalOpen = false;
    isEditMode = false;
    isDeleteModalOpen = false;
    offerToDeleteId: number | null = null;
    pricingForm!: FormGroup;
    offerForm!: FormGroup;

    // Revenue Modal State
    isRevenueModalOpen = false;
    selectedRevenueMonth = '';
    selectedRevenueBefore = 0;
    selectedRevenueAfter = 0;

    // Discount Impact Modal State
    isDiscountImpactModalOpen = false;
    selectedDiscountTier = '';
    selectedSalesVolume = 0;

    // Offer Rankings Modal State
    isOfferRankingsModalOpen = false;
    selectedOfferRankingName = '';
    selectedRedemptions = 0;

    // Elasticity Modal State
    isElasticityModalOpen = false;
    selectedPriceChange = 0;
    selectedDemandChange = 0;

    // Dropdown states
    showProductDropdown = false;
    showOfferTypeDropdown = false;
    productsList: string[] = ['Fresh Alphonso Mango', 'Organic Bananas', 'Shimla Apples', 'Green Grapes', 'Pomegranate', 'Watermelon'];
    offerTypes: string[] = ['Product', 'Category', 'Cart'];

    // Chart Filter States
    // Revenue Analysis
    revenuePeriod = 'This Year';
    showRevenuePeriodDropdown = false;
    revenuePeriodOptions = [
        { label: 'This Year', value: 'This Year' },
        { label: 'Last 6 Months', value: 'Last 6 Months' },
        { label: 'Last Quarter', value: 'Last Quarter' }
    ];

    // Discount Impact
    discountCategory = 'All Categories';
    showDiscountCategoryDropdown = false;
    discountCategoryOptions = [
        { label: 'All Categories', value: 'All Categories' },
        { label: 'Fruits', value: 'Fruits' },
        { label: 'Exotic', value: 'Exotic' },
        { label: 'Berries', value: 'Berries' }
    ];

    // Offer Rankings
    rankingMetric = 'Redemptions';
    showRankingMetricDropdown = false;
    rankingMetricOptions = [
        { label: 'Redemptions', value: 'Redemptions' },
        { label: 'Revenue Generated', value: 'Revenue Generated' },
        { label: 'Avg Order Value', value: 'Avg Order Value' }
    ];

    // Price Elasticity
    elasticityCategory = 'All Categories';
    showElasticityCategoryDropdown = false;
    elasticityCategoryOptions = [
        { label: 'All Categories', value: 'All Categories' },
        { label: 'Fruits', value: 'Fruits' },
        { label: 'Exotic', value: 'Exotic' }
    ];

    toggleChartDropdown(dropdownName: string) {
        this.showRevenuePeriodDropdown = dropdownName === 'revenuePeriod' ? !this.showRevenuePeriodDropdown : false;
        this.showDiscountCategoryDropdown = dropdownName === 'discountCategory' ? !this.showDiscountCategoryDropdown : false;
        this.showRankingMetricDropdown = dropdownName === 'rankingMetric' ? !this.showRankingMetricDropdown : false;
        this.showElasticityCategoryDropdown = dropdownName === 'elasticityCategory' ? !this.showElasticityCategoryDropdown : false;
    }

    setChartFilter(filterName: string, value: string) {
        (this as any)[filterName] = value;
        console.log(`Pricing chart filter updated: ${filterName} = ${value}`);
        this.showRevenuePeriodDropdown = false;
        this.showDiscountCategoryDropdown = false;
        this.showRankingMetricDropdown = false;
        this.showElasticityCategoryDropdown = false;
    }

    getChartLabel(value: string, options: any[]): string {
        const option = options.find(o => o.value === value);
        return option ? option.label : value;
    }

    // Chart Configuration
    public revenueChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: [65000, 59000, 80000, 81000, 56000, 55000, 40000, 70000, 90000, 100000, 110000, 120000],
                label: 'Revenue Before Discount',
                fill: true,
                tension: 0.4,
                borderColor: '#10b981', // Emerald 500
                backgroundColor: 'rgba(16, 185, 129, 0.1)'
            },
            {
                data: [58000, 51000, 72000, 74000, 48000, 49000, 35000, 62000, 81000, 92000, 98000, 105000],
                label: 'Revenue After Discount',
                fill: true,
                tension: 0.4,
                borderColor: '#6366f1', // Indigo 500
                backgroundColor: 'rgba(99, 102, 241, 0.1)'
            }
        ]
    };

    public revenueChartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                usePointStyle: true
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#6b7280', font: { size: 11 } }
            },
            y: {
                grid: { color: '#f3f4f6' },
                ticks: {
                    color: '#6b7280',
                    font: { size: 11 },
                    callback: (value) => '₹' + value
                },
                beginAtZero: true
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        onHover: (event: any, activeElements: any[]) => {
            if (activeElements.length > 0) {
                (event.native.target as HTMLElement).style.cursor = 'pointer';
            } else {
                (event.native.target as HTMLElement).style.cursor = 'default';
            }
        }
    };

    // Volume Chart Configuration
    public volumeChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['5% OFF', '10% OFF', '15% OFF', '20% OFF', '25% OFF', '30% OFF'],
        datasets: [
            {
                data: [120, 250, 400, 550, 480, 600],
                label: 'Sales Volume (Units)',
                backgroundColor: '#3b82f6', // Blue 500
                hoverBackgroundColor: '#2563eb',
                borderRadius: 4,
                barThickness: 32
            }
        ]
    };

    public volumeChartOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                usePointStyle: true
            }
        },
        scales: {
            x: {
                grid: { display: false },
                title: { display: true, text: 'Discount Tiers', font: { size: 12, weight: 'bold' }, color: '#9ca3af' },
                ticks: { color: '#6b7280', font: { size: 11 } }
            },
            y: {
                grid: { color: '#f3f4f6' },
                title: { display: true, text: 'Units Sold', font: { size: 12, weight: 'bold' }, color: '#9ca3af' },
                ticks: { color: '#6b7280', font: { size: 11 } },
                beginAtZero: true
            }
        },
        onHover: (event: any, activeElements: any[]) => {
            if (activeElements.length > 0) {
                (event.native.target as HTMLElement).style.cursor = 'pointer';
            } else {
                (event.native.target as HTMLElement).style.cursor = 'default';
            }
        }
    };

    // Performance Ranking Chart Configuration (Horizontal Bar)
    public performanceChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Summer Sale', 'Welcome Bonus', 'Flash Sale', 'Fruit Fiesta', 'Weekend Blast'],
        datasets: [
            {
                data: [950, 820, 740, 600, 430],
                label: 'Redemptions',
                backgroundColor: '#8b5cf6', // Violet 500
                hoverBackgroundColor: '#7c3aed',
                borderRadius: 4,
                barThickness: 24
            }
        ]
    };

    public performanceChartOptions: ChartOptions<'bar'> = {
        indexAxis: 'y', // Horizontal Bar Chart
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                usePointStyle: true
            }
        },
        scales: {
            x: {
                grid: { color: '#f3f4f6' },
                title: { display: true, text: 'Total Redemptions', font: { size: 12, weight: 'bold' }, color: '#9ca3af' },
                ticks: { color: '#6b7280', font: { size: 11 } },
                beginAtZero: true
            },
            y: {
                grid: { display: false },
                ticks: { color: '#374151', font: { size: 11, weight: 'bold' } }
            }
        },
        onHover: (event: any, activeElements: any[]) => {
            if (activeElements.length > 0) {
                (event.native.target as HTMLElement).style.cursor = 'pointer';
            } else {
                (event.native.target as HTMLElement).style.cursor = 'default';
            }
        }
    };

    // Price Elasticity Chart Configuration (Scatter)
    public elasticityChartData: ChartConfiguration<'scatter'>['data'] = {
        datasets: [
            {
                label: 'Price Elasticity',
                data: [
                    { x: -5, y: 12 }, { x: -10, y: 25 }, { x: -2, y: 5 }, { x: 0, y: 0 },
                    { x: 5, y: -8 }, { x: 10, y: -18 }, { x: 15, y: -22 }, { x: 3, y: -4 },
                    { x: -8, y: 18 }, { x: 8, y: -12 }, { x: -15, y: 35 }, { x: 12, y: -20 }
                ],
                backgroundColor: '#ef4444', // Red 500
                borderColor: '#ef4444',
                pointRadius: 6,
                pointHoverRadius: 8
            }
        ]
    };

    public elasticityChartOptions: ChartOptions<'scatter'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                usePointStyle: true,
                callbacks: {
                    label: (context: any) => {
                        return `Price: ${context.raw.x}%, Demand: ${context.raw.y}%`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { color: '#f3f4f6' },
                title: { display: true, text: 'Price Change (%)', font: { size: 12, weight: 'bold' }, color: '#9ca3af' },
                ticks: { color: '#6b7280', font: { size: 11 } }
            },
            y: {
                grid: { color: '#f3f4f6' },
                title: { display: true, text: 'Demand Change (%)', font: { size: 12, weight: 'bold' }, color: '#9ca3af' },
                ticks: { color: '#6b7280', font: { size: 11 } }
            }
        },
        onHover: (event: any, activeElements: any[]) => {
            if (activeElements.length > 0) {
                (event.native.target as HTMLElement).style.cursor = 'pointer';
            } else {
                (event.native.target as HTMLElement).style.cursor = 'default';
            }
        }
    };

    constructor(private fb: FormBuilder) {
        this.generateDummyData();
        this.generateDummyOffers();
        this.initForm();
        this.initOfferForm();
    }

    initForm() {
        this.pricingForm = this.fb.group({
            productName: ['', Validators.required],
            variant: ['1 kg', Validators.required],
            basePrice: ['', [Validators.required, Validators.min(0)]],
            discount: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
            gst: ['5', Validators.required],
            effectiveFrom: [new Date().toISOString().split('T')[0], Validators.required]
        });
    }

    initOfferForm() {
        this.offerForm = this.fb.group({
            offerName: ['', Validators.required],
            offerType: ['Product', Validators.required],
            discount: ['', [Validators.required]],
            applicableTo: ['', Validators.required],
            minOrderValue: ['', Validators.required],
            startDateTime: ['', Validators.required],
            endDateTime: ['', Validators.required],
            usageLimit: ['', [Validators.required, Validators.min(1)]]
        });
    }

    onRevenueChartClick({ active }: { active?: any[] }): void {
        if (active && active.length > 0) {
            const index = active[0].index;
            this.selectedRevenueMonth = this.revenueChartData.labels?.[index] as string;
            this.selectedRevenueBefore = this.revenueChartData.datasets[0].data[index] as number;
            this.selectedRevenueAfter = this.revenueChartData.datasets[1].data[index] as number;
            this.isRevenueModalOpen = true;
        }
    }

    closeRevenueModal() {
        this.isRevenueModalOpen = false;
    }

    onVolumeChartClick({ active }: { active?: any[] }): void {
        if (active && active.length > 0) {
            const index = active[0].index;
            this.selectedDiscountTier = this.volumeChartData.labels?.[index] as string;
            this.selectedSalesVolume = this.volumeChartData.datasets[0].data[index] as number;
            this.isDiscountImpactModalOpen = true;
        }
    }

    closeDiscountImpactModal() {
        this.isDiscountImpactModalOpen = false;
    }

    onPerformanceChartClick({ active }: { active?: any[] }): void {
        if (active && active.length > 0) {
            const index = active[0].index;
            this.selectedOfferRankingName = this.performanceChartData.labels?.[index] as string;
            this.selectedRedemptions = this.performanceChartData.datasets[0].data[index] as number;
            this.isOfferRankingsModalOpen = true;
        }
    }

    closeOfferRankingsModal() {
        this.isOfferRankingsModalOpen = false;
    }

    onElasticityChartClick({ active }: { active?: any[] }): void {
        if (active && active.length > 0) {
            const index = active[0].index;
            const point = this.elasticityChartData.datasets[0].data[index] as { x: number; y: number };
            this.selectedPriceChange = point.x;
            this.selectedDemandChange = point.y;
            this.isElasticityModalOpen = true;
        }
    }

    closeElasticityModal() {
        this.isElasticityModalOpen = false;
    }

    openUpdateModal() {
        this.isUpdateModalOpen = true;
    }

    closeUpdateModal() {
        this.isUpdateModalOpen = false;
        this.showProductDropdown = false;
    }

    openOfferModal() {
        this.isEditMode = false;
        this.offerForm.reset({
            offerType: 'Product',
            usageLimit: 1
        });
        this.isOfferModalOpen = true;
    }

    editOffer(offer: OfferItem) {
        this.isEditMode = true;
        this.isOfferModalOpen = true;

        // Convert dummy date format (e.g., "2024-02-15 09:00 AM") to suitable datetime-local string
        // Note: In a real app, you'd likely work with Date objects or simpler ISO strings.
        // For this dummy data demo, we'll strip the AM/PM and time for simplicity or just use the raw value if it matches.
        // A robust implementation would parse the specific format.

        this.offerForm.patchValue({
            offerName: offer.offerName,
            offerType: offer.offerType,
            discount: offer.discount,
            applicableTo: offer.applicableTo,
            minOrderValue: parseInt(offer.minOrderValue.replace(/[^0-9]/g, '')), // strip currency symbol
            startDateTime: this.formatDateForInput(offer.startDateTime),
            endDateTime: this.formatDateForInput(offer.endDateTime),
            usageLimit: offer.usageLimit
        });
    }

    openDeleteModal(id: number) {
        this.offerToDeleteId = id;
        this.isDeleteModalOpen = true;
    }

    closeDeleteModal() {
        this.isDeleteModalOpen = false;
        this.offerToDeleteId = null;
    }

    confirmDelete() {
        if (this.offerToDeleteId) {
            this.offersData = this.offersData.filter(offer => offer.id !== this.offerToDeleteId);
            this.closeDeleteModal();
            console.log('Offer Deleted:', this.offerToDeleteId);
        }
    }

    // Helper to attempt parsing the dummy display date to 'YYYY-MM-DDTHH:mm'
    formatDateForInput(dateStr: string): string {
        try {
            // dateStr format: "2024-02-21 09:00 AM"
            const [datePart, timePart, meridian] = dateStr.split(' ');
            let [hours, minutes] = timePart.split(':');

            if (meridian === 'PM' && hours !== '12') {
                hours = String(parseInt(hours) + 12);
            } else if (meridian === 'AM' && hours === '12') {
                hours = '00';
            }

            return `${datePart}T${hours}:${minutes}`;
        } catch (e) {
            return '';
        }
    }

    closeOfferModal() {
        this.isOfferModalOpen = false;
        this.showOfferTypeDropdown = false;
    }

    toggleProductDropdown() {
        this.showProductDropdown = !this.showProductDropdown;
    }

    toggleOfferTypeDropdown() {
        this.showOfferTypeDropdown = !this.showOfferTypeDropdown;
    }

    selectProduct(name: string) {
        this.pricingForm.patchValue({ productName: name });
        this.showProductDropdown = false;
    }

    selectOfferType(type: string) {
        this.offerForm.patchValue({ offerType: type });
        this.showOfferTypeDropdown = false;
    }

    onSubmit() {
        if (this.pricingForm.valid) {
            console.log('Form Submitted', this.pricingForm.value);
            // Here you would typically call a service to update the data
            this.closeUpdateModal();
        }
    }

    onSubmitOffer() {
        if (this.offerForm.valid) {
            console.log(this.isEditMode ? 'Offer Updated' : 'Offer Created', this.offerForm.value);
            this.closeOfferModal();
        }
    }

    generateDummyData() {
        const products = [
            'Fresh Alphonso Mango', 'Organic Bananas', 'Shimla Apples', 'Green Grapes', 'Pomegranate',
            'Watermelon', 'Papaya', 'Pineapple', 'Guava', 'Kiwi Fruit',
            'Avocado', 'Blueberry', 'Raspberry', 'Cherry', 'Peach',
            'Pear', 'Plum', 'Lychee', 'Muskmelon', 'Coconut',
            'Sitaphal', 'Jackfruit', 'Dragon Fruit', 'Nagpur Orange', 'Strawberry'
        ];

        this.pricingData = products.map((name, index) => {
            const basePrice = Math.floor(Math.random() * 500) + 50;
            const discount = Math.floor(Math.random() * 20);
            const sellingPrice = Math.round(basePrice * (1 - discount / 100));
            const oldPrice = Math.round(basePrice * 1.1); // slightly higher
            const change = parseFloat((Math.random() * 20 - 10).toFixed(2));
            const isNegative = change < 0;

            return {
                id: index + 1,
                productName: name,
                variant: index % 2 === 0 ? '1 kg' : '500g',
                oldPrice: oldPrice,
                basePrice: basePrice,
                sellingPrice: sellingPrice,
                discount: parseFloat(discount.toFixed(2)),
                gst: (index % 3 === 0 ? 0 : 5) + '%',
                effectiveFrom: `2024-02-${String((index % 28) + 1).padStart(2, '0')}`,
                change: change,
                dateTime: `2024-02-${String((index % 28) + 1).padStart(2, '0')} ${String(9 + (index % 8)).padStart(2, '0')}:00 AM`
            };
        });
    }

    generateDummyOffers() {
        const offerTypes = ['Product', 'Category', 'Cart'];
        const statuses = ['Upcoming', 'Active', 'Expired'];
        const offerNames = [
            'Summer Sale', 'Welcome Bonus', 'Weekend Blast', 'Fruit Fiesta', 'Bulk Buy Deal',
            'Flash Sale', 'Midnight Madness', 'Loyalty Reward', 'New User Special', 'Clearance'
        ];

        this.offersData = offerNames.map((name, index) => {
            const type = offerTypes[index % 3] as 'Product' | 'Category' | 'Cart';
            const status = statuses[index % 3] as 'Active' | 'Upcoming' | 'Expired';
            const discountType = index % 2 === 0 ? '%' : '₹';
            const discountValue = discountType === '%' ? (index + 1) * 5 : (index + 1) * 50;

            return {
                id: index + 1,
                offerName: name,
                offerType: type,
                discount: `${discountValue}${discountType}`,
                applicableTo: type === 'Cart' ? 'All Items' : (type === 'Category' ? 'Fruits' : 'Specific Products'),
                minOrderValue: `₹${(index + 1) * 200}`,
                startDateTime: `2024-02-${String((index % 20) + 1).padStart(2, '0')} 09:00 AM`,
                endDateTime: `2024-03-${String((index % 20) + 1).padStart(2, '0')} 11:59 PM`,
                usageLimit: (index + 1) * 100,
                status: status
            };
        });

        // Sort by status priority: Upcoming > Active > Expired
        const statusPriority = { 'Upcoming': 0, 'Active': 1, 'Expired': 2 };
        this.offersData.sort((a, b) => statusPriority[a.status] - statusPriority[b.status]);
    }

    ngOnInit(): void {
        console.log('PricingManagementComponent initialized');
    }

    getChangeColor(change: number): string {
        return change < 0 ? '#10b981' : '#ef4444'; // Green for price drop (good), Red for price hike
    }

    getChangeIcon(change: number): string {
        return change < 0 ? 'bx-trending-down' : 'bx-trending-up';
    }
}

export interface OfferItem {
    id: number;
    offerName: string;
    offerType: 'Product' | 'Category' | 'Cart';
    discount: string;
    applicableTo: string;
    minOrderValue: string;
    startDateTime: string;
    endDateTime: string;
    usageLimit: number;
    status: 'Active' | 'Upcoming' | 'Expired';
}
