import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  mainMenuItems = [
    { label: 'Teams', icon: 'fas fa-users', link: '#', active: false },
    { label: 'Players', icon: 'fas fa-user', link: '#', active: false },
    { label: 'Matches', icon: 'fas fa-calendar', link: '#', active: false }
  ];

  constructor(private router:Router){}

  navigate(link:string){
    this.router.navigate([link]);
  }
}
