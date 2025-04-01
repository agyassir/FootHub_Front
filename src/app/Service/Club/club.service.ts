import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Club } from '../../core/Models/Club/club.model';
import { Stadium } from '../../core/Models/Stadium/stadium.model';
import { Player } from '../../core/Models/Player/player.model';
import { Game } from '../../core/Models/Game/game.model';
import { League } from '../../core/Models/League/league.model';
import { environment } from '../../environments/environment';
import { Page } from '../../core/Models/Page/page';
import { ClubCreateRequest } from '../../core/Models/Request/Club/club-request.model';


@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private apiUrl = `${environment.apiUrl}/clubs`; // Adjust the API URL

  constructor(private http: HttpClient) {}

  // Fetch all clubs
  getClubs(page: number = 0, size: number = 10, sort: string = 'name', direction: string = 'asc'): Observable<Page<Club>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sort);
    
    if (direction) {
      params = params.set('direction', direction);
    }

    return this.http.get<Page<Club>>(this.apiUrl, { params });
  }

  // Fetch a single club by ID
  getClubById(id: string|null): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/${id}`);
  }

  createClub(clubData: ClubCreateRequest): Observable<any> {
    return this.http.post<Club>(`${this.apiUrl}/add`, clubData, {
      headers: {
        'Content-Type': 'application/json'
      },
      observe: 'response'
    }).pipe(
      tap(response => console.log('Full response:', response)),
      catchError(error => {
        console.error('Detailed error:', error);
        if (error.status === 0) {
          console.error('Network or CORS issue detected');
        }
        return throwError(() => error);
      })
    );
  }

  test(text:string): Observable<any> {
    return this.http.post('http://localhost:8080/api/clubs/test', {text}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' // Get full response
    }).pipe(
      tap(response => console.log('Full response:', response)),
      catchError(error => {
        console.error('Detailed error:', error);
        if (error.status === 0) {
          console.error('Network or CORS issue detected');
        }
        return throwError(() => error);
      })
    );
  }

  test2():Observable<any>{
    return this.http.get('http://localhost:8080/api/clubs/hma9',{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' // Get full response
    }).pipe(
      tap(response => console.log('Full response:', response)),
      catchError(error => {
        console.error('Detailed error:', error);
        if (error.status === 0) {
          console.error('Network or CORS issue detected');
        }
        return throwError(() => error);
      })
    )
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

  getFormClass(result: string): { bgColor: string; textColor: string } {
    const bgColor =
      result === "W" ? "bg-green-600" : result === "D" ? "bg-green-300" : "bg-white border border-green-600"
    const textColor = result === "L" ? "text-green-800" : "text-white"

    return { bgColor, textColor }
  }

}