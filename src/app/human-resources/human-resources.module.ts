import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PoliciesProceduresModule } from "./policies-procedures/policies-procedures.module";
import { EmployeeAchievementsModule } from "./employee-achievements/employee-achievements.module";
import { InternalOpeningsModule } from "./internal-openings/internal-openings.module";
import { NewJoineesModule } from "./new-joinees/new-joinees.module";

@NgModule({
  imports: [
    CommonModule,
    PoliciesProceduresModule,
    EmployeeAchievementsModule,
    InternalOpeningsModule
  ],
  exports: [
    PoliciesProceduresModule,
    EmployeeAchievementsModule,
    InternalOpeningsModule,
    NewJoineesModule
  ],
  declarations: []
})
export class HumanResourcesModule {}
