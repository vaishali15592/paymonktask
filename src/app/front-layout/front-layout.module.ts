import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontLayoutRoutingModule } from './front-layout-routing.module';
import { FrontLayoutComponent } from './front-layout.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [FrontLayoutComponent],
  imports: [
    CommonModule,
    FrontLayoutRoutingModule,
    CoreModule
  ]
})
export class FrontLayoutModule { }
