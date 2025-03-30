import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-badge",
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="getBadgeClasses()">
      {{ text }}
    </span>
  `,
  styles: [],
})
export class BadgeComponent {
  @Input() text = ""
  @Input() variant: "filled" | "outline" | "success" | "draw" | "loss" = "filled"

  getBadgeClasses(): string {
    const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"

    switch (this.variant) {
      case "filled":
        return `${baseClasses} bg-green-600 text-white`
      case "outline":
        return `${baseClasses} border-green-200 bg-green-50 text-green-700 border`
      case "success":
        return `${baseClasses} bg-green-600 text-white`
      case "draw":
        return `${baseClasses} bg-green-300 text-green-800`
      case "loss":
        return `${baseClasses} bg-white text-green-800 border border-green-600`
      default:
        return `${baseClasses} bg-green-600 text-white`
    }
  }
}

