import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListresourceComponent } from './listresource.component';


const routes: Routes = [
  {path: '', component: ListresourceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListresourceRoutingModule { }
