import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalOpeningsComponent } from './components/internal-openings/internal-openings.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[InternalOpeningsComponent],
  declarations: [InternalOpeningsComponent]
})
export class InternalOpeningsModule { }
