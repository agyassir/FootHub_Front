import { Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/Auth/login/login.component';
import { RegisterComponent } from './Component/Auth/register/register.component';
import { ClubComponent } from './Component/Club/club.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { PlayerProfileComponent } from './Component/player/player.component';

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
