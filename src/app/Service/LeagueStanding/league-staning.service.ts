import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LeagueStanding } from '../../core/Models/LeagueStanding/league-standing';

@Injectable({
  providedIn: 'root'
})
export class LeagueStaningService {

  private apiUrl = `${environment.apiUrl}/standing`; // Adjust the API URL
  private handleError(error: HttpErrorResponse) {
      console.error('An error occurred:', error);
      return throwError(() => new Error('Something went wrong. Please try again later.'));
    }
  constructor(private http: HttpClient) {}


    getStandingByClub(id:number|any):Observable<LeagueStanding[]>{
      return this.http.get<LeagueStanding[]>(`${this.apiUrl}/club/${id}`).pipe(
        catchError(this.handleError)
      )
    }

    updateStanding(id: number, standingData: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, standingData);
    }

    createStanding(standingData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}`, standingData);
    }
}
