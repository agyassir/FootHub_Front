import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Player } from '../../core/Models/Player/player.model';
import { Transfer } from '../../core/Models/PlayerTransfer/transfer';

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

    getById(id:string|null):Observable<Player>{
      return this.http.get<Player>(`${this.apiUrl}/${id}`).pipe(
        catchError(this.handleError)
      )
    }

    getPlayerTransfers(id:string|null):Observable<Transfer[]>{
      return this.http.get<Transfer[]>(`${this.apiUrl}/transfer/${id}`).pipe(
        catchError(this.handleError)
      )
    }
}
