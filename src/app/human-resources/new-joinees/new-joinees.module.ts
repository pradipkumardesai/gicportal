import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewJoineesComponent } from './components/new-joinees/new-joinees.component';
import { SharedModule } from '../../shared/shared.module';

import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports:[NewJoineesComponent],
  declarations: [NewJoineesComponent]
})
export class NewJoineesModule { }
