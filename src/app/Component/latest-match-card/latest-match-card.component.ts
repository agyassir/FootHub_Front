
import { Component } from '@angular/core';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { MatchCardComponent } from '../match-card/match-card.component';
import { MatchService } from '../../Service/Match/match.service';
import { Game } from '../../core/Models/Game/game.model';
import { initFlowbite } from 'flowbite';
import { LeagueService } from '../../Service/League/league.service';
import { League } from '../../core/Models/League/league.model';
import { FormsModule } from '@angular/forms';

interface Team {
  img: string;
  name: string;
}

interface Match {
  team1: Team;
  team2: Team;
  time: string;
  location: string;
  status: string;
}

@Component({
  selector: 'app-latest-matches',
  standalone: true,
  imports: [CommonModule, MatchCardComponent,FormsModule],
  templateUrl: './latest-match-card.component.html',
})
export class LatestMatchesComponent {

  matches: Game[] | any = null;
  filteredGame:Game[] |any=null;
  display: Game[] |any=null;
  leagues: League[] | any = null;
  selectedDate: string | null = null;
  selectedLeague: string = '';

  constructor(private matchService: MatchService, private leagueService: LeagueService, private datePipe: DatePipe) { }


  ngOnInit() {
    this.matchService.getTodaysGame().subscribe({
      next: (value: Game[]) => {
        this.matches = value;
        for (let i = 0; i < value.length; i++) {
          this.matches[i].date = this.datePipe.transform(
            new Date(value[i].date),
            'dd/MM/yy, HH:mm'
          )!;
        }
        this.display=this.matches;
      },
    })

    this.leagueService.getLeagues().subscribe({
      next: (leagues: League[]) => {
        this.leagues = leagues;
      }
    })

    initFlowbite();
  }



  onDateChange(event: any): void {
    console.log("ana hna")  
    this.selectedDate = event.target.value;
    console.log(this.selectedDate);
     // Capture selected date
    if (this.selectedDate) {
      const isoDate = formatDate(this.selectedDate, 'yyyy-MM-dd', 'en-US');
      this.fetchGamesByDate(isoDate);
    }
  }

  fetchGamesByDate(date: string): void {
    this.matchService.getGamesByDate(date).subscribe({
      next: (data: Game[]) => {
        console.log(data);
        this.matches = data;
        for (let i = 0; i < data.length; i++) {
          this.matches[i].date = this.datePipe.transform(
            new Date(data[i].date),
            'dd/MM/yy, HH:mm'
          )!;
        } 
        this.display=this.matches
        this.onFiltered();// Store response in games variable
      },
      error: (err) => {
        console.error('Error fetching games:', err);
      }
    });
  }

  onFiltered(){
    
    if (this.selectedLeague) {
      console.log(this.matches[0].league.name==this.selectedLeague);
      this.filteredGame = this.matches.filter((match:Game) => match.league.name == this.selectedLeague);
      this.display=this.filteredGame;
     
    } else {
      this.filteredGame = this.matches; // Reset filter when no league is selected
    }
  }


}