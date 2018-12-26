import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PoliciesProceduresModule } from "./policies-procedures/policies-procedures.module";
import { EmployeeAchievementsModule } from "./employee-achievements/employee-achievements.module";
import { InternalOpeningsModule } from "./internal-openings/internal-openings.module";
import { NewJoineesModule } from "./new-joinees/new-joinees.module";
import { BirthdaysThisMonthModule } from "./birthdays-this-month/birthdays-this-month.module";

@NgModule({
  imports: [
    CommonModule,
    PoliciesProceduresModule,
    EmployeeAchievementsModule,
    InternalOpeningsModule,
    NewJoineesModule,
    BirthdaysThisMonthModule
  ],
  exports: [
    PoliciesProceduresModule,
    EmployeeAchievementsModule,
    InternalOpeningsModule,
    NewJoineesModule,
    BirthdaysThisMonthModule
  ],
  declarations: []
})
export class HumanResourcesModule {}
