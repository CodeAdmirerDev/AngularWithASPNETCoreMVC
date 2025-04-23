import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';  
import { TaskDashboardComponent } from './components/task-dashboard/task-dashboard.component';  
import { TaskItemComponent } from './components/task-item/task-item.component';

const routes: Routes = [  
  { path: '', component: TaskDashboardComponent },  
  { path: '**', redirectTo: '', pathMatch: 'full' },  
  {path:'tasklist', component:TaskItemComponent}
];  

@NgModule({  
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],  
  exports: [RouterModule],  
})  
export class AppRoutingModule {} 