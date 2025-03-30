import { Game } from "../Game/game.model";
import { League } from "../League/league.model";
import { LeagueStanding } from "../LeagueStanding/league-standing";
import { Player } from "../Player/player.model";
import { Stadium } from "../Stadium/stadium.model";

export class Club {
    id: number;
    name: string;
    dateOfEstablishement: Date;
    owner: string;
    image: string;
    stadium: Stadium;
    players: Player[];
    homeGames: Game[];
    awayGames: Game[];
    league: League;
    leagueStandings:LeagueStanding[];
  
    constructor(
      id: number,
      name: string,
      dateOfEstablishment: Date,
      owner: string,
      image: string,
      stadium: Stadium,
      players: Player[],
      homeGames: Game[],
      awayGames: Game[],
      league: League,
      leagueStanding:LeagueStanding[],
    ) {
      this.id = id;
      this.name = name;
      this.dateOfEstablishement = dateOfEstablishment;
      this.owner = owner;
      this.image = image;
      this.stadium = stadium;
      this.players = players;
      this.homeGames = homeGames;
      this.awayGames = awayGames;
      this.league = league;
      this.leagueStandings=leagueStanding
    }
  }