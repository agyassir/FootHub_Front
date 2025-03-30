import { Component } from "@angular/core"
import { CommonModule, DatePipe } from "@angular/common"
import { CardComponent } from "../../../shared/components/card/card.component"
import { ProgressBarComponent } from "../../../shared/components/progress-bar/progress-bar.component"
import { AvatarComponent } from "../../../shared/components/avatar/avatar.component"
import { BadgeComponent } from "../../../shared/components/badge/badge.component"
import { ClubService } from "../../../../../Service/Club/club.service"
import { Club } from "../../../../../core/Models/Club/club.model"
import { ActivatedRoute } from "@angular/router"
import { LeagueStanding } from "../../../../../core/Models/LeagueStanding/league-standing"
import { MatchService } from "../../../../../Service/Match/match.service"
import { Game } from "../../../../../core/Models/Game/game.model"

@Component({
  selector: "app-overview-tab",
  standalone: true,
  imports: [CommonModule, CardComponent, ProgressBarComponent, AvatarComponent, BadgeComponent],
  templateUrl: "./overview-tab.component.html",
  styles: [],
})
export class OverviewTabComponent {

  club:Club | any;
  Stats:LeagueStanding |any=null;
  upcoming:Game |any=null;
  founded:Date |any=null;

  constructor(public clubDataService: ClubService,private datePipe: DatePipe,public Gameservice:MatchService,public router:ActivatedRoute) {}
  
  ngOnInit(){

   

    this.clubDataService.getClubById(this.router.snapshot.paramMap.get('id')).subscribe({
      next:(club:Club)=>{
        this.club=club;
        this.Stats=club.leagueStandings[0];
        this.founded=this.datePipe.transform(
          new Date(club.dateOfEstablishement),
          'dd/MM/yy'
        )!;
      }
    })

    // console.log(this.Gameservice.getUpcoming(27));
    

    this.Gameservice.getUpcoming(this.router.snapshot.paramMap.get('id')).subscribe({
      next:(game:Game)=>{
          this.upcoming=game;
          this.upcoming.date = this.datePipe.transform(
            new Date(game.date),
            'dd/MM/yy, HH:mm'
          )!;

          this.upcoming.hour = this.datePipe.transform(
            new Date(game.date),
            'HH:mm'
          )!;
          console.log(this.upcoming.hour);
          
      }
    })

   
  }

  getWinPercentage(): number {
    const { win, match_played } = this.Stats
    return Math.round((win / match_played) * 100)
  }

  getDrawPercentage(): number {
    const { draw, match_played } = this.Stats
    return Math.round((draw / match_played) * 100)
  }

  getLossPercentage(): number {
    const { loss, match_played } = this.Stats
    return Math.round((loss / match_played) * 100)
  }

  getGoalsPerMatch(): string {
    const { goalsFor, match_played } = this.Stats
    return (goalsFor / match_played).toFixed(1)
  }

  getGoalsAgainstPerMatch(): string {
    const { goalsAgainst, match_played } = this.Stats
    return (goalsAgainst / match_played).toFixed(1)
  }

  getInitials(name: string): string {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }
}

