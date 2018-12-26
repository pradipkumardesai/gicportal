import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PoliciesProceduresComponent } from "./human-resources/policies-procedures/components/policies-procedures/policies-procedures.component";
import { EmployeeAchievementsComponent } from "./human-resources/employee-achievements/components/employee-achievements/employee-achievements.component";
import { InternalOpeningsComponent } from "./human-resources/internal-openings/components/internal-openings/internal-openings.component";
import { NewJoineesComponent } from "./human-resources/new-joinees/components/new-joinees/new-joinees.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "policies", component: PoliciesProceduresComponent },
  { path: "emp-achievements", component: EmployeeAchievementsComponent },
  { path: "internal-openings", component: InternalOpeningsComponent },
  { path: "new-joinees", component: NewJoineesComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [],
  declarations: []
})
export class AppRouteModule {}
