import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'manager',component:ManagerComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
