import { Component, Input } from '@angular/core';
import { PlayerStat } from '../../../core/Models/PlayerStat/player-stat';
import { MatchService } from '../../../Service/Match/match.service';
import { Game } from '../../../core/Models/Game/game.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: '../player.component.css'
})
export class StatsComponent {
  @Input() stats!:PlayerStat[];
  @Input() clubId!:string|null;
  @Input() clubName!:string;
  sta:PlayerStat | any=null;
  game:Game|any=null;
  constructor(private GameService:MatchService,private datePipe:DatePipe){}
  ngOnInit(){
    console.log('ana hna');
    
    this.sta=this.stats[0]
    console.log(this.stats);

    this.GameService.getUpcoming(this.clubId).subscribe({
      next:(value:Game)=>{
        this.game=value;
        this.game.date=this.datePipe.transform(new Date(value.date),"dd/MM/yy, HH:mm");
      }
    })
    
  }
 
}
