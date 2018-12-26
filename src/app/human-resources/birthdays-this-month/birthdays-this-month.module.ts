import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthdaysThisMonthComponent } from './components/birthdays-this-month/birthdays-this-month.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[BirthdaysThisMonthComponent],
  declarations: [BirthdaysThisMonthComponent]
})
export class BirthdaysThisMonthModule { }
