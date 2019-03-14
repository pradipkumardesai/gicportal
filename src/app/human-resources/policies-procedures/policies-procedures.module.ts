import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesProceduresComponent } from './components/policies-procedures/policies-procedures.component';
import { SharedModule } from '../../shared/shared.module';
import { PoliciesProcedureService } from './services/policies-procedure.service';

import { CoreModule } from '../../core/core.module';
import { PolicydetailsComponent } from './components/policydetails/policydetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CoreModule
  ],
  exports:[PoliciesProceduresComponent],
  declarations: [PoliciesProceduresComponent, PolicydetailsComponent],
  providers:[PoliciesProcedureService]
})
export class PoliciesProceduresModule { }
