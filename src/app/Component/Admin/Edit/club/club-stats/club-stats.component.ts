import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-club-stats',
  imports: [CommonModule,FormsModule],
  templateUrl: './club-stats.component.html',
  styleUrl: './club-stats.component.css'
})
export class ClubStatsComponent {
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

  constructor(){}

  resultOptions = ['W', 'D', 'L'];
}
