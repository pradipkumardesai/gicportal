import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PoliciesUpdateComponent } from './policies-update/policies-update.component';
import { AchievementsUpdateComponent } from './achievements-update/achievements-update.component';
import { OpeningsUpdateComponent } from './openings-update/openings-update.component';
import { CommiteesUpdateComponent } from './commitees-update/commitees-update.component';
import { EmployeesUpdateComponent } from './employees-update/employees-update.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { AdminpoliciesUpdateComponent } from './adminpolicies-update/adminpolicies-update.component';
import { ItpoliciesUpdateComponent } from './itpolicies-update/itpolicies-update.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule

  ],
  declarations: [PoliciesUpdateComponent, AchievementsUpdateComponent, OpeningsUpdateComponent, CommiteesUpdateComponent, EmployeesUpdateComponent, AdminpoliciesUpdateComponent, ItpoliciesUpdateComponent]
})
export class AdministratorModule { }
