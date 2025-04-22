import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RouteMeta } from '@analogjs/router';

const routes: Routes = [

{path:'' , redirectTo:'products', pathMatch:'full'},
{path:'products',component:ProductListComponent},
{  
  path: 'products/edit/:id',  component:ProductEditComponent},
{path:'products/create', component:ProductEditComponent},
{path:'**', redirectTo:'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
