import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PoliciesProceduresComponent } from "./human-resources/policies-procedures/components/policies-procedures/policies-procedures.component";
import { EmployeeAchievementsComponent } from "./human-resources/employee-achievements/components/employee-achievements/employee-achievements.component";
import { InternalOpeningsComponent } from "./human-resources/internal-openings/components/internal-openings/internal-openings.component";
import { NewJoineesComponent } from "./human-resources/new-joinees/components/new-joinees/new-joinees.component";
import { BirthdaysThisMonthComponent } from "./human-resources/birthdays-this-month/components/birthdays-this-month/birthdays-this-month.component";
import { DownloadsComponent } from "./human-resources/downloads/components/downloads/downloads.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "policies", component: PoliciesProceduresComponent },
  { path: "emp-achievements", component: EmployeeAchievementsComponent },
  { path: "internal-openings", component: InternalOpeningsComponent },
  { path: "new-joinees", component: NewJoineesComponent },
  { path: "birthdays-this-month", component: BirthdaysThisMonthComponent },
  { path: "downloads", component: DownloadsComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [],
  declarations: []
})
export class AppRouteModule {}
