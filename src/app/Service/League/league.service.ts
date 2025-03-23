import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../../core/Models/League/league.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
private apiUrl = `${environment.apiUrl}/league`; // Adjust the API URL

  constructor(private http: HttpClient) {}

  getLeagues():Observable<League[]>{
    return this.http.get<League[]>(`${this.apiUrl}`)
  }
}
