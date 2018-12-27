import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItSupportComponent } from './components/it-support/it-support.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[ItSupportComponent],
  declarations: [ItSupportComponent]
})
export class ItSupportModule { }
