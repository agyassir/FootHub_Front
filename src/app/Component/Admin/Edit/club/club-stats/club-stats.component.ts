import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeagueStaningService } from '../../../../../Service/LeagueStanding/league-staning.service';
import { LeagueService } from '../../../../../Service/League/league.service';
import { ActivatedRoute } from '@angular/router';
import { LeagueStanding } from '../../../../../core/Models/LeagueStanding/league-standing';
import { LeagueSeason } from '../../../../../core/Models/LeagueSeason/league-season';
import { League } from '../../../../../core/Models/League/league.model';

@Component({
  selector: 'app-club-stats',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './club-stats.component.html',
  styleUrl: './club-stats.component.css'
})
export class ClubStatsComponent {
  stats: LeagueStanding[] | any = null;
  leagues: League[] | any = null;
  season: LeagueSeason | any = null;
  originalStats: LeagueStanding[] | any = null;
  statsForm: FormGroup; // To store original stats for cancellation

  constructor(
    private fb: FormBuilder,
    private leagueService: LeagueService,
    private leagueStanding: LeagueStaningService,
    private route: ActivatedRoute
  ) {
    this.statsForm = this.fb.group({
      id:[0],
      standing: [1, [Validators.required, Validators.min(1)]],
      points: [0, [Validators.required, Validators.min(0)]],
      match_played: [0, [Validators.required, Validators.min(0)]],
      win: [0, [Validators.required, Validators.min(0)]],
      draw: [0, [Validators.required, Validators.min(0)]],
      loss: [0, [Validators.required, Validators.min(0)]],
      goalsFor: [0, [Validators.required, Validators.min(0)]],
      goalsAgainst: [0, [Validators.required, Validators.min(0)]],
      cleanSheets: [0, [Validators.required, Validators.min(0)]],
      clubId:[this.route.snapshot.paramMap.get("id")]
    });
  }

  ngOnInit() {
    this.loadData();
  }

  
  loadData() {
    const clubId = this.route.snapshot.paramMap.get("id");
    
    // Load stats data
    this.leagueStanding.getStandingByClub(clubId).subscribe(stats => {
      this.stats = stats;
      if (stats && stats.length > 0) {
        this.statsForm.patchValue({
          id:stats[0].id,
          standing: stats[0].standing,
          points: stats[0].points,
          match_played: stats[0].match_played,
          win: stats[0].win,
          draw: stats[0].draw,
          loss: stats[0].loss,
          // Add other fields as needed
        });
      }
    });

    // Load leagues
    this.leagueService.getLeagues().subscribe(leagues => {
      this.leagues = leagues;
    });
  }

  loadLeagues() {
    this.leagueService.getLeagues().subscribe({
      next: (value: League[]) => {
        this.leagues = value;
      }
    });
  }


  addStats() {
  
    this.originalStats = this.stats ? [...this.stats] : null;
  
    const newStat: LeagueStanding = {
      id:0,
      league: null,
      points: 0,
      match_played: 0,
      leagueSeason: {
        season: "24-25",
        league: ""
      },
      standing: 1,
      win: 0,
      draw: 0,
      loss: 0,
    };


    if (!this.stats) {
      this.stats = [newStat];
    } else {
      this.stats.push(newStat);
    }
  }

  saveStats() {

    const formData = this.statsForm.value;
    const clubId = this.route.snapshot.paramMap.get("id");
console.log(this.statsForm.value);

if(this.statsForm.value.id!==0){
  this.leagueStanding.updateStanding(this.statsForm.value.id, formData).subscribe({
        next: (updatedStats) => {
          console.log(updatedStats);
          
        },
        error: (err) => {
          // Handle error
        }
      });
}else{
  this.leagueStanding.createStanding(formData).subscribe({
    next: (updatedStats) => {
      console.log(updatedStats);
      
    },
    error: (err) => {
      // Handle error
    }
  });
}

    
    // if (this.stats && this.stats.length > 0) {
    //   // Update existing stats
    //   this.leagueStanding.updateStanding(this.stats[0].id, formData).subscribe({
    //     next: (updatedStats) => {
    //       // Handle success
    //     },
    //     error: (err) => {
    //       // Handle error
    //     }
    //   });
    // } else {
    //   // Create new stats (if needed)
    //   this.leagueStanding.createStanding(clubId, formData).subscribe({
    //     next: (newStats) => {
    //       // Handle success
    //     },
    //     error: (err) => {
    //       // Handle error
    //     }
    //   });
    // }
  }
}