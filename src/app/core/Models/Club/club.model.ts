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
    stadium: Stadium;
    players: Player[];
    homeGames: Game[];
    awayGames: Game[];
    leagueName: string;
    leagueStandings:LeagueStanding[];
    image?: File | string;
    popularityScore:number;

  
    constructor(
      id: number,
      name: string,
      dateOfEstablishment: Date,
      owner: string,
      image: string,
      popularityScore:number,
      stadium: Stadium,
      players: Player[],
      homeGames: Game[],
      awayGames: Game[],
      league: string,
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
      this.leagueName = league;
      this.leagueStandings=leagueStanding
      this.popularityScore=popularityScore;
    }
  }