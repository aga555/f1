import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaRoutingModule } from './formula-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { BolidComponent } from './bolid/bolid.component';


@NgModule({
  declarations: [HangarComponent, BolidComponent],
  exports: [
    HangarComponent
  ],
  imports: [
    CommonModule,
    FormulaRoutingModule
  ]
})
export class FormulaModule { }
