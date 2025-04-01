import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../Layout/sidebar/sidebar.component';
import { NavbarComponent } from "../Layout/navbar/navbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
