import { Component } from '@angular/core';
import { AuthService } from '../../../Service/Auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { Role } from '../../../core/Models/User/role';

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
    this.authService.getUser().subscribe({
      next:(user)=>{
        this.user=user;
        console.log(this.user);
        
      },
      error:(error)=>{
        console.error('Failed to fetch user data:', error);
      }
    });
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;

    });
    initFlowbite();
  }

  onLogin(): void {
    // Navigate to the login page
    console.log('ana hna')
    this.router.navigate(['/login']);
  }
  onRegister(): void {
    // Navigate to the login page
    this.router.navigate(['/register']);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onProfile(): void {
    // Navigate to the user's profile page
    this.router.navigate(['/profile']);
  }

  hasRole(): boolean {
    // Check if user exists and has roles array
    if (!this.user || !this.user.roles) return false;
    console.log(this.user.roles.some((role:Role)=> role.name === "ROLE_ADMIN"));
    
    // Check if the role exists in the roles array
    return this.user.roles.some((role:Role)=> role.name === "ROLE_ADMIN");
  }

  navigate(link:string){
      this.router.navigate([`/${link}`])
  }

}
