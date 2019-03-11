import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalOpeningsComponent } from './components/internal-openings/internal-openings.component';
import { SharedModule } from '../../shared/shared.module';

import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports:[InternalOpeningsComponent],
  declarations: [InternalOpeningsComponent]
})
export class InternalOpeningsModule { }
