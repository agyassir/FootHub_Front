import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { WeeklyChallengeComponent } from '../weekly-challenge/weekly-challenge.component';
import { TrendingSectionComponent } from '../trending-section/trending-section.component';
import { LatestMatchesComponent } from '../latest-match-card/latest-match-card.component';
import { CreateGameComponent } from '../create-game/create-game.component';
import { VerticalNavComponent } from '../vertical-nav/vertical-nav.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    WeeklyChallengeComponent,
    TrendingSectionComponent,
    LatestMatchesComponent,
    VerticalNavComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit{

  ngAfterViewInit(): void {
      initFlowbite();
  }
  // Component logic goes here
}