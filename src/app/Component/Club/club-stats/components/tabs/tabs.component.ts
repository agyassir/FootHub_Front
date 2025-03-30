import { Component, EventEmitter, Input, Output } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-tabs",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border-b border-green-100">
      <div class="h-14 w-full flex justify-start gap-2 bg-white px-4">
        <button 
          *ngFor="let tab of tabs" 
          [class]="'h-full px-4 text-sm font-medium rounded-none border-b-2 ' + 
            (activeTab === tab.value ? 'border-green-600 text-green-800' : 'border-transparent text-green-600 hover:text-green-700')"
          (click)="onTabClick(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class TabsComponent {
  @Input() activeTab = 'matches';
  @Output() tabChange = new EventEmitter<string>()

  tabs = [
    { label: "Matches", value: "matches" },
    { label: "Squad", value: "squad" },
    { label: "Table", value: "table" },
    { label: "Overview", value: "overview" },
  ]

  onTabClick(tab: string) {
    this.tabChange.emit(tab)
  }
}

