import { Component } from '@angular/core';
import { AuthService } from '../../../Service/Auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-button',
  imports: [CommonModule],
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.css'
})
export class ProfileButtonComponent {
  isAuthenticated!: boolean;
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to authentication state changes
    this.authService.getUser().subscribe({
      next:(user)=>{
        this.user=user;
      },
      error:(error)=>{
        console.error('Failed to fetch user data:', error);
      }
    });
    console.log(this.user);
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;

    });
    console.log(this.isAuthenticated)
  }

  onLogin(): void {
    // Navigate to the login page
    console.log('ana hna')
    this.router.navigate(['/login']);
  }
  onRegister(): void {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onProfile(): void {
    // Navigate to the user's profile page
    this.router.navigate(['/profile']);
  }

}
