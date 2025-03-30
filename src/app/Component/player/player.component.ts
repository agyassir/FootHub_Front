// player-profile.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../Service/Player/player.service';
import { Player } from '../../core/Models/Player/player.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsComponent } from "./stats/stats.component";
import { CareerComponent } from "./career/career.component";

interface PlayerStats {
  appearances: number;
  minutes: number;
  goals: number;
  assists: number;
  shots: number;
  shotAccuracy: number;
}

interface MatchResult {
  goals: number;
  opponent: string;
  isHome: boolean;
  date: string;
  minutesPlayed: number;
  result: string;
  type: 'win' | 'draw' | 'loss';
}

interface PlayerAttribute {
  name: string;
  value: number;
}

interface CareerHistory {
  club: string;
  period: string;
  description: string;
  leagues: string[];
}

interface SimilarPlayer {
  name: string;
  position: string;
  club: string;
  image: string;
  goals: number;
  assists: number;
  rating: number;
}

@Component({
  selector: 'app-player-profile',
  standalone: true,
  imports: [CommonModule, StatsComponent, CareerComponent],
  templateUrl:"./player.component.html" ,
  styleUrls:["./player.component.css"]
})
export class PlayerProfileComponent {
 
player:Player | any=null; 
  id:string|any=null
  constructor(private PlayerService:PlayerService,private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.id=this.route.snapshot.paramMap.get('id');
    this.PlayerService.getById(this.id).subscribe({
      next:(player:Player)=>{
        this.player=player;
        console.log(player);
        
      }
    })
  }
  navigateHome() {
    this.router.navigate(['/']);
  }


}