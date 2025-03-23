import { Component } from '@angular/core';
import { PlayerService } from '../../Service/Player/player.service';
import { Player } from '../../core/Models/Player/player.model';

@Component({
  selector: 'app-trending-section',
  imports: [],
  templateUrl: './trending-section.component.html',
  styleUrl: './trending-section.component.css'
})
export class TrendingSectionComponent {

  trending:Player | any=null;

  constructor(private playerService:PlayerService){}

  ngOnInit(){
      this.playerService.getTrending().subscribe({
        next:(player:Player)=>{
          this.trending=player;
          console.log(this.trending.FirstName);
          
        },
        error:(error:Error)=>{
          console.error(error);
        }
      })
  }

}
