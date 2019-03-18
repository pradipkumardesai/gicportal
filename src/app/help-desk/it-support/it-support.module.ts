import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItSupportComponent } from './components/it-support/it-support.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { ItSupportdetailsComponent } from './components/it-supportdetails/it-supportdetails.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule
  ],
  exports:[ItSupportComponent],
  declarations: [ItSupportComponent, ItSupportdetailsComponent]
})
export class ItSupportModule { }
