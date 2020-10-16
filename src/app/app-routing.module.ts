import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';


const routes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', loadChildren: "./feature/register/register.module#RegisterModule" },
      { path: 'login', loadChildren: "./feature/login/login.module#LoginModule" },
      { path: 'create', loadChildren: "./feature/create/create.module#CreateModule" },
      { path: 'update/:id', loadChildren: "./feature/update/update.module#UpdateModule" },
      { path: 'list', loadChildren: "./feature/list/list.module#ListModule" },
      { path: 'singleuser', loadChildren: "./feature/singleuser/singleuser.module#SingleuserModule" },
      { path: 'listresource', loadChildren: "./feature/listresource/listresource.module#ListresourceModule" },
      { path: 'singleresource', loadChildren: "./feature/singleresource/singleresource.module#SingleresourceModule" },
      { path: '**', component: PageNotFoundComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { onSameUrlNavigation: 'reload' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
