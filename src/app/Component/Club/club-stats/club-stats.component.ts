import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import type { ClubDataService } from "../../../Service/club-data.service" 
import { HeaderComponent } from "./components/header/header.component"
import { ClubHeaderComponent } from "./components/club-header/club-header.component"
import { TabsComponent } from "./components/tabs/tabs.component"
import { OverviewTabComponent } from "./components/overview-tab/overview-tab.component"
import { MatchesTabComponent } from "./components/matches-tab/matches-tab.component"
import { SquadTabComponent } from "./components/squad-tab/squad-tab.component"
import { TableTabComponent } from "./components/table-tab/table-tab.component"
import { BottomNavComponent } from "./components/bottom-nav/bottom-nav.component"
import { ClubService } from "../../../Service/Club/club.service"

@Component({
  selector: "app-club-stats",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ClubHeaderComponent,
    TabsComponent,
    OverviewTabComponent,
    MatchesTabComponent,
    SquadTabComponent,
    TableTabComponent,
  ],
  templateUrl: "./club-stats.component.html",
  styleUrls: ["./club-stats.component.css"],
})
export class ClubStatsComponent {
  activeTab = "matches"

  constructor(public clubService: ClubService) {}

  setActiveTab(tab: string) {
    console.log(tab);
    
    this.activeTab = tab
  }
}

