import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClubService } from '../../../../../Service/Club/club.service';
import { Club } from '../../../../../core/Models/Club/club.model';
import { ActivatedRoute } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { LeagueService } from '../../../../../Service/League/league.service';
import { League } from '../../../../../core/Models/League/league.model';
import { ClubCreateRequest } from '../../../../../core/Models/Request/Club/club-request.model';
import { Stadium } from '../../../../../core/Models/Stadium/stadium.model';
import { StadiumService } from '../../../../../Service/Stadium/stadium.service';

@Component({
  selector: 'app-club-info',
  imports: [CommonModule,FormsModule],
  templateUrl: './club-info.component.html',
  styleUrl: './club-info.component.css'
})
export class ClubInfoComponent {
  @Input() clubInfo = {
    name: '',
    founded: null as Date | string |any,
    stadium: null as number|any,
    owner: '',
    league: null as number | any,
    popularityScore: null as number|any
  };

  date:Date|any=null;

  club:Club | any=null;

  stadiums:Stadium[]|any=null

  leagues :League[]|any=null;

  constructor(private ClubService:ClubService,private stadiumService:StadiumService,private leagueService:LeagueService,private Date:DatePipe,private route:ActivatedRoute){}

  ngOnInit(){
    this.leagueService.getLeagues().subscribe({
      next:(value:League[])=>{
        this.leagues=value;
        console.log(value);
        
      }
    })

    this.stadiumService.getAll().subscribe({
      next:(value:Stadium[])=>{
        this.stadiums=value;
      }
    })


    this.ClubService.getClubById(this.route.snapshot.paramMap.get("id")).subscribe({
      next:(value:Club)=>{
        console.log(value);
        this.clubInfo = {
          name: value.name,
          founded:value.dateOfEstablishement,
          stadium: value.stadiumName,
          owner: value.owner,
          league: value.leagueName,
          popularityScore:value.popularityScore
        };
        this.date=value.dateOfEstablishement;
        this.clubInfo.founded=this.Date.transform(new Date(value.dateOfEstablishement),'yyyy-MM-dd')
      }
    })

  }

  onSave() {

    const updateRequest: ClubCreateRequest = {
      name: this.clubInfo.name,
      dateOfEstablishment: this.formatDateForBackend(this.clubInfo.founded),
      owner: this.clubInfo.owner,
      stadiumId: this.clubInfo.stadium, // Make sure you have this in clubInfo
      popularityScore: this.clubInfo.popularityScore, // Make sure you have this in clubInfo
      leagueId: this.clubInfo.league,
      image:null // Make sure you have this in clubInfo
    };
  
    // Get the club ID from the route
    const clubId = Number(this.route.snapshot.paramMap.get("id"));
  
    // Call the update service
    this.ClubService.updateClub(clubId, updateRequest).subscribe({
      next: (updatedClub) => {
        console.log('Club updated successfully:', updatedClub);
        // Optionally: show success message or navigate away
      },
      error: (err) => {
        console.error('Error updating club:', err);
        // Optionally: show error message
      }
    });
  }
  

  private formatDateForBackend(dateString: string): string {
    // If your backend expects a specific format, adjust this accordingly
    // Example: convert from yyyy-MM-dd (HTML date input) to your backend's format
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
    // Or if your backend expects a different format:
    // return this.datePipe.transform(date, 'yyyy/MM/dd');
  }

  onCancel() {
    // Implement cancel logic
    console.log('Cancelling changes...');
  }


  logoPreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  isDragging = false;
  uploadProgress = 0;
  isUploading = false;
  uploadError: string | null = null;

  handleFileSelect(event: any) {
    event.preventDefault();
    event.stopPropagation();
    
    this.isDragging = false;
    
    const files = event.target.files || (event.dataTransfer ? event.dataTransfer.files : []);
    if (files.length > 0) {
      this.processFile(files[0]);
    }
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  handleDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  private processFile(file: File) {
    // Validate file type
    if (!file.type.match(/image\/(jpeg|png|gif|svg\+xml)/)) {
      alert('Only JPG, PNG, GIF, or SVG images are allowed!');
      return;
    }

    // Validate file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      alert('File size should not exceed 2MB!');
      return;
    }

    this.selectedFile = file;
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      this.logoPreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  triggerFileInput() {
    const fileInput = document.getElementById('photo-dropbox') as HTMLInputElement;
    fileInput.click();
  }

  uploadLogo() {
    if (!this.selectedFile) return;
    const clubId = this.route.snapshot.paramMap.get('id');
    this.isUploading = true;
    this.uploadProgress = 0;
    this.uploadError = null;
  
    this.ClubService.uploadClubLogo(clubId, this.selectedFile).subscribe(
    //   next: (event: any) => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.uploadProgress = Math.round(100 * event.loaded / (event.total || 1));
    //     } else if (event.type === HttpEventType.Response) {
    //       this.isUploading = false;
    //       console.log('Upload successful', event.body);
    //       // Handle successful upload (e.g., update club logo URL)
    //     }
    //   },
    //   error: (err) => {
    //     this.isUploading = false;
    //     this.uploadError = err.error?.message || 'Failed to upload logo';
    //   }
    // }
    response => {
      console.log(response);
    }   
  );
}
}
