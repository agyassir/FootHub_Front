import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Match {
  opponent: string;
  date: string;
  time: string;
  location: 'home' | 'away';
  competition: string;
  stadium: string;
}

@Component({
  selector: 'app-upcoming-matches',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent {
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

  competitionOptions = ['Premier League', 'FA Cup', 'League Cup', 'Champions League', 'Friendly'];

  addMatch() {
    this.upcomingMatches.unshift({
      opponent: '',
      date: new Date().toISOString().split('T')[0],
      time: '15:00',
      location: 'home',
      competition: 'Premier League',
      stadium: ''
    });
  }

  deleteMatch(index: number) {
    this.upcomingMatches.splice(index, 1);
  }
}