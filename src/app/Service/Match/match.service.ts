import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Game } from '../../core/Models/Game/game.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private apiUrl = `${environment.apiUrl}/games`; 

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }

  // Fetch all matches
  getMatches(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getUpcoming(id:string|null):Observable<Game>{
    return this.http.get<Game>(`${this.apiUrl}/upcomingMatch/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Fetch a single match by ID
  getMatchById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new match
  createMatch(match: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, match).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing match
  updateMatch(id: number, match: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${id}`, match).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a match by ID
  deleteMatch(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Fetch matches for a specific home team
  getMatchesByHomeTeam(homeTeamId: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/home-team/${homeTeamId}`).pipe(
      catchError(this.handleError)
    );
  }

  getMatchesByTeam(homeTeamId: string|null): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/club/${homeTeamId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Fetch matches for a specific away team
  getMatchesByAwayTeam(awayTeamId: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/away-team/${awayTeamId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Fetch matches for a specific stadium
  getMatchesByStadium(stadiumId: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/stadium/${stadiumId}`).pipe(
      catchError(this.handleError)
    );
  }

  getGamesByDate(date: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/by-date`, {
      params: { date }, // Pass the date as a query parameter
    }).pipe(
      catchError(this.handleError)
    );
  }

  getTodaysGame(): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.apiUrl}/today`)
    .pipe(
      catchError(this.handleError)
    )
  }
  getHotGames():Observable<Game[]>{
    return this.http.get<Game[]>(`${this.apiUrl}/hot`)
    .pipe(
      catchError(this.handleError)
    )
  }
}
