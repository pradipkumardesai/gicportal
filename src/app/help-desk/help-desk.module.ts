import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { ItSupportModule } from './it-support/it-support.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    ItSupportModule,
    CoreModule
  ],
  exports:[
    AdminModule,
    ItSupportModule
  ],
  declarations: []
})
export class HelpDeskModule { }
