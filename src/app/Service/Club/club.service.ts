import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from '../../core/Models/Club/club.model';
import { Stadium } from '../../core/Models/Stadium/stadium.model';
import { Player } from '../../core/Models/Player/player.model';
import { Game } from '../../core/Models/Game/game.model';
import { League } from '../../core/Models/League/league.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private apiUrl = `${environment.apiUrl}/club`; // Adjust the API URL

  constructor(private http: HttpClient) {}

  // Fetch all clubs
  getClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }

  // Fetch a single club by ID
  getClubById(id: number): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/${id}`);
  }

  // Create a new club
  createClub(club: Club): Observable<Club> {
    return this.http.post<Club>(this.apiUrl, club);
  }

  // Update an existing club
  updateClub(id: number, club: Club): Observable<Club> {
    return this.http.put<Club>(`${this.apiUrl}/${id}`, club);
  }

  // Delete a club by ID
  deleteClub(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Fetch players for a specific club
  getPlayersByClubId(clubId: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/${clubId}/players`);
  }

  // Fetch home games for a specific club
  getGamesByClubId(clubId: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/${clubId}/home-games`);
  }

  getHotClubs():Observable<Club[]>{
    return this.http.get<Club[]>(`${this.apiUrl}/hot`);
  }

}