import { League } from "../League/league.model";
import { LeagueSeason } from "../LeagueSeason/league-season";

export class LeagueStanding {
    id:number;
    league:League;
    points:number;
    standing:number;
    match_played:number;
    season:LeagueSeason;



    constructor(
        id: number ,
        league: League ,
        points: number ,
        match_played: number ,
        season: LeagueSeason ,
        standing:number,

      ) {
        this.id = id;
        this.league = league;
        this.points = points;
        this.match_played = match_played;
        this.season = season;
        this.standing=standing;
      }
}
