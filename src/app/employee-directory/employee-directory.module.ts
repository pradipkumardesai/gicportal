import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDirectoryComponent } from './components/employee-directory/employee-directory.component';
import { SharedModule } from '../shared/shared.module';
import { DirectoryCardComponent } from './components/directory-card/directory-card.component';

import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports:[EmployeeDirectoryComponent],
  declarations: [EmployeeDirectoryComponent, DirectoryCardComponent]
})
export class EmployeeDirectoryModule { }
