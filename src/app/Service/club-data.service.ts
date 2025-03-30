import { Injectable } from "@angular/core"
import type { ClubData } from "../core/Models/club-data.model"; 

@Injectable({
  providedIn: "root",
})

export class ClubDataService {
  clubData: ClubData = {
    name: "Green City FC",
    founded: 1985,
    stadium: "Green Valley Stadium",
    capacity: 45000,
    manager: "Roberto Silva",
    league: "Premier League",
    position: 4,
    points: 56,
    form: ["W", "W", "D", "L", "W"],
    stats: {
      matches: 28,
      wins: 16,
      draws: 8,
      losses: 4,
      goalsFor: 48,
      goalsAgainst: 22,
      cleanSheets: 12,
    },
    recentMatches: [
      { opponent: "United FC", home: true, result: "W", score: "2-0", date: "Mar 18, 2025" },
      { opponent: "City Rovers", home: false, result: "W", score: "3-1", date: "Mar 12, 2025" },
      { opponent: "Athletic Club", home: true, result: "D", score: "1-1", date: "Mar 5, 2025" },
      { opponent: "Royal Blues", home: false, result: "L", score: "0-2", date: "Feb 28, 2025" },
      { opponent: "Northern FC", home: true, result: "W", score: "4-0", date: "Feb 21, 2025" },
    ],
    upcomingMatches: [
      { opponent: "Eastern United", home: false, date: "Mar 25, 2025", time: "15:00" },
      { opponent: "Western Wanderers", home: true, date: "Apr 1, 2025", time: "20:00" },
      { opponent: "Southern Stars", home: false, date: "Apr 8, 2025", time: "17:30" },
    ],
    topPlayers: [
      { name: "Carlos Mendez", position: "FW", number: 9, goals: 14, assists: 7, rating: 8.2 },
      { name: "James Wilson", position: "MF", number: 8, goals: 8, assists: 12, rating: 8.0 },
      { name: "Marco Rossi", position: "DF", number: 4, goals: 2, assists: 1, rating: 7.8 },
      { name: "David Chen", position: "GK", number: 1, goals: 0, assists: 0, rating: 7.7, cleanSheets: 12 },
    ],
    leagueStandings: [
      { position: 1, team: "United FC", played: 28, points: 65, gd: 35 },
      { position: 2, team: "City Rovers", played: 28, points: 62, gd: 28 },
      { position: 3, team: "Royal Blues", played: 28, points: 58, gd: 22 },
      { position: 4, team: "Green City FC", played: 28, points: 56, gd: 26 },
      { position: 5, team: "Athletic Club", played: 28, points: 49, gd: 15 },
    ],
  }

  constructor() {}

  // Helper function to render form indicators
  getFormClass(result: string): { bgColor: string; textColor: string } {
    const bgColor =
      result === "W" ? "bg-green-600" : result === "D" ? "bg-green-300" : "bg-white border border-green-600"
    const textColor = result === "L" ? "text-green-800" : "text-white"

    return { bgColor, textColor }
  }
}

