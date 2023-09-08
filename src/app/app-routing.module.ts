import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResourceComponent } from './Add-Resource/add-resource.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path:"add", component:AddResourceComponent},

];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
