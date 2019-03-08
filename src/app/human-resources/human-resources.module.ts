import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PoliciesProceduresModule } from "./policies-procedures/policies-procedures.module";
import { EmployeeAchievementsModule } from "./employee-achievements/employee-achievements.module";
import { EmployeeAchievementsDetailModule } from "./employee-achievements-detail/employee-achievements-detail.module";
import { InternalOpeningsModule } from "./internal-openings/internal-openings.module";
import { NewJoineesModule } from "./new-joinees/new-joinees.module";
import { BirthdaysThisMonthModule } from "./birthdays-this-month/birthdays-this-month.module";
import { DownloadsModule } from "./downloads/downloads.module";

@NgModule({
  imports: [
    CommonModule,
    PoliciesProceduresModule,
    EmployeeAchievementsModule,
    EmployeeAchievementsDetailModule,
    InternalOpeningsModule,
    NewJoineesModule,
    BirthdaysThisMonthModule,
    DownloadsModule
  ],
  exports: [
    PoliciesProceduresModule,
    EmployeeAchievementsModule,
    EmployeeAchievementsDetailModule,
    InternalOpeningsModule,
    NewJoineesModule,
    BirthdaysThisMonthModule,
    DownloadsModule
  ],
  declarations: []
})
export class HumanResourcesModule {}
