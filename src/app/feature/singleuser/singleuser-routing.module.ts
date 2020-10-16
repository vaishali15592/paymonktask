import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleuserComponent } from './singleuser.component';


const routes: Routes = [
  {path: '', component: SingleuserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleuserRoutingModule { }
