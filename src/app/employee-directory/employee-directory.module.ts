import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDirectoryComponent } from './components/employee-directory/employee-directory.component';
import { SharedModule } from '../shared/shared.module';
import { DirectoryCardComponent } from './components/directory-card/directory-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[EmployeeDirectoryComponent],
  declarations: [EmployeeDirectoryComponent, DirectoryCardComponent]
})
export class EmployeeDirectoryModule { }
