import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Club } from '../../core/Models/Club/club.model';
import { Game } from '../../core/Models/Game/game.model';

interface Team {
  img: string;
  name: string;
}

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent {
  @Input() game!: any;

}