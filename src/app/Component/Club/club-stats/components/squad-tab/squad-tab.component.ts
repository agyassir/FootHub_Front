import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { ClubService } from '../../../../../Service/Club/club.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../../../../core/Models/Club/club.model';
import { Player } from '../../../../../core/Models/Player/player.model';

@Component({
  selector: 'app-squad-tab',
  standalone: true,
  imports: [CommonModule, CardComponent, AvatarComponent, BadgeComponent],
  template: `
    <div class="container mx-auto p-4">
      <app-card class="border-green-100" [title]="'Squad'" [icon]="'users'">
        <div class="space-y-6">
          <!-- Goalkeepers -->
          <div>
            <h3 class="mb-2 text-sm font-medium text-green-600">Goalkeepers</h3>
            <div class="space-y-3">
              <div
                *ngFor="let player of goalkeepers"
                class="flex items-center justify-between rounded-lg border border-green-100 p-3"
              >
                <div class="flex items-center gap-3">
                  <app-avatar
                    [name]="player.lastName"
                    [initials]="
                      getInitials(player.firstName + ' ' + player.lastName)
                    "
                    size="h-10 w-10"
                  ></app-avatar>
                  <div>
                    <p class="font-medium text-green-800">
                      {{ player.firstName }} {{ player.lastName }}
                    </p>
                    <div class="flex items-center gap-2">
                      <app-badge
                        [text]="player.position"
                        variant="outline"
                      ></app-badge>
                      <span class="text-xs text-green-600"
                        >#{{ player.number }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  (click)="navigateto(player.id)"
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Defenders -->
          <div>
            <h3 class="mb-2 text-sm font-medium text-green-600">Defenders</h3>
            <div class="space-y-3">
              <div
                *ngFor="let player of defenders"
                class="flex items-center justify-between rounded-lg border border-green-100 p-3"
              >
                <div class="flex items-center gap-3">
                  <app-avatar
                    [name]="player.lastName"
                    [initials]="
                      getInitials(player.firstName + ' ' + player.lastName)
                    "
                    size="h-10 w-10"
                  ></app-avatar>
                  <div>
                    <p class="font-medium text-green-800">
                      {{ player.firstName }} {{ player.lastName }}
                    </p>
                    <div class="flex items-center gap-2">
                      <app-badge
                        [text]="player.position"
                        variant="outline"
                      ></app-badge>
                      <span class="text-xs text-green-600"
                        >#{{ player.number }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  (click)="navigateto(player.id)"
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Midfielders -->
          <div>
            <h3 class="mb-2 text-sm font-medium text-green-600">Midfielders</h3>
            <div class="space-y-3">
              <div
                *ngFor="let player of midfielders"
                class="flex items-center justify-between rounded-lg border border-green-100 p-3"
              >
                <div class="flex items-center gap-3">
                  <app-avatar
                    [name]="player.name"
                    [initials]="
                      getInitials(player.firstName + ' ' + player.lastName)
                    "
                    size="h-10 w-10"
                  ></app-avatar>
                  <div>
                    <p class="font-medium text-green-800">
                      {{ player.firstName }} {{ player.lastName }}
                    </p>
                    <div class="flex items-center gap-2">
                      <app-badge
                        [text]="player.position"
                        variant="outline"
                      ></app-badge>
                      <span class="text-xs text-green-600"
                        >#{{ player.number }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  (click)="navigateto(player.id)"
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Forwards -->
          <div>
            <h3 class="mb-2 text-sm font-medium text-green-600">Forwards</h3>
            <div class="space-y-3">
              <div
                *ngFor="let player of forwards"
                class="flex items-center justify-between rounded-lg border border-green-100 p-3"
              >
                <div class="flex items-center gap-3">
                  <app-avatar
                    [name]="player.lastName"
                    [initials]="
                      getInitials(player.firstName + ' ' + player.lastName)
                    "
                    size="h-10 w-10"
                  ></app-avatar>
                  <div>
                    <p class="font-medium text-green-800">
                      {{ player.firstName }} {{ player.lastName }}
                    </p>
                    <div class="flex items-center gap-2">
                      <app-badge text="FW" variant="outline"></app-badge>
                      <span class="text-xs text-green-600"
                        >#{{ player.number }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  (click)="navigateto(player.id)"
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </app-card>
    </div>
  `,
  styles: [],
})
export class SquadTabComponent {
  club: Club | any = null;
  defenders: Player | any = null;

  midfielders: Player | any = null;

  forwards: Player | any = null;

  goalkeepers: Player | any = null;

  constructor(
    public clubDataService: ClubService,
    public router: ActivatedRoute,
    public route: Router
  ) {}

  ngOnInit() {
    this.clubDataService
      .getClubById(this.router.snapshot.paramMap.get('id'))
      .subscribe({
        next: (club: Club) => {
          this.club = club;
          this.defenders = this.club.players.filter((p: any) =>
            ['RB', 'CB', 'LB'].includes(p.position)
          );
          this.midfielders = this.club.players.filter((p: any) =>
            ['CM', 'CDM', 'CAM', 'LM', 'RM'].includes(p.position)
          );
          this.forwards = this.club.players.filter((p: any) =>
            ['LW', 'RW', 'ST', 'CF'].includes(p.position)
          );
          this.goalkeepers = this.club.players.filter((p: any) =>
            ['GK'].includes(p.position)
          );
          console.log(this.midfielders[0].lastName);
        },
      });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }

  navigateto(id: number) {
    this.route.navigate(['/player', id]);
  }
}
