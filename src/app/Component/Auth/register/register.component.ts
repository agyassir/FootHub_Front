import { Component } from '@angular/core';
import { AuthService } from '../../../Service/Auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../login/login.component.css']
})
export class RegisterComponent {
 form: any = {
    username: null,
    email:null,
    password: null,
  };

  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  onSubmit():void{
    const { username,email, password } = this.form;
      this.authService.register(username,email,password).subscribe({
        next:(value:boolean)=>{
          if (value) {
            this.router.navigate(['/login']);
          }
        }
      })
  }

  navigateto(){
    this.router.navigate(['/login'])
  }
}
