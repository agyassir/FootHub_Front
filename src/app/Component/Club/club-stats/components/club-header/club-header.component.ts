import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ClubService } from "../../../../../Service/Club/club.service"
import { Club } from "../../../../../core/Models/Club/club.model"
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-club-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club-header.component.html',
  styles: [],
})
export class ClubHeaderComponent {
  club:Club | any=null;

  constructor(public clubDataService: ClubService,private route: ActivatedRoute) {}

  ngOnInit(){
    this.clubDataService.getClubById(this.route.snapshot.paramMap.get('id')).subscribe({
    next:(club:Club)=>{
      console.log(club.leagueStandings[0].points);
      
      this.club=club;
    },
    error:(err)=> {
        console.error(err);
        
    }, 
    })
  }
}

