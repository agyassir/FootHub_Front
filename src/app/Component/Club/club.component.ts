import { Component } from '@angular/core';
import { ClubStatsComponent } from './club-stats/club-stats.component';

@Component({
  selector: 'app-club',
  standalone:true,
  imports: [ClubStatsComponent],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent {

}
