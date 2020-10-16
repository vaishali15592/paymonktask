import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListresourceRoutingModule } from './listresource-routing.module';
import { ListresourceComponent } from './listresource.component';


@NgModule({
  declarations: [ListresourceComponent],
  imports: [
    CommonModule,
    ListresourceRoutingModule
  ]
})
export class ListresourceModule { }
