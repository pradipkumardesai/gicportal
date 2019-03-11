import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthdaysThisMonthComponent } from './components/birthdays-this-month/birthdays-this-month.component';
import { SharedModule } from '../../shared/shared.module';

import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports:[BirthdaysThisMonthComponent],
  declarations: [BirthdaysThisMonthComponent]
})
export class BirthdaysThisMonthModule { }
