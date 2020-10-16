import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleuserRoutingModule } from './singleuser-routing.module';
import { SingleuserComponent } from './singleuser.component';


@NgModule({
  declarations: [SingleuserComponent],
  imports: [
    CommonModule,
    SingleuserRoutingModule
  ]
})
export class SingleuserModule { }
