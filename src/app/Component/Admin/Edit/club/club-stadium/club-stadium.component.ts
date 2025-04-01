import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-club-stadium',
  imports: [CommonModule,FormsModule],
  templateUrl: './club-stadium.component.html',
  styleUrl: './club-stadium.component.css'
})
export class ClubStadiumComponent {
  stadiumInfo = {
    address: '123 Green Valley Road, Green City, GC1 2AB',
    dimensions: '105m x 68m',
    yearBuilt: 1990,
    surfaceType: 'Natural Grass',
    facilities: ['Parking', 'Food Concessions', 'Club Shop', 'Club Museum', 'Free WiFi'],
    description: 'Green Valley Stadium is the home of Green City FC...'
  };

  surfaceTypes = ['Natural Grass', 'Artificial Turf', 'Hybrid'];
  facilityOptions = ['Parking', 'Food Concessions', 'Club Shop', 'Club Museum', 'Free WiFi'];

  toggleFacility(facility: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked && !this.stadiumInfo.facilities.includes(facility)) {
      this.stadiumInfo.facilities.push(facility);
    } else if (!isChecked) {
      this.stadiumInfo.facilities = this.stadiumInfo.facilities.filter(f => f !== facility);
    }
  }

  handleImageUpload(event: Event) {
    console.log('Uploading stadium image...');
  }
}
