import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from './services/sidebar.service';
import { fromEvent, Subject, merge } from 'rxjs';
import { takeUntil, debounceTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('admin-panel');
  isOpen = false;
  isMobile = false;
  
  private destroy$ = new Subject<void>();

  constructor(
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.sidebarService.isOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isOpen => {
        this.isOpen = isOpen;
      });

    // Listen to window resize using RxJS — no CDK dependency needed
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(100),
        startWith(null),           // emit immediately on init
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        const wasMobile = this.isMobile;
        this.isMobile = window.innerWidth <= 992;

        // Auto-close sidebar when switching to mobile
        if (this.isMobile && !wasMobile && this.isOpen) {
          this.sidebarService.close();
        }
        // Re-open sidebar when returning to desktop
        if (!this.isMobile && wasMobile && !this.isOpen) {
          this.sidebarService.open();
        }
      });
  }

  closeSidebar() {
    // Only allow clicking overlay to close sidebar on mobile
    if (this.isMobile) {
      this.sidebarService.close();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
