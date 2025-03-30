import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-avatar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="size + ' border border-green-200 rounded-full overflow-hidden flex items-center justify-center'">
      <img *ngIf="imageUrl" [src]="imageUrl" [alt]="name" class="h-full w-full object-cover" />
      <div *ngIf="!imageUrl" class="h-full w-full flex items-center justify-center bg-green-100 text-green-800 font-medium">
        {{ initials }}
      </div>
    </div>
  `,
  styles: [],
})
export class AvatarComponent {
  @Input() name = ""
  @Input() initials = ""
  @Input() imageUrl?: string
  @Input() size = "h-10 w-10"
}

