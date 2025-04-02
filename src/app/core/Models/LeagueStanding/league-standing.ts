import { League } from "../League/league.model";
import { LeagueSeason } from "../LeagueSeason/league-season";

export class LeagueStanding {
    id?:number;
    league:League|any;
    points:number;
    standing:number;
    match_played:number;
    leagueSeason:LeagueSeason;
    win: number;
    draw: number;
    loss: number;



    constructor(
        id: number ,
        league: League ,
        points: number ,
        match_played: number ,
        season: LeagueSeason ,
        standing:number,
        win: number,
        draw: number,
        loss: number,

      ) {
        this.id = id;
        this.league = league;
        this.points = points;
        this.match_played = match_played;
        this.leagueSeason = season;
        this.standing=standing;
        this.draw=draw;
        this.win=win;
        this.loss=loss;
      }
}
