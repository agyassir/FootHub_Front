import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CardComponent } from "../../../shared/components/card/card.component"
import { Club } from "../../../../../core/Models/Club/club.model";
import { ClubService } from "../../../../../Service/Club/club.service";
import { ActivatedRoute } from "@angular/router";
import { LeagueService } from "../../../../../Service/League/league.service";
import { LeagueStanding } from "../../../../../core/Models/LeagueStanding/league-standing";

@Component({
  selector: "app-table-tab",
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div class="container mx-auto p-4">
      <app-card class="border-green-100" [title]="'League Table'" [icon]="'list'">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-green-100 text-left text-sm text-green-600">
                <th class="pb-2 pl-2 pr-4">#</th>
                <th class="pb-2 px-4">Team</th>
                <th class="pb-2 px-4">MP</th>
                <th class="pb-2 px-4">W</th>
                <th class="pb-2 px-4">D</th>
                <th class="pb-2 px-4">L</th>
                <th class="pb-2 px-4">PTS</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let team of table" 
                  [class]="'border-b border-green-100 ' + (team.team === club.name ? 'bg-green-50' : '')">
                <td class="py-3 pl-2 pr-4 font-medium text-green-800">{{ team.standing }}</td>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-2">
                    <div [class]="'flex h-6 w-6 items-center justify-center rounded-full bg-white text-green-800 border border-green-200'">
                      <img [src]="team.clubImage">
                    </div>
                    <span [class]="'font-medium ' + (team.clubName === club.name ? 'text-green-800' : 'text-green-700')">
                      {{ team.clubName }}
                    </span>
                  </div>
                </td>
                <td class="py-3 px-4 text-green-700">{{ team.match_played }}</td>
                <td class="py-3 px-4 text-green-700">{{ team.win }}</td>
                <td class="py-3 px-4 text-green-700">{{ team.draw }}</td>
                <td class="py-3 px-4 text-green-700">{{ team.loss }}</td>
                <td class="py-3 px-4 font-medium text-green-800">{{ team.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </app-card>
    </div>
  `,
  styles: [],
})
export class TableTabComponent {
club:Club|any=null;
table:LeagueStanding[]| any=null;
constructor(public clubDataService: ClubService,public router:ActivatedRoute,public tableService:LeagueService) {}
  
  ngOnInit(){
    this.clubDataService.getClubById(this.router.snapshot.paramMap.get('id')).subscribe({
      next:(club:Club)=>{
        this.club=club;
        console.log(this.club.leagueId);
        
        this.tableService.getLeagueStanding(this.club.leagueId).subscribe({
          next:(value:LeagueStanding[])=>{
            this.table = value.sort((a, b) => a.standing - b.standing);
            console.log(this.table);
            
          }
        })
      }
    })

    // console.log(this.club);
    

    
  }
  calculateWins(team: any): number {
    return Math.round(team.points / 3)
  }

  calculateDraws(team: any): number {
    return Math.round((team.points % 3) * 2)
  }

  calculateLosses(team: any): number {
    return team.played - this.calculateWins(team) - this.calculateDraws(team)
  }
}

