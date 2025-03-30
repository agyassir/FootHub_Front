import { Component } from "@angular/core"
import { CommonModule, DatePipe } from "@angular/common"
import { CardComponent } from "../../../shared/components/card/card.component"
import { BadgeComponent } from "../../../shared/components/badge/badge.component"
import { ClubService } from "../../../../../Service/Club/club.service"
import { Club } from "../../../../../core/Models/Club/club.model"
import { ActivatedRoute } from "@angular/router"
import { Game } from "../../../../../core/Models/Game/game.model"
import { MatchService } from "../../../../../Service/Match/match.service"

@Component({
  selector: "app-matches-tab",
  standalone: true,
  imports: [CommonModule, CardComponent, BadgeComponent],
  templateUrl:'./matches-tab.component.html',
  styles: [],
})
export class MatchesTabComponent {
  games:Game[]|any=null;
  club:Club|any=null;
  recentMatches:Game[] | any=null;
  upcomingMatches:Game[] | any=null;
constructor(public clubDataService: MatchService,private datePipe: DatePipe,public clubService:ClubService,public router:ActivatedRoute) {}
  
  ngOnInit(){
    this.clubDataService.getMatchesByTeam(this.router.snapshot.paramMap.get('id')).subscribe({
      next: (games: Game[]) => {
        this.games = games;
        this.separateMatchesByDate(games);
      },
      error:(err)=>console.error(err)
      
    })

    this.clubService.getClubById(this.router.snapshot.paramMap.get('id')).subscribe({
      next:(club: Club)=>{
        this.club=club;
      }
    })
  }

  getOpponentName(match: any): string {
    return match.homeClubName === this.club.name 
      ? match.homeClubName 
      : match.awayClubName;
  }

  getMatchResult(match: any, clubName: string): string {
    // Determine if the club was home or away
    const isHome = match.homeClubName === clubName;
    
    if (match.homeScore === match.awayScore) {
      return 'D'; // Draw
    }
    
    if ((isHome && match.homeScore > match.awayScore) || 
        (!isHome && match.awayScore > match.homeScore)) {
      return 'W'; // Win
    }
    
    return 'L'; // Loss
  }

  private separateMatchesByDate(games: Game[]) {
    const now = new Date(); // Current date/time
    
    this.recentMatches = games
      .filter(game => new Date(game.date) < now)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      this.recentMatches.map((g:Game|any)=>g.date=this.datePipe.transform(new Date(g.date),'dd/MM/yy, HH:mm'));
      console.log(this.recentMatches[0].date);
      
      
    this.upcomingMatches = games
      .filter(game => new Date(game.date) >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      
      this.upcomingMatches.map((g:Game|any)=>g.date=this.datePipe.transform(new Date(g.date),'dd/MM/yy, HH:mm'));
      // Soonest first
  }
}

