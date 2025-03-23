export class PlayerStat {
    id: number;
    goals: number;
    assists: number;
    avgMatchRating: number;
    dribbleSuccessRate: number;
    matchDate: Date;
    minutesPlayed: number;
    passAccuracy: number;
    redCards: number;
    season: string;
    shotsOnTargetPercentage: number;
    tacklesPerGame: number;
    yellowCards: number;
  
    constructor(
      id: number,
      goals: number,
      assists: number,
      avgMatchRating: number,
      dribbleSuccessRate: number,
      matchDate: Date,
      minutesPlayed: number,
      passAccuracy: number,
      redCards: number,
      season: string,
      shotsOnTargetPercentage: number,
      tacklesPerGame: number,
      yellowCards: number
    ) {
      this.id = id;
      this.goals = goals;
      this.assists = assists;
      this.avgMatchRating = avgMatchRating;
      this.dribbleSuccessRate = dribbleSuccessRate;
      this.matchDate = matchDate;
      this.minutesPlayed = minutesPlayed;
      this.passAccuracy = passAccuracy;
      this.redCards = redCards;
      this.season = season;
      this.shotsOnTargetPercentage = shotsOnTargetPercentage;
      this.tacklesPerGame = tacklesPerGame;
      this.yellowCards = yellowCards;
    }
  }