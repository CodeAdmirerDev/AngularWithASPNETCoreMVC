import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { CanMatchGuard } from './guards/can-match.guard';

const routes: Routes = [
{path:'home' , component:HomeComponent, canActivate:[AuthGuard]},
{path:'login', component:LoginComponent},
{path:'admin',component:AdminComponent, canActivateChild:[AdminGuard],
  children:[
    {path:'usersetting', component:UserSettingComponent},
    {path:'admindashboard', component:AdminDashBoardComponent}
  ]
},
{  
  path: 'edit-profile',  
  component: EditProfileComponent,  
  canDeactivate: [CanDeactivateGuard]  
} ,
{path:'', redirectTo:'/login',pathMatch:'full'}
,
{ path: 'adminteam', loadChildren: () => import('./adminteam/adminteam.module').then(m => m.AdminteamModule) ,  
  canMatch: [CanMatchGuard]  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
