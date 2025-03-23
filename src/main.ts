import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './app/Service/Auth/auth.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { MatchService } from './app/Service/Match/match.service';
import { DatePipe } from '@angular/common';

bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(), 
    provideRouter(routes),
    AuthService,
    MatchService,
    DatePipe, // Provide AuthService
  ],})
  .catch((err) => console.error(err));
