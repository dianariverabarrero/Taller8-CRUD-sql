import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { NewComponent } from '../Components/new/new.component';
import { EditComponent } from '../Components/edit/edit.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent },
  {path:'new', component:NewComponent},
  {path:'edit/:id', component:EditComponent}
];


@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ],
  declarations: []
  })
  export class AppRoutingModule { }
