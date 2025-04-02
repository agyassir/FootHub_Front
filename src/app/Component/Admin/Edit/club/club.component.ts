import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { ClubInfoComponent } from "./club-info/club-info.component";
import { ClubStatsComponent } from './club-stats/club-stats.component';
import { ClubStadiumComponent } from "./club-stadium/club-stadium.component";
import { UpcomingMatchesComponent } from "./upcoming-matches/upcoming-matches.component";
import { Route, Router } from '@angular/router';

interface Match {
  opponent: string;
  date: string;
  time: string;
  location: 'home' | 'away';
  competition: string;
  stadium: string;
}

@Component({
  selector: 'app-club-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ClubInfoComponent, ClubStatsComponent, ClubStadiumComponent, UpcomingMatchesComponent],
  templateUrl: './club-edit.component.html',
  styleUrls: ['./club-edit.component.css']
})
export class EClubComponent {
  activeTab: 'info' | 'stats' | 'stadium' | 'matches' = 'info';
  
  
constructor(private router:Router){}

    ngOnInit(){
      initFlowbite();
    }
  
   
    navigate(){
      this.router.navigate(['/dashboard/clubs']);
    }
  

}
