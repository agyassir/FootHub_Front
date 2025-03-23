import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchService } from '../../Service/Match/match.service';
import { Game } from '../../core/Models/Game/game.model';
import { GameComponent } from "../game/game.component";
import { ClubService } from '../../Service/Club/club.service';
import { Club } from '../../core/Models/Club/club.model';

interface Team {
  img: string;
  name: string;
}

interface Player {
  img: string;
  name: string;
  score: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  TodayGames:Game[] | any =null;
  teams:Club[] | any=null;
  constructor(private gameService : MatchService , private clubService: ClubService){}
ngOnInit(): void {
  this.gameService.getTodaysGame().subscribe({
    next:(games:Game[])=>{
      console.log(games);
      this.TodayGames=games;
    },
    error:(error)=>{
      console.error(error);
      
    }

  })

  this.clubService.getHotClubs().subscribe({
    next:(clubs: Club[])=>{
      this.teams=clubs;
      console.log(clubs);
    }
  })
  

  console.log(this.TodayGames);

}



 

}