import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-10 bg-green-800 text-white shadow-md">
      <div class="container mx-auto flex items-center justify-between p-4">
        <div class="flex items-center gap-2">
          <button (click)="navigateHome()" class="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
          <h1 class="text-xl font-bold">Club Profile</h1>
        </div>
        <button class="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-green-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  navigateHome() {
    this.router.navigate(['/']);
  }
}

