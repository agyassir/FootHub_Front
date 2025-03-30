import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../../../Service/Auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Check if the user is already logged in
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (user) => {
        // Handle successful login
        console.log('an hna');
        
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.router.navigate(['/']); // Navigate to the dashboard or home page
      },
      error: (err) => {
        // Handle login error
        this.errorMessage = err.error.message || 'Login failed. Please try again.';
        this.isLoginFailed = true;
      },
    });
  }

  navigateto(){
    this.router.navigate(['/register'])
  }
} 