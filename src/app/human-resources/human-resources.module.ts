import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PoliciesProceduresModule } from "./policies-procedures/policies-procedures.module";
import { EmployeeAchievementsModule } from "./employee-achievements/employee-achievements.module";

@NgModule({
  imports: [CommonModule, PoliciesProceduresModule, EmployeeAchievementsModule],
  exports: [PoliciesProceduresModule, EmployeeAchievementsModule],
  declarations: []
})
export class HumanResourcesModule {}
