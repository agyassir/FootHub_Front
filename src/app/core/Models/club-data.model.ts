export interface ClubData {
  name: string
  founded: number
  stadium: string
  capacity: number
  manager: string
  league: string
  position: number
  points: number
  form: string[]
  stats: {
    matches: number
    wins: number
    draws: number
    losses: number
    goalsFor: number
    goalsAgainst: number
    cleanSheets: number
  }
  recentMatches: Match[]
  upcomingMatches: UpcomingMatch[]
  topPlayers: Player[]
  leagueStandings: TeamStanding[]
}

export interface Match {
  opponent: string
  home: boolean
  result: string
  score: string
  date: string
}

export interface UpcomingMatch {
  opponent: string
  home: boolean
  date: string
  time: string
}

export interface Player {
  name: string
  position: string
  number: number
  goals?: number
  assists?: number
  rating: number
  cleanSheets?: number
}

export interface TeamStanding {
  position: number
  team: string
  played: number
  points: number
  gd: number
}

