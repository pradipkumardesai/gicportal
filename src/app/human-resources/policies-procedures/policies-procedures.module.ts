import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesProceduresComponent } from './components/policies-procedures/policies-procedures.component';
import { SharedModule } from '../../shared/shared.module';
import { PoliciesProcedureService } from './services/policies-procedure.service';

import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports:[PoliciesProceduresComponent],
  declarations: [PoliciesProceduresComponent],
  providers:[PoliciesProcedureService]
})
export class PoliciesProceduresModule { }
