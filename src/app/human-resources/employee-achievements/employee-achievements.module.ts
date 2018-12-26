import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAchievementsComponent } from './components/employee-achievements/employee-achievements.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[EmployeeAchievementsComponent],
  declarations: [EmployeeAchievementsComponent]
})
export class EmployeeAchievementsModule { }
