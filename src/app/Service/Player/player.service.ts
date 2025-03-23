import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Player } from '../../core/Models/Player/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) {}

  
    private apiUrl = `${environment.apiUrl}/player`; 


     private handleError(error: HttpErrorResponse) {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Something went wrong. Please try again later.'));
      }

    getTrending(): Observable<Player>{
      return this.http.get<Player>(`${this.apiUrl}/trending`).pipe(
        catchError(this.handleError)
      )
    }
}
