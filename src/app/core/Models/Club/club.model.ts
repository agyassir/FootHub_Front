import { Game } from "../Game/game.model";
import { League } from "../League/league.model";
import { Player } from "../Player/player.model";
import { Stadium } from "../Stadium/stadium.model";

export class Club {
    id: number;
    name: string;
    dateOfEstablishment: Date;
    owner: string;
    image: string;
    stadium: Stadium;
    players: Player[];
    homeGames: Game[];
    awayGames: Game[];
    league: League;
  
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
      league: League
    ) {
      this.id = id;
      this.name = name;
      this.dateOfEstablishment = dateOfEstablishment;
      this.owner = owner;
      this.image = image;
      this.stadium = stadium;
      this.players = players;
      this.homeGames = homeGames;
      this.awayGames = awayGames;
      this.league = league;
    }
  }