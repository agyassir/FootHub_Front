import { Routes } from '@angular/router';
import { DashboardComponent as Admin } from './Component/Admin/dashboard/dashboard.component';
import { LoginComponent } from './Component/Auth/login/login.component';
import { RegisterComponent } from './Component/Auth/register/register.component';
import { ClubComponent } from './Component/Club/club.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { PlayerProfileComponent } from './Component/player/player.component';
import { ClubsComponent } from './Component/Admin/clubs/clubs.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { EClubComponent } from './Component/Admin/Edit/club/club.component';

export const routes: Routes = [
    
      {
        path: 'login',
        component:LoginComponent
      },
      {
        path: 'register',
        component:RegisterComponent
      },
      {
        path:'dashboard',
        component:Admin,
        children:[
          {
            path:'clubs',
            component:ClubsComponent  
          },
          {
            path:'club/:id',
            component:EClubComponent
          }
        ]
      },

      {
        path:'',
        component:LayoutComponent,
        children:[
          {
            path:'',
            component:DashboardComponent,
          },
          {
            path: 'club/:id',
            component:ClubComponent
          }, 
          {
            path:'player/:id',
            component:PlayerProfileComponent
          }
    ]
    }
];
