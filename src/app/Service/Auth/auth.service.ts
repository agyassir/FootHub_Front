import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../../core/Models/Request/Auth/Login/login-request.model';
import { User } from '../../core/Models/User/user';
import { RegisterRequest } from '../../core/Models/Request/Auth/Register/register-request.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = `${environment.apiUrl}/auth`;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    // Check initial authentication state (e.g., from localStorage)
    const token = localStorage.getItem('authToken');
    this.isAuthenticatedSubject.next(!!token);
  }

  // Method to log in the user
  login(username: string, password: string): Observable<User> {
    const request: LoginRequest = { username, password };
    return this.http.post<User>(this.api+"/login", request).pipe(
      tap((user) => {
        // Save the token to localStorage
        localStorage.setItem('authToken', user.token);
        this.isAuthenticatedSubject.next(true); // Update authentication state
      }),
    );
  }

  register(username: string, email: string, password: string): Observable<boolean> {
    const request: RegisterRequest = { username, email, password };
  
    return this.http.post(`${this.api}/register`, request, { responseType: 'text' }).pipe(
      map(() => true), // If successful, return true
      catchError(error => {
        console.error('Error:', error);
        return of(false); // Return false if there's an error
      })
    );
  }

  // Method to log out the user
  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false); // Update authentication state
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Method to get the current authentication token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

    getUser(): Observable<User | null> {
      const token = this.getToken();
      if (!token) {
        return of(null); 
      }

  
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

    
      return this.http.get<User>(`${this.api}/me`, { headers }).pipe(
        tap((user) => {
          // console.log(user);
          return user;
          this.isAuthenticatedSubject.next(true); 
        }),
        catchError((error) => {
          console.error('Failed to fetch user data:', error);
          this.isAuthenticatedSubject.next(false); // Update authentication state
          return of(null); // Return null in case of an error
        }),
      );
    }
}