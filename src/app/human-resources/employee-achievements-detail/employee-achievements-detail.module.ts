import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAchievementsDetailComponent } from './employee-achievements-detail/employee-achievements-detail.component';
import { CoreModule } from '../../core/core.module';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  declarations: [EmployeeAchievementsDetailComponent]
})
export class EmployeeAchievementsDetailModule { }
