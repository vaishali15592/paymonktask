import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleresourceRoutingModule } from './singleresource-routing.module';
import { SingleresourceComponent } from './singleresource.component';


@NgModule({
  declarations: [SingleresourceComponent],
  imports: [
    CommonModule,
    SingleresourceRoutingModule
  ]
})
export class SingleresourceModule { }
