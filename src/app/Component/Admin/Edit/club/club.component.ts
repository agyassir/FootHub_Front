import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { ClubInfoComponent } from "./club-info/club-info.component";
import { ClubStatsComponent } from './club-stats/club-stats.component';
import { ClubStadiumComponent } from "./club-stadium/club-stadium.component";
import { UpcomingMatchesComponent } from "./upcoming-matches/upcoming-matches.component";

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
  
    clubInfo = {
      name: 'Green City FC',
      founded: 1985,
      stadium: 'Green Valley Stadium',
      capacity: 45000,
      manager: 'Roberto Silva',
      league: 'Premier League',
      description: 'Green City FC is a professional football club based in Green City. Founded in 1985, the club has a rich history of success in domestic competitions. The team plays its home matches at the Green Valley Stadium.',
      colors: {
        primary: '#15803d',
        secondary: '#ffffff',
        accent: '#dcfce7'
      },
      social: {
        twitter: '@greencityfc',
        facebook: 'greencityfc',
        instagram: 'greencityfc'
      }
    };
  
    // Team Stats
    teamStats = {
      position: 4,
      points: 56,
      matches: 28,
      wins: 16,
      draws: 8,
      losses: 4,
      goalsFor: 48,
      goalsAgainst: 22,
      cleanSheets: 12,
      form: ['W', 'W', 'D', 'L', 'W']
    };
  
    // Stadium Info
    stadiumInfo = {
      address: '123 Green Valley Road, Green City, GC1 2AB',
      dimensions: '105m x 68m',
      yearBuilt: 1990,
      surfaceType: 'Natural Grass',
      facilities: ['Parking', 'Food Concessions', 'Club Shop', 'Club Museum', 'Free WiFi'],
      description: 'Green Valley Stadium is the home of Green City FC. Built in 1990, it has a capacity of 45,000 and is known for its excellent facilities and vibrant atmosphere on match days. The stadium has undergone several renovations, with the most recent completed in 2020.'
    };
  
    // Upcoming Matches
    upcomingMatches: Match[] = [
      {
        opponent: 'Eastern United',
        date: '2025-03-25',
        time: '15:00',
        location: 'away',
        competition: 'Premier League',
        stadium: 'Eastern United Stadium'
      },
      {
        opponent: 'Western Wanderers',
        date: '2025-04-01',
        time: '20:00',
        location: 'home',
        competition: 'Premier League',
        stadium: 'Green Valley Stadium'
      },
      {
        opponent: 'Southern Stars',
        date: '2025-04-08',
        time: '17:30',
        location: 'away',
        competition: 'Premier League',
        stadium: 'Southern Stars Arena'
      }
    ];
  
    competitionOptions = [
      'Premier League',
      'FA Cup',
      'League Cup',
      'Champions League',
      'Friendly'
    ];

    toggleFacility(facility: string, event: Event) {
      const isChecked = (event.target as HTMLInputElement).checked;
      if (isChecked && !this.stadiumInfo.facilities.includes(facility)) {
        this.stadiumInfo.facilities.push(facility);
      } else if (!isChecked) {
        this.stadiumInfo.facilities = this.stadiumInfo.facilities.filter(f => f !== facility);
      }
    }

    ngOnInit(){
      initFlowbite();
    }
  
    onSave() {
      // Implement save logic
      console.log('Saving changes...');
    }
  
    onCancel() {
      // Implement cancel logic
      console.log('Cancelling changes...');
    }
  
    addMatch() {
      // Implement add match logic
      console.log('Adding new match...');
    }
  
    deleteMatch(index: number) {
      this.upcomingMatches.splice(index, 1);
    }
  
    handleImageUpload(event: Event) {
      // Implement image upload logic
      console.log('Uploading image...');
    }
}
