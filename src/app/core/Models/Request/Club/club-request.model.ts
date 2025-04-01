export interface ClubCreateRequest {
    name: string;
    dateOfEstablishment: string; // or Date if you prefer
    owner: string;
    stadiumId: number;
    popularityScore: number;
    leagueId: number;
    image: string | null; // or File if you're uploading images
  }