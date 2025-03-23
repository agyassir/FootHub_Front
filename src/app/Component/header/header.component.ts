import { Component } from '@angular/core';
import { ProfileButtonComponent } from '../profile/profile-button/profile-button.component';

@Component({
  selector: 'app-header',
  imports: [
    ProfileButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
