import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { initFlowbite, Modal } from 'flowbite';
import { DateValidator } from '../../Outils/DateValidator.component';
import { CommonModule } from '@angular/common';
import { Stadium } from '../../../core/Models/Stadium/stadium.model';
import { StadiumService } from '../../../Service/Stadium/stadium.service';
import { LeagueService } from '../../../Service/League/league.service';
import { ClubService } from '../../../Service/Club/club.service';
import { League } from '../../../core/Models/League/league.model';
import { Club } from '../../../core/Models/Club/club.model';
import { Page } from '../../../core/Models/Page/page';
import { Route, Router, RouterLink } from '@angular/router';
import { ClubCreateRequest } from '../../../core/Models/Request/Club/club-request.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clubs',
  imports: [CommonModule,ReactiveFormsModule,RouterLink ],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent {
  clubForm: FormGroup;
  today = new Date();
  stadiums:Stadium[] | any=null;
  leagues:League[] | any=null;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  page!: Page<Club>;
  currentPage = 0;
  pageSize = 10;
  sortField = 'name';
  sortDirection = 'asc';

  @ViewChild('createClubModal') createClubModal!: ElementRef;
  private modal!: Modal;

  ngAfterViewInit() {
    // Initialize modal after view is ready
    this.modal = new Modal(this.createClubModal.nativeElement);
  }

  ngOnInit(){
    initFlowbite();
    this.stadiumService.getAll().subscribe({
      next:(value:Stadium[])=>{
        this.stadiums=value;
      }
    })

    this.leagueService.getLeagues().subscribe({
      next:(value:League[])=>{
        this.leagues=value;
      }
    })

    this.loadClubs();
  }

  loadClubs(): void {
    this.clubService.getClubs(this.currentPage, this.pageSize, this.sortField, this.sortDirection)
      .subscribe(page => {
        this.page = page;
        // console.log(this.page);
        
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadClubs();
  }

  onSort(sortField: string): void {
    if (this.sortField === sortField) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = sortField;
      this.sortDirection = 'asc';
    }
    this.loadClubs();
  }

  onPageSizeChange(): void {
    this.currentPage = 0; // Reset to first page when changing size
    this.loadClubs();
  }

  navigate(link:string){
    console.log(link);
    this.router.navigate([link]);
  }


  constructor(private fb: FormBuilder,private stadiumService:StadiumService,private leagueService:LeagueService,private clubService:ClubService, private router:Router) {
    this.clubForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      dateOfEstablishment: ['', [Validators.required, DateValidator.pastOrPresent()]],
      owner: ['', [Validators.required, Validators.maxLength(100)]],
      stadiumId: [null, Validators.required],
      leagueId:[null, Validators.required],
      popularityScore: ['', [
        Validators.required,
        Validators.min(60),
        Validators.max(100)
      ]]
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
      
      // Update form control
      this.clubForm.patchValue({ image: file });
      this.clubForm.get('image')?.updateValueAndValidity();
    }
  }

  getPageNumbers(): number[] {
    const totalPages = this.page?.totalPages || 0;
    const currentPage = this.page?.number || 0;
    const maxVisiblePages = 5; // Adjust as needed
    
    let startPage = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);
  
    // Adjust if we're at the start or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages - 1, endPage + (maxVisiblePages - (endPage - startPage + 1)));
      } else {
        startPage = Math.max(0, startPage - (maxVisiblePages - (endPage - startPage + 1)));
      }
    }
  
    return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
  }

  private hideModal() {
    // For Flowbite
    const modal = new Modal(this.createClubModal.nativeElement);
    // console.log(modal);
    
    modal.hide();
  }
  

  onSubmit() {
    if (this.clubForm.valid) {
      if (this.clubForm.invalid) return;

      const clubData: ClubCreateRequest = {
        name: this.clubForm.value.name,
        dateOfEstablishment: this.clubForm.value.dateOfEstablishment,
        owner: this.clubForm.value.owner,
        stadiumId: Number(this.clubForm.value.stadiumId), // Ensure it's a number
        // Add optional fields if they exist in your form
        ...(this.clubForm.value.popularityScore && { 
          popularityScore: Number(this.clubForm.value.popularityScore) 
        }),
        ...(this.clubForm.value.leagueId && { 
          leagueId: Number(this.clubForm.value.leagueId) 
        })
      };
    
      console.log('Submitting club data:', clubData);
      
      // Call your service method
      this.clubService.createClub(clubData).subscribe({
        next: (response) => {
          console.log('Club created successfully:', response);
          this.clubForm.reset();
          this.hideModal();
          // Handle success (e.g., navigation, notification)
        },
        error: (error) => {
          console.error('Error creating club:', error);
          // Handle error
        }
      });
      // Submit to your backend
    }
  }

}
