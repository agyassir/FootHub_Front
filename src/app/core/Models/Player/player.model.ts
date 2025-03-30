import { Club } from "../Club/club.model";
import { PlayerStat } from "../PlayerStat/player-stat";

export class Player {
    id: number;
    firstName: string;
    lastName: string;
    age:number;
    nationality:string;
    marketValue:number;
    position: string;
    jerseyNumber: number;
    club: Club;
    stats:PlayerStat[]

  
    constructor(
      id: number,
      FirstName: string,
      Lastname: string,
      age:number,
      nation:string,
      marketvalue:number,
      position: string,
      jerseyNumber: number,
      club: Club,
      stats: PlayerStat[]
    ) {
      this.id = id;
      this.firstName = FirstName;
      this.lastName= Lastname;
      this.position = position;
      this.jerseyNumber = jerseyNumber;
      this.club = club;
      this.stats=stats;
      this.marketValue=marketvalue;
      this.nationality=nation;
      this.age=age;
    }
  }