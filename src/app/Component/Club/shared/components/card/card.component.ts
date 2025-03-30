import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'rounded-lg border ' + (additionalClasses || '')">
      <div *ngIf="title" class="flex items-center justify-between p-4 pb-2">
        <div class="flex items-center gap-2 text-lg text-green-800">
          <svg *ngIf="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-green-600">
            <ng-container [ngSwitch]="icon">
              <ng-container *ngSwitchCase="'info'">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </ng-container>
              <ng-container *ngSwitchCase="'chart'">
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </ng-container>
              <ng-container *ngSwitchCase="'star'">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </ng-container>
              <ng-container *ngSwitchCase="'calendar'">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </ng-container>
              <ng-container *ngSwitchCase="'users'">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </ng-container>
              <ng-container *ngSwitchCase="'list'">
                <line x1="8" x2="21" y1="6" y2="6"></line>
                <line x1="8" x2="21" y1="12" y2="12"></line>
                <line x1="8" x2="21" y1="18" y2="18"></line>
                <line x1="3" x2="3.01" y1="6" y2="6"></line>
                <line x1="3" x2="3.01" y1="12" y2="12"></line>
                <line x1="3" x2="3.01" y1="18" y2="18"></line>
              </ng-container>
            </ng-container>
          </svg>
          {{ title }}
        </div>
        <button *ngIf="showViewAll" class="h-8 text-green-600 hover:text-green-800 flex items-center">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
      <div [class]="noPadding ? '' : 'p-4'">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [],
})
export class CardComponent {
  @Input() title?: string
  @Input() icon?: "info" | "chart" | "star" | "calendar" | "users" | "list"
  @Input() showViewAll?: boolean
  @Input() noPadding?: boolean
  @Input() additionalClasses?: string
}

