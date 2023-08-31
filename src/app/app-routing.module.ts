import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path:'',component:ContainerComponent
  },
  {
    path:'Contact',component:ContactusComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
