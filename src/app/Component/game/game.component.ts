import { Component } from '@angular/core';
import { MatchService } from '../../Service/Match/match.service';
import { Game } from '../../core/Models/Game/game.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  hotGames:Game[] | any=null;
  constructor(private gameService:MatchService ){}

  ngOnInit(){
  this.gameService.getHotGames().subscribe({
    next:(games:Game[])=>{
      this.hotGames=games;
    },
    error:(err)=>{
      console.error(err);
      
    }
  })
console.log(this.hotGames);
}



}