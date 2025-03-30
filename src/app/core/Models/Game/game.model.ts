import { Club } from "../Club/club.model";
import { League } from "../League/league.model";

export class Game {
    id: number;
    date: Date;
    hour:Date;
    homeTeam: Club;
    awayTeam: Club;
    homeScore: number;
    awayScore: number;
    league: League;
    status: boolean;
  
    constructor(
      id: number,
      date: Date,
      hour:Date,
      homeTeam: Club,
      awayTeam: Club,
      homeScore: number,
      awayScore: number,
      league: League,
      status: boolean,
       
    ) {
      this.id = id;
      this.date = date;
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.homeScore = homeScore;
      this.awayScore = awayScore;
      this.league=league;
      this.status=status;
      this.hour=hour;
    }
  }