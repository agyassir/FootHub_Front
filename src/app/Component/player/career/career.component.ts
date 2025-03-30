import { Component, Input } from '@angular/core';
import { PlayerService } from '../../../Service/Player/player.service';
import { Transfer } from '../../../core/Models/PlayerTransfer/transfer';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-career',
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  transfers:Transfer[] |any=null
  @Input() id:string|any=null;
  constructor(private playerService:PlayerService,private date:DatePipe){}

  ngOnInit(){
    this.playerService.getPlayerTransfers(this.id).subscribe({
      next:(value:Transfer[])=>{
        this.transfers=value;
        
        console.log(this.transfers);
        
      }
    })
  }

}
