import { Club } from "../Club/club.model";

export class League {
    id: number;
    name: string;
    country: string;
    clubs: Club[];
  
    constructor(id: number, name: string, country: string, clubs: Club[]) {
      this.id = id;
      this.name = name;
      this.country = country;
      this.clubs = clubs;
    }
  }