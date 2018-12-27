import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { ItSupportModule } from './it-support/it-support.module';

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    ItSupportModule
  ],
  exports:[
    AdminModule,
    ItSupportModule
  ],
  declarations: []
})
export class HelpDeskModule { }
