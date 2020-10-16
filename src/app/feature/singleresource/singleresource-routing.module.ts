import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleresourceComponent } from './singleresource.component';


const routes: Routes = [
  {path: '', component: SingleresourceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleresourceRoutingModule { }
