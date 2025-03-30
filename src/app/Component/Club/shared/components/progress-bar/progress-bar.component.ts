import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-progress-bar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-2 w-full overflow-hidden rounded-full bg-green-100">
      <div 
        [class]="color" 
        [style.width.%]="value"
        
      ></div>
    </div>
  `,
  styles: [],
})
export class ProgressBarComponent {
  @Input() value = 0
  @Input() color?: string

  ngOnInit(){
    console.log(this.color);
    
  }
  
}

