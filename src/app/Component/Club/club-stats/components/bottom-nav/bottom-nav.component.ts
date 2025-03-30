import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-bottom-nav",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-0 left-0 right-0 border-t border-green-100 bg-white">
      <div class="flex items-center justify-around">
        <button class="flex flex-1 flex-col items-center justify-center rounded-none py-3 text-green-600 hover:bg-green-50 hover:text-green-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span class="mt-1 text-xs">Home</span>
        </button>
        <button class="flex flex-1 flex-col items-center justify-center rounded-none py-3 text-green-600 hover:bg-green-50 hover:text-green-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <line x1="8" x2="21" y1="6" y2="6"></line>
            <line x1="8" x2="21" y1="12" y2="12"></line>
            <line x1="8" x2="21" y1="18" y2="18"></line>
            <line x1="3" x2="3.01" y1="6" y2="6"></line>
            <line x1="3" x2="3.01" y1="12" y2="12"></line>
            <line x1="3" x2="3.01" y1="18" y2="18"></line>
          </svg>
          <span class="mt-1 text-xs">Matches</span>
        </button>
        <button class="flex flex-1 flex-col items-center justify-center rounded-none py-3 text-green-800 hover:bg-green-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
          </svg>
          <span class="mt-1 text-xs">Teams</span>
        </button>
        <button class="flex flex-1 flex-col items-center justify-center rounded-none py-3 text-green-600 hover:bg-green-50 hover:text-green-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span class="mt-1 text-xs">Favorites</span>
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class BottomNavComponent {}

