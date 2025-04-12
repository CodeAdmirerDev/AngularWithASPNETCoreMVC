import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'emps', component: EmpListComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
