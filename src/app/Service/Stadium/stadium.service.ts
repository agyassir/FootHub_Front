import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Stadium } from '../../core/Models/Stadium/stadium.model';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
 private apiUrl = `${environment.apiUrl}/stadium`;


  constructor(private http: HttpClient) { }
private handleError(error: HttpErrorResponse) {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Something went wrong. Please try again later.'));
      }

  getAll():Observable<Stadium[]>{
    return this.http.get<Stadium[]>(`${this.apiUrl}`).pipe(
      catchError(this.handleError)
    )
  }
}
