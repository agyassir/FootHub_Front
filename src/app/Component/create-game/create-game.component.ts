
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent {
  gameForm: FormGroup;
  
  fields = [
    {
      name: "location",
      label: "Select Location",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/da6da6adccd04f16c2be92b589c8cc4abaff41ccc327965ecc07ff2a863a4c04?placeholderIfAbsent=true",
    },
    {
      name: "ground",
      label: "Select Ground",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef126daad92995b3c34c8164ba5b4ff3c01063c9985217fc3f03389ce836d184?placeholderIfAbsent=true",
    },
    {
      name: "date",
      label: "Select Date",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d76eb1d970bbf55e5ad016d0346d536fd54b608d14bd9b6bd9ddb5434546e6d?placeholderIfAbsent=true",
    },
    {
      name: "players",
      label: "Number of Players",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e63c870056f926cda13cdcb00923c213434eabd484b5c960071ee8d72eba2de9?placeholderIfAbsent=true",
    },
  ];

  constructor(private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      gameType: [''],
      location: [''],
      ground: [''],
      date: [''],
      players: ['']
    });
  }

  onSubmit() {
    console.log(this.gameForm.value);
  }
}