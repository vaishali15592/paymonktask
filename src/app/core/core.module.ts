import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SiteHeaderComponent } from './components/header/site-header.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [SiteHeaderComponent],
  exports: [SiteHeaderComponent]
})
export class CoreModule { }
