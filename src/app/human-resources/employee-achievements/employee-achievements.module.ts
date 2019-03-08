import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAchievementsComponent } from './components/employee-achievements/employee-achievements.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[EmployeeAchievementsComponent],
  declarations: [EmployeeAchievementsComponent]
})
export class EmployeeAchievementsModule { }
