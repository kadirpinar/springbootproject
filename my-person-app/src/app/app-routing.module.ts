import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsertComponent} from './insert/insert.component'
import {MyCenterComponent} from "./my-center/my-center.component";
import {UpdateComponent} from "./update/update.component";
import {LoginComponent} from "./login/login.component";
import {ITComponent} from "./it/it.component";

const routes: Routes = [
  {path: '', component:LoginComponent, pathMatch: 'full'},
  {path: 'center', component:MyCenterComponent},
  {path: 'insert', component: InsertComponent},
  {path: 'update/:id',component:UpdateComponent},
  {path: 'it',component:ITComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const  routingComponents=[InsertComponent]
