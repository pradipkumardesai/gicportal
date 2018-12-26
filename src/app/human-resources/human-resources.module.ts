import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesProceduresModule } from './policies-procedures/policies-procedures.module';

@NgModule({
  imports: [
    CommonModule,
    PoliciesProceduresModule
  ],
  exports:[PoliciesProceduresModule],
  declarations: []
})
export class HumanResourcesModule { }
