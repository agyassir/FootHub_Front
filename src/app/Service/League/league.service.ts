import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { League } from '../../core/Models/League/league.model';
import { LeagueStanding } from '../../core/Models/LeagueStanding/league-standing';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
private apiUrl = `${environment.apiUrl}/league`; // Adjust the API URL
private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
  constructor(private http: HttpClient) {}

  getLeagues():Observable<League[]>{
    return this.http.get<League[]>(`${this.apiUrl}`)
  }
  getLeagueStanding(id:number):Observable<LeagueStanding[]>{
    return this.http.get<LeagueStanding[]>(`${this.apiUrl}/standing/${id}`).pipe(
      catchError(this.handleError)
    )
  }
}
